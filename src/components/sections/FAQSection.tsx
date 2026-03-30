import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const displayFaqs = faqs.slice(0, 3);

  return (
    <section className="ui-section bg-card">
      <Container className="max-w-3xl">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div>
          {displayFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-border">
                <button onClick={() => setOpenId(isOpen ? null : faq.id)} className="flex w-full items-center justify-between py-5 text-left">
                  <span className="pr-4 text-lg font-semibold leading-7 text-foreground">{faq.question}</span>
                  {isOpen ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-primary" />}
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="ui-body-sm pb-5 pr-12">{faq.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
