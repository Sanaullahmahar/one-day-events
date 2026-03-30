import Container from "@/components/layout/Container";
import { GIVING_BACK } from "@/lib/constants";
import { charities } from "@/data/marketing/charities";
import givingBackImage from "@/assets/giving-back.png";
import { Heart } from "lucide-react";

const GivingBackSection = () => (
  <section className="ui-section bg-muted">
    <Container>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="w-64 shrink-0 md:w-80">
          <img src={givingBackImage} alt="Giving back illustration" className="w-full" loading="lazy" width={512} height={600} />
        </div>
        <div className="flex-1">
          <h2 className="ui-h3 mb-4">{GIVING_BACK.heading}</h2>
          <p className="ui-body mb-6">{GIVING_BACK.description}</p>
          <div className="flex flex-wrap gap-4">
            {charities.map((c) => (
              <div key={c.id} className="flex h-12 w-12 items-center justify-center rounded-full bg-accent" title={c.name}>
                <Heart className="h-5 w-5 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default GivingBackSection;
