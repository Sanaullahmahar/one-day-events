import Container from "@/components/layout/Container";
import { partners } from "@/data/catalog/partners";
import PartnerCard from "@/components/ui/PartnerCard";

const PartnerSection = () => (
  <section className="ui-section bg-card">
    <Container className="max-w-[1320px]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mx-auto mb-[80px] w-full max-w-[516px] text-center text-[32px] font-extrabold leading-[1.2] text-foreground sm:text-[38px] sm:leading-[46px]">
          Partner with One Day Event<br />&amp; start making money!
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1220px] gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {partners.map((p) => (
          <PartnerCard key={p.id} {...p} />
        ))}
      </div>
    </Container>
  </section>
);

export default PartnerSection;
