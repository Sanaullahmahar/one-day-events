interface TestimonialCarouselDotsProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

const TestimonialCarouselDots = ({ total, activeIndex, onSelect }: TestimonialCarouselDotsProps) => (
  <div className="mt-10 flex items-center justify-center gap-5">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => onSelect(index)}
        aria-label={`Go to testimonial page ${index + 1}`}
        className={`h-3 w-3 rounded-full transition-all duration-300 ${
          activeIndex === index ? "bg-foreground/70" : "bg-foreground/20 hover:bg-foreground/35"
        }`}
      />
    ))}
  </div>
);

export default TestimonialCarouselDots;
