import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { CONTACT_CTA } from "@/lib/constants";

const ContactCTASection = () => (
  <section className="ui-section bg-card">
    <Container className="max-w-2xl text-center">
      <h2 className="ui-h3 mb-4">
        {CONTACT_CTA.heading}
      </h2>
      <p className="ui-body mb-8">
        {CONTACT_CTA.description}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg">Contact Us</Button>
        <Button variant="outline" size="lg">
          FAQ & Definitions
        </Button>
      </div>
    </Container>
  </section>
);

export default ContactCTASection;
