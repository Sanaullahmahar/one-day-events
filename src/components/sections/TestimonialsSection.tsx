import { useEffect, useMemo, useState } from "react";
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

  const maxSlide = Math.max(testimonials.length - itemsPerPage, 0);
  const metrics = useMemo(() => {
    const sw = 100 / itemsPerPage;
    return { sw, tx: activeIndex * sw, dots: maxSlide + 1 };
  }, [activeIndex, itemsPerPage, maxSlide]);

  useEffect(() => {
    if (activeIndex > maxSlide) setActiveIndex(maxSlide);
  }, [activeIndex, maxSlide]);

  return (
    <section className="ui-section overflow-hidden bg-card">
      <Container className="max-w-[1460px] px-0 sm:px-3 lg:px-4">
        <div className="mb-4 px-4 text-center sm:mb-6">
          <h2 className="mb-3 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[42px]">Guaranteed Satisfaction</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[34px] font-extrabold leading-none text-cta sm:text-[40px]">5.0</span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-orange-500 sm:h-9 sm:w-9" strokeWidth={2} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden px-2 py-2 sm:px-4">
          <div className="flex items-stretch transition-transform duration-500" style={{ transform: `translateX(-${metrics.tx}%)`, transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
            {testimonials.map((t, i) => (
              <div key={t.id} className="shrink-0 px-3 sm:px-4" style={{ width: `${metrics.sw}%` }}>
                <div className="mx-auto max-w-[560px]">
                  <TestimonialCard testimonial={t} onReadMore={setSelectedTestimonial} isFeatured={itemsPerPage === 3 && i === activeIndex + 1} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <TestimonialCarouselDots total={metrics.dots} activeIndex={activeIndex} onSelect={setActiveIndex} />
        <TestimonialModal open={!!selectedTestimonial} testimonial={selectedTestimonial} onOpenChange={(o) => { if (!o) setSelectedTestimonial(null); }} />
      </Container>
    </section>
  );
};

export default TestimonialsSection;
