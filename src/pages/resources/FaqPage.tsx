import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { faqs, faqCategories } from "@/data/content/faqs";
import { Plus, Minus } from "lucide-react";

const FaqPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      faqs.filter(
        (f) =>
          (activeCategory === "all" || f.category === activeCategory) &&
          (f.question.toLowerCase().includes(query.toLowerCase()) ||
            f.answer.toLowerCase().includes(query.toLowerCase())),
      ),
    [query, activeCategory],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-16 pb-10">
          <Container className="max-w-[1030px]">
            <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[65px]">
              Frequently Asked<br />Questions
            </h1>
            <form className="mx-auto mt-14 flex max-w-[750px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQ's..."
                className="h-[60px] flex-1 rounded-l-[10px] border border-border bg-card px-6 text-base text-foreground outline-none"
              />
              <button type="submit" className="h-[60px] w-[180px] rounded-r-[10px] bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Search
              </button>
            </form>
          </Container>
        </section>

        {/* Category Tabs */}
        <section className="pb-4">
          <Container className="max-w-[750px]">
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ List */}
        <section className="pb-20">
          <Container className="max-w-[750px]">
            <div>
              {filtered.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="border-b border-border">
                    <button onClick={() => setOpenId(isOpen ? null : faq.id)} className="flex w-full items-center justify-between py-5 text-left">
                      <span className="pr-4 text-lg font-semibold leading-7 text-foreground">{faq.question}</span>
                      {isOpen ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-primary" />}
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <p className="py-10 text-center text-muted-foreground">No questions found matching your search.</p>
              )}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
