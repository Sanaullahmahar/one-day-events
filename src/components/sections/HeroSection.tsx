import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/ui/RotatingText";
import { HERO } from "@/lib/constants";
import { heroRotatingWords } from "@/data/heroWords";
import { useNavigate } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-card pb-0 pt-12 lg:pt-20">
      <Container className="relative z-10 text-center">
        <h1 className="mb-[10px] h-auto overflow-hidden text-[38px] font-black leading-[1.08] text-foreground sm:h-[62px] sm:text-[50px]">
          <RotatingText words={heroRotatingWords} className="text-primary" /> Insurance
        </h1>
        <p className="ui-body-lg mb-8">{HERO.subheading}</p>
        <Button size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 rounded-full px-10" onClick={() => navigate("/get-quote")}>
          {HERO.cta}
        </Button>
      </Container>

      <div className="relative z-10 mx-auto mt-8 max-w-4xl px-4">
        <img src={heroIllustration} alt="People celebrating at an event" className="w-full drop-shadow-lg" width={1200} height={600} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 100C180 160 360 200 540 190C720 180 900 130 1080 110C1200 96 1340 100 1440 110V260H0V100Z" fill="hsl(218, 85%, 30%)" fillOpacity="0.3" />
          <path d="M0 140C200 190 400 220 600 200C800 180 1000 120 1200 130C1320 136 1400 150 1440 160V260H0V140Z" fill="hsl(218, 85%, 30%)" fillOpacity="0.6" />
          <path d="M0 180C240 220 480 240 720 220C960 200 1200 160 1440 180V260H0V180Z" fill="hsl(213, 74%, 52%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
