import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onReadMore: (t: Testimonial) => void;
  isFeatured?: boolean;
}

const getInitials = (name: string) => name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const TestimonialCard = ({ testimonial, onReadMore, isFeatured = false }: TestimonialCardProps) => (
  <article
    className={`relative mt-12 flex h-full min-h-[305px] flex-col rounded-[24px] bg-card px-6 pb-8 pt-16 shadow-md transition-all duration-500 ${
      isFeatured ? "scale-[1.01] shadow-lg" : "scale-100"
    }`}
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <Avatar className="h-[92px] w-[92px] border-4 border-card bg-card shadow-lg">
        <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
          {getInitials(testimonial.name)}
        </AvatarFallback>
      </Avatar>
    </div>
    <div className="mb-4 flex items-start justify-between gap-3">
      <h4 className="max-w-[13rem] text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">{testimonial.name}</h4>
      <div className="flex shrink-0 gap-1 pt-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-[14px] w-[14px] fill-yellow-400 text-orange-500" strokeWidth={2} />
        ))}
      </div>
    </div>
    <p className="flex-1 text-[14px] leading-8 text-muted-foreground">{testimonial.shortReview}</p>
    <button type="button" onClick={() => onReadMore(testimonial)} className="mt-4 inline-flex w-fit text-[14px] font-semibold text-secondary transition-colors hover:text-secondary/80">
      Read More
    </button>
  </article>
);

export default TestimonialCard;
