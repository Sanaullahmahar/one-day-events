import { Star } from "lucide-react";

import type { Testimonial } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onReadMore: (testimonial: Testimonial) => void;
  isFeatured?: boolean;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({
  testimonial,
  onReadMore,
  isFeatured = false,
}: TestimonialCardProps) => (
  <article
    className={`relative mt-12 flex h-full min-h-[305px] flex-col rounded-[24px] bg-white px-6 pb-8 pt-16 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-500 ${
      isFeatured
        ? "scale-[1.01] shadow-[0_12px_30px_rgba(15,23,42,0.11)]"
        : "scale-100"
    }`}
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <Avatar className="h-[92px] w-[92px] border-4 border-white bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)]">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
          {getInitials(testimonial.name)}
        </AvatarFallback>
      </Avatar>
    </div>

    <div className="mb-4 flex items-start justify-between gap-3">
      <h4 className="max-w-[13rem] text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#2E3553]">
        {testimonial.name}
      </h4>
      <div className="flex shrink-0 gap-1 pt-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-[14px] w-[14px] fill-[#FACC15] text-[#FF5A1F]"
            strokeWidth={2}
          />
        ))}
      </div>
    </div>

    <p className="flex-1 text-[14px] leading-8 text-[#8B93A7]">
      {testimonial.shortReview}
    </p>
    <button
      type="button"
      onClick={() => onReadMore(testimonial)}
      className="mt-4 inline-flex w-fit text-[14px] font-semibold text-[#41A5F5] transition-colors hover:text-[#2491ea]"
    >
      Read More
    </button>
  </article>
);

export default TestimonialCard;
