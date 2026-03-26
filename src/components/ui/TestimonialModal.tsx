import { Star } from "lucide-react";

import type { Testimonial } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface TestimonialModalProps {
  open: boolean;
  testimonial: Testimonial | null;
  onOpenChange: (open: boolean) => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialModal = ({
  open,
  testimonial,
  onOpenChange,
}: TestimonialModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="w-[calc(100%-2rem)] max-w-[840px] rounded-[30px] border-none bg-white px-8 pb-14 pt-20 shadow-[0_0_28px_rgba(255,255,255,0.95)] sm:px-9">
      {testimonial ? (
        <>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <Avatar className="h-[108px] w-[108px] border-4 border-white bg-white shadow-[0_10px_25px_rgba(15,23,42,0.20)]">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="bg-primary text-2xl font-semibold text-primary-foreground">
                {getInitials(testimonial.name)}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <DialogTitle className="text-[29px] font-medium tracking-[-0.02em] text-[#2E3553]">
                {testimonial.name}
              </DialogTitle>
              <div className="flex justify-center gap-1 sm:justify-start">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-7 w-7 fill-[#FACC15] text-[#FF5A1F]"
                    strokeWidth={2}
                  />
                ))}
              </div>
            </div>

            <DialogDescription className="text-left text-[19px] leading-[1.6] text-[#39425C]">
              {testimonial.fullReview}
            </DialogDescription>
          </div>
        </>
      ) : null}
    </DialogContent>
  </Dialog>
);

export default TestimonialModal;
