import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const highlights = [
  {
    title: "Who We Are",
    body: "One Day Event is built to make buying special event insurance simple, fast, and reliable. We help customers compare high-quality coverage from top-rated carriers and complete the process online in minutes.",
    image: "https://www.onedayevent.com/assets/images/blog-2-thumb.png",
  },
  {
    title: "What We Believe",
    body: "Planning an event should be exciting, not stressful. Our mission is to remove confusion from insurance by guiding customers through clear steps, transparent pricing, and support that feels human.",
    image: "https://www.onedayevent.com/assets/images/blog-5-thumb.png",
  },
  {
    title: "How We Help",
    body: "From weddings and private parties to concerts and festivals, we provide coverage options that match each event's unique risk profile. Our team helps ensure venue requirements are met without overpaying.",
    image: "https://www.onedayevent.com/assets/images/blog-6-thumb.png",
  },
  {
    title: "Customer-First Service",
    body: "We focus on speed and clarity: fast quote flow, quick policy purchase, and dependable support before and after checkout. Customers can access documents and policy details through their portal any time.",
    image: "https://www.onedayevent.com/assets/images/blog-1-thumb.png",
  },
];

const AboutUsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="pt-16 pb-10">
        <Container className="max-w-[1030px]">
          <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[65px]">
            About Us
          </h1>
          <p className="mx-auto mt-8 max-w-[900px] text-center text-base leading-8 text-muted-foreground">
            We compare the best event insurance options so you can protect your event confidently and enjoy your day.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-[1030px]">
          <div className="space-y-16">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className={`grid items-center gap-10 rounded-[28px] bg-card p-8 shadow-md md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <img src={item.image} alt={item.title} className="h-[280px] w-full rounded-[22px] object-cover" />
                <div>
                  <h2 className="text-[30px] font-extrabold leading-[1.1] text-foreground">{item.title}</h2>
                  <p className="mt-6 text-base leading-8 text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 text-center">
        <h2 className="text-[32px] font-bold text-foreground">Ready to protect your event?</h2>
        <a
          href="/get-quote"
          className="mt-8 inline-flex h-12 min-w-[220px] items-center justify-center rounded-full bg-cta px-8 text-base font-semibold text-cta-foreground transition-colors hover:bg-cta/90"
        >
          Get Quote
        </a>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUsPage;
