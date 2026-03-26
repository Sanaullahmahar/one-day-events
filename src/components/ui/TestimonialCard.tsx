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
    className={`relative mt-14 flex h-full min-h-[355px] flex-col rounded-[28px] bg-white px-8 pb-10 pt-20 shadow-[0_8px_30px_rgba(15,23,42,0.10)] transition-all duration-500 ${
      isFeatured
        ? "scale-[1.02] shadow-[0_14px_36px_rgba(15,23,42,0.12)]"
        : "scale-100"
    }`}
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <Avatar className="h-[116px] w-[116px] border-4 border-white bg-white shadow-[0_8px_22px_rgba(15,23,42,0.14)]">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
          {getInitials(testimonial.name)}
        </AvatarFallback>
      </Avatar>
    </div>

    <div className="mb-5 flex items-start justify-between gap-4">
      <h4 className="max-w-[15rem] text-[28px] font-semibold leading-none tracking-[-0.02em] text-[#2E3553]">
        {testimonial.name}
      </h4>
      <div className="flex shrink-0 gap-1 pt-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-[15px] w-[15px] fill-[#FACC15] text-[#FF5A1F]"
            strokeWidth={2}
          />
        ))}
      </div>
    </div>

    <p className="flex-1 text-[17px] leading-[1.6] text-[#8B93A7]">
      {testimonial.shortReview}
    </p>
    <button
      type="button"
      onClick={() => onReadMore(testimonial)}
      className="mt-5 inline-flex w-fit text-[17px] font-medium text-[#41A5F5] transition-colors hover:text-[#2491ea]"
    >
      Read More
    </button>
  </article>
);

export default TestimonialCard;
