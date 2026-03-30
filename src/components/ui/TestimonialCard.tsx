import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onReadMore: (t: Testimonial) => void;
  isFeatured?: boolean;
}

const getInitials = (name: string) => name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const TestimonialCard = ({ testimonial, onReadMore, isFeatured = false }: TestimonialCardProps) => (
  <article
    className={`relative mt-12 flex h-full min-h-[265px] flex-col rounded-[24px] border border-slate-200/70 bg-white px-7 pb-8 pt-14 shadow-[0_4px_18px_rgba(15,23,42,0.08)] transition-all duration-500 ${
      isFeatured ? "min-h-[276px] px-7 pb-8 pt-[60px] shadow-[0_8px_24px_rgba(15,23,42,0.11)]" : ""
    }`}
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <Avatar className={`${isFeatured ? "h-[102px] w-[102px]" : "h-[92px] w-[92px]"} border-4 border-white bg-white shadow-[0_10px_22px_rgba(15,23,42,0.12)]`}>
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
          {getInitials(testimonial.name)}
        </AvatarFallback>
      </Avatar>
    </div>
    <div className="mb-5 flex items-start justify-between gap-4">
      <h4 className={`${isFeatured ? "text-[24px]" : "text-[20px]"} max-w-[13rem] font-semibold leading-[1.15] tracking-[-0.02em] text-slate-800`}>{testimonial.name}</h4>
      <div className="flex shrink-0 gap-1 pt-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className={`${isFeatured ? "h-[17px] w-[17px]" : "h-[15px] w-[15px]"} fill-secondary text-primary`} strokeWidth={2} />
        ))}
      </div>
    </div>
    <p className={`${isFeatured ? "text-[15px] leading-[1.72]" : "text-[14px] leading-[1.7]"} flex-1 text-slate-400`}>{testimonial.shortReview}</p>
    <button type="button" onClick={() => onReadMore(testimonial)} className={`${isFeatured ? "mt-5 text-[15px]" : "mt-5 text-[14px]"} inline-flex w-fit font-medium text-primary transition-colors hover:text-primary/80`}>
      Read More
    </button>
  </article>
);

export default TestimonialCard;
