interface TestimonialCarouselDotsProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

const TestimonialCarouselDots = ({
  total,
  activeIndex,
  onSelect,
}: TestimonialCarouselDotsProps) => (
  <div className="mt-10 flex items-center justify-center gap-5">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => onSelect(index)}
        aria-label={`Go to testimonial page ${index + 1}`}
        aria-pressed={activeIndex === index}
        className={`h-3 rounded-full transition-all duration-300 ${
          activeIndex === index
            ? "w-3 bg-black/70"
            : "w-3 bg-black/20 hover:bg-black/35"
        }`}
      />
    ))}
  </div>
);

export default TestimonialCarouselDots;
