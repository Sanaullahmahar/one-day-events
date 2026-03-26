import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Play } from "lucide-react";

const WhyChooseSection = () => (
  <section className="ui-section bg-card">
    <Container>
      <SectionHeading>Why choose One Day Event?</SectionHeading>

      <div className="mx-auto max-w-lg overflow-hidden rounded-2xl bg-primary shadow-lg">
        <div className="relative flex items-center justify-center p-10">
          <div className="text-center">
            <h3 className="mb-3 text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-primary-foreground">
              Why Choose<br />One Day Event?
            </h3>
            <div className="mt-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20 transition-colors hover:bg-primary-foreground/30">
                <Play className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default WhyChooseSection;
