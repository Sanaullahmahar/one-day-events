import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "./Container";
import { navLinks } from "@/data/navLinks";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/favicon.ico"
            alt={`${SITE_NAME} logo`}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="leading-tight">
            <span className="text-sm font-bold text-foreground">{SITE_NAME.toUpperCase()}</span>
            <span className="block text-[10px] tracking-widest text-muted-foreground">{SITE_TAGLINE}</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.dropdownSections ? link.id : null)}
              onMouseLeave={() => setActiveDropdown((current) => (current === link.id ? null : current))}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 py-5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
                {link.dropdownSections ? (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === link.id && "rotate-180",
                    )}
                  />
                ) : null}
              </a>

              {link.dropdownSections && activeDropdown === link.id ? (
                <div
                  className={cn(
                    "absolute left-1/2 top-full -translate-x-1/2 rounded-[24px] border border-border bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)]",
                    link.id === "events" ? "w-[min(92vw,760px)]" : "w-56",
                  )}
                >
                  <div
                    className={cn(
                      "gap-x-14 gap-y-3",
                      link.dropdownSections.length > 1 ? "grid grid-cols-2" : "grid grid-cols-1",
                    )}
                  >
                    {link.dropdownSections.map((section) => (
                      <div key={section.id} className="space-y-2">
                        {section.items.map((item) => (
                          <a
                            key={item.id}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-[15px] text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Contact</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <div key={link.id} className="rounded-2xl border border-border/80 bg-white/80 px-4 py-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-sm font-medium text-foreground"
                  onClick={() =>
                    setMobileExpanded((current) => (current === link.id ? null : link.id))
                  }
                >
                  <span>{link.label}</span>
                  {link.dropdownSections ? (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        mobileExpanded === link.id && "rotate-180",
                      )}
                    />
                  ) : null}
                </button>

                {mobileExpanded === link.id && link.dropdownSections ? (
                  <div className="mt-3 space-y-2 border-t border-border/70 pt-3">
                    {link.dropdownSections.map((section) => (
                      <div key={section.id} className="space-y-1">
                        {section.items.map((item) => (
                          <a
                            key={item.id}
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="outline" size="sm" className="flex-1">Login</Button>
              <Button size="sm" className="flex-1">Contact</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
