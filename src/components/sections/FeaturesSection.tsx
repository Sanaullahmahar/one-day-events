import Container from "@/components/layout/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/marketing/features";

const FeaturesSection = () => (
  <section className="ui-section bg-card">
    <Container>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </div>
    </Container>
  </section>
);

export default FeaturesSection;
