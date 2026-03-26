import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { privacySections } from "@/data/learn";

const PrivacyPage = () => (
  <div className="min-h-screen bg-[#f4f5f7]">
    <Navbar />
    <main>
      <section className="pt-16 pb-16">
        <Container className="max-w-[1030px]">
          <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1d2c57] md:text-[65px]">
            Privacy
          </h1>

          <img
            src="https://www.onedayevent.com/assets/images/privacy.png"
            alt="Privacy illustration"
            className="mx-auto mt-10 w-full max-w-[680px]"
          />

          <h2 className="mt-14 text-[28px] font-bold text-[#172b57]">Jeewanjee Insurance Agency's Privacy Policy</h2>
          <p className="mt-6 text-sm leading-7 text-[#2f3f63]">
            OneDayEvent.com is committed to protecting your privacy. Please take a few minutes to read this Privacy
            Policy so that you understand how we treat your information. This Privacy Policy explains what information
            we collect from you, how we use such information and with whom it may be shared, and your rights and
            choices with regard to controlling your information when you visit the Sites and/or use the Services.
          </p>

          <h3 className="mt-14 text-[24px] font-bold text-[#172b57]">Full privacy statement</h3>
          <div className="mt-6 space-y-4">
            {privacySections.map((title, index) => (
              <details key={title} open={index === 0} className="rounded-xl border border-[#e4e8f1] bg-white">
                <summary className="cursor-pointer list-none px-6 py-5 text-base font-semibold text-[#1d2c57] md:text-lg">
                  {title}
                </summary>
                <div className="border-t border-[#e4e8f1] px-6 py-5 text-sm leading-7 text-[#51607e]">
                  We collect and process information required to provide and improve our services, communicate with
                  you, fulfill contractual obligations, and maintain safety and compliance. For complete legal terms,
                  please refer to the full policy on the live site.
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
