import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CustomerPortalSection from "@/components/sections/CustomerPortalSection";
import FAQSection from "@/components/sections/FAQSection";
import PartnerSection from "@/components/sections/PartnerSection";
import GivingBackSection from "@/components/sections/GivingBackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <WhyChooseSection />
      <FeaturesSection />
      <CustomerPortalSection />
      <FAQSection />
      <PartnerSection />
      <GivingBackSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactCTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
