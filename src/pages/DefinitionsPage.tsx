import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { definitions } from "@/data/definitions";

const DefinitionsPage = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => definitions.filter((d) => d.term.toLowerCase().includes(query.toLowerCase()) || d.definition.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const grouped = useMemo(() => {
    const groups: Record<string, typeof definitions> = {};
    filtered.forEach((d) => {
      const letter = d.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(d);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-16 pb-10">
          <Container className="max-w-[1030px]">
            <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[65px]">
              Definitions
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-center text-base leading-8 text-muted-foreground">
              Understanding insurance terminology can be confusing. Here's a glossary of common terms used in event insurance.
            </p>
            <form className="mx-auto mt-10 flex max-w-[750px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search definitions..."
                className="h-[60px] flex-1 rounded-l-[10px] border border-border bg-card px-6 text-base text-foreground outline-none"
              />
              <button type="submit" className="h-[60px] w-[180px] rounded-r-[10px] bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Search
              </button>
            </form>
          </Container>
        </section>

        <section className="pb-20">
          <Container className="max-w-[750px]">
            {grouped.map(([letter, defs]) => (
              <div key={letter} className="mb-8">
                <h2 className="mb-4 text-2xl font-extrabold text-primary">{letter}</h2>
                <div className="space-y-4">
                  {defs.map((d) => (
                    <div key={d.term} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="text-lg font-bold text-foreground">{d.term}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{d.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {grouped.length === 0 && (
              <p className="py-10 text-center text-muted-foreground">No definitions found matching your search.</p>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DefinitionsPage;
