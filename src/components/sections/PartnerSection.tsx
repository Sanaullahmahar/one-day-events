import Container from "@/components/layout/Container";
import { partners } from "@/data/partners";
import PartnerCard from "@/components/ui/PartnerCard";

const PartnerSection = () => (
  <section className="ui-section bg-white">
    <Container className="max-w-[1320px]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="ui-h2 text-balance text-[#2E3553]">
          Partner with One Day Event
          <br />
          &amp; start making money!
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1220px] gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} {...partner} />
        ))}
      </div>
    </Container>
  </section>
);

export default PartnerSection;
