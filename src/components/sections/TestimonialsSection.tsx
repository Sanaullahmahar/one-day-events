import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TestimonialCarouselDots from "@/components/ui/TestimonialCarouselDots";
import TestimonialModal from "@/components/ui/TestimonialModal";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";
import { Star } from "lucide-react";

const getItemsPerPage = (w: number) => (w < 768 ? 1 : w < 1024 ? 2 : 3);

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    const update = () => setItemsPerPage(getItemsPerPage(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const windowStart = testimonials.length + activeIndex - Math.floor(itemsPerPage / 2);
  const slideWidth = 100 / itemsPerPage;
  const translateX = windowStart * slideWidth;
  const featuredIndex = testimonials.length + activeIndex;

  return (
    <section className="ui-section overflow-hidden bg-white">
      <Container className="max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-5 text-[34px] font-black leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-[44px]">
            Guaranteed Satisfaction
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[40px] font-extrabold leading-none text-primary sm:text-[42px]">5.0</span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-secondary text-primary sm:h-9 sm:w-9" strokeWidth={2} />
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden px-1 py-2">
          <div
            className="flex items-end transition-transform duration-500"
            style={{
              transform: `translateX(-${translateX}%)`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => {
              const isFeatured =
                itemsPerPage === 1
                  ? index === featuredIndex
                  : itemsPerPage === 3 && index === featuredIndex;
              const cardWidthClass = itemsPerPage === 1
                ? "max-w-[560px]"
                : itemsPerPage === 2
                  ? "max-w-[500px]"
                  : isFeatured
                    ? "max-w-[450px] lg:max-w-[468px]"
                    : "max-w-[420px] lg:max-w-[428px]";

              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="shrink-0 px-3 sm:px-4"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className={`mx-auto w-full ${cardWidthClass}`}>
                    <TestimonialCard
                      testimonial={testimonial}
                      onReadMore={setSelectedTestimonial}
                      isFeatured={isFeatured}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <TestimonialCarouselDots
          total={testimonials.length}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
        <TestimonialModal
          open={!!selectedTestimonial}
          testimonial={selectedTestimonial}
          onOpenChange={(o) => {
            if (!o) setSelectedTestimonial(null);
          }}
        />
      </Container>
    </section>
  );
};

export default TestimonialsSection;
