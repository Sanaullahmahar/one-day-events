import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { getEventBySlug } from "@/data/events";
import { CheckCircle } from "lucide-react";

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = getEventBySlug(slug || "");

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Container className="py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Event type not found</h1>
          <p className="mt-4 text-muted-foreground">The event type you're looking for doesn't exist.</p>
          <Button asChild className="mt-8">
            <Link to="/">Go Home</Link>
          </Button>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-0 pt-16">
          <Container className="relative z-10 text-center">
            <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[65px]">
              {event.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-base leading-8 text-muted-foreground">
              {event.description}
            </p>
            <Button
              size="lg"
              className="mt-8 bg-cta text-cta-foreground hover:bg-cta/90 rounded-full px-10"
              asChild
            >
              <Link to={`/get-quote?event=${event.slug}`}>Get Quote</Link>
            </Button>
          </Container>

          {/* Wave */}
          <div className="mt-12">
            <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
              <path d="M0 80C180 140 360 160 540 150C720 140 900 100 1080 90C1200 82 1340 90 1440 100V200H0V80Z" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <path d="M0 120C200 160 400 180 600 170C800 160 1000 120 1200 130C1320 136 1400 150 1440 160V200H0V120Z" fill="hsl(var(--primary))" fillOpacity="0.6" />
              <path d="M0 160C240 180 480 190 720 180C960 170 1200 150 1440 160V200H0V160Z" fill="hsl(var(--primary))" />
            </svg>
          </div>
        </section>

        {/* Event Image */}
        <section className="bg-muted py-16">
          <Container className="max-w-4xl">
            <img
              src={event.heroImage}
              alt={event.title}
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </Container>
        </section>

        {/* Tips */}
        <section className="py-16 bg-card">
          <Container className="max-w-3xl">
            <h2 className="text-[30px] font-extrabold leading-[1.1] text-foreground mb-8">
              Tips for {event.shortTitle} Insurance
            </h2>
            <div className="space-y-4">
              {event.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-base leading-7 text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted text-center">
          <h2 className="text-[32px] font-bold text-foreground">Ready to protect your {event.shortTitle.toLowerCase()}?</h2>
          <Button
            size="lg"
            className="mt-8 bg-cta text-cta-foreground hover:bg-cta/90 rounded-full px-10"
            asChild
          >
            <Link to={`/get-quote?event=${event.slug}`}>Get Quote Now</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
