import { useEffect, useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TestimonialCarouselDots from "@/components/ui/TestimonialCarouselDots";
import TestimonialModal from "@/components/ui/TestimonialModal";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";
import { Star } from "lucide-react";

const getItemsPerPage = (width: number) => {
  if (width < 768) {
    return 1;
  }

  if (width < 1024) {
    return 2;
  }

  return 3;
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxSlideIndex = Math.max(testimonials.length - itemsPerPage, 0);

  const carouselMetrics = useMemo(() => {
    const slideWidth = 100 / itemsPerPage;

    return {
      slideWidth,
      translateX: activeIndex * slideWidth,
      totalDots: maxSlideIndex + 1,
    };
  }, [activeIndex, itemsPerPage, maxSlideIndex]);

  useEffect(() => {
    if (activeIndex > maxSlideIndex) {
      setActiveIndex(maxSlideIndex);
    }
  }, [activeIndex, maxSlideIndex]);

  return (
    <section className="ui-section overflow-hidden bg-white">
      <Container className="max-w-[1460px] px-0 sm:px-3 lg:px-4">
        <div className="mb-4 px-4 text-center sm:mb-6">
          <h2 className="mb-3 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-[#2E3553] sm:text-[42px]">
            Guaranteed Satisfaction
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[34px] font-extrabold leading-none text-[#EF2B2D] sm:text-[40px]">
              5.0
            </span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-8 w-8 fill-[#FACC15] text-[#FF5A1F] sm:h-9 sm:w-9"
                  strokeWidth={2}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden px-2 py-2 sm:px-4">
          <div
            className="flex items-stretch transition-transform duration-500"
            style={{
              transform: `translateX(-${carouselMetrics.translateX}%)`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="shrink-0 px-3 sm:px-4"
                style={{ width: `${carouselMetrics.slideWidth}%` }}
              >
                <div className="mx-auto max-w-[560px]">
                  <TestimonialCard
                    testimonial={testimonial}
                    onReadMore={setSelectedTestimonial}
                    isFeatured={itemsPerPage === 3 && index === activeIndex + 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialCarouselDots
          total={carouselMetrics.totalDots}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <TestimonialModal
          open={selectedTestimonial !== null}
          testimonial={selectedTestimonial}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedTestimonial(null);
            }
          }}
        />
      </Container>
    </section>
  );
};

export default TestimonialsSection;
