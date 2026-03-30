import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const privacySections = [
  {
    title: "Information We Collect About You",
    content: "We collect information you provide directly to us, such as when you request a quote, purchase a policy, create an account, or contact us. This includes your name, email address, phone number, event details, and payment information.",
  },
  {
    title: "How We Use Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send related information, and respond to your comments and questions.",
  },
  {
    title: "How We Share Information",
    content: "We may share your information with insurance carriers to process your policy, service providers who assist our operations, and as required by law. We do not sell your personal information to third parties.",
  },
  {
    title: "Choices and Rights",
    content: "You may opt out of receiving promotional communications, request access to your personal data, or request deletion of your information by contacting us.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content: "We use cookies and similar tracking technologies to collect and track information about your browsing activity to improve our website experience.",
  },
  {
    title: "Security",
    content: "We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.",
  },
];

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="pt-16 pb-10">
        <Container className="max-w-[800px]">
          <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[65px]">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-6 text-center text-sm text-muted-foreground">
            Last updated: January 1, 2024
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-[800px]">
          <div className="space-y-10">
            {privacySections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
