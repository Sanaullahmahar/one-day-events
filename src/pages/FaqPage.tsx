import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { faqCategories, faqItems } from "@/data/learn";

const FaqPage = () => {
  const [query, setQuery] = useState("");

  const filtered = faqItems.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <Navbar />
      <main>
        <section className="pt-16 pb-14">
          <Container className="max-w-[1030px]">
            <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1d2c57] md:text-[65px]">
              Frequently Asked
              <br />
              Questions
            </h1>

            <form className="mx-auto mt-14 flex max-w-[750px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-[60px] flex-1 rounded-l-[10px] border border-[#dcdfe7] bg-white px-6 text-base text-[#1d2c57] outline-none"
              />
              <button
                type="submit"
                className="h-[60px] w-[180px] rounded-r-[10px] bg-primary text-base font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Search
              </button>
            </form>

            <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
              {faqCategories.map((category) => (
                <article
                  key={category.id}
                  className="rounded-[10px] border border-[#eceef4] bg-white px-6 py-8 text-center shadow-[0_4px_10px_rgba(0,0,0,0.06)] md:h-[170px]"
                >
                  <img src={category.icon} alt="" className="mx-auto h-11 w-11 md:mt-1" />
                  <h3 className="mt-4 text-[23px] font-bold leading-none text-[#172b57]">{category.label}</h3>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-[#f4f5f7]">
              {filtered.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-4 border-b border-[#e6e8ee] py-8 text-[#172b57]"
                >
                  <Plus className="h-6 w-6 shrink-0" strokeWidth={3} />
                  <p className="text-[20px] font-bold leading-tight md:text-[23px]">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-[23px] font-bold text-[#172b57]">Download FAQs document as PDF</h2>
          <button className="mt-10 h-12 min-w-[200px] rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary/90">
            Download
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
