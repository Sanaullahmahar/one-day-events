import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/types";

interface FAQItemProps extends FAQ {
  defaultOpen?: boolean;
}

const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-semibold text-foreground">{question}</span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-primary" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-primary" />
        )}
      </button>
      {open && (
        <div className="pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
