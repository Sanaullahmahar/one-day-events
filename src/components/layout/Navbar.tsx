import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import { navLinks } from "@/data/navLinks";
import { SITE_NAME, SITE_TAGLINE, PHONE_NUMBER } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
            OD
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold text-foreground">{SITE_NAME.toUpperCase()}</span>
            <span className="block text-[10px] tracking-widest text-muted-foreground">{SITE_TAGLINE}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.dropdownSections ? link.id : null)}
              onMouseLeave={() => setActiveDropdown((c) => (c === link.id ? null : c))}
            >
              {link.dropdownSections ? (
                <button
                  type="button"
                  className="flex items-center gap-1 py-5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === link.id && "rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="flex items-center gap-1 py-5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )}

              {link.dropdownSections && activeDropdown === link.id && (
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
                          <Link
                            key={item.id}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block rounded-xl px-3 py-2 text-[15px] text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-sm font-semibold text-primary">{PHONE_NUMBER}</span>
          <Button variant="outline" size="sm" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button size="sm" className="bg-cta text-cta-foreground hover:bg-cta/90" onClick={() => navigate("/contact")}>
            Contact
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <Container className="py-4">
            {navLinks.map((link) => (
              <div key={link.id} className="border-b border-border/50 last:border-0">
                {link.dropdownSections ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded((c) => (c === link.id ? null : link.id))}
                      className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileExpanded === link.id && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileExpanded === link.id && (
                      <div className="pb-3 pl-4">
                        {link.dropdownSections.map((section) =>
                          section.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          )),
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" onClick={() => { navigate("/login"); setMobileOpen(false); }}>
                Login
              </Button>
              <Button size="sm" className="bg-cta text-cta-foreground hover:bg-cta/90" onClick={() => { navigate("/contact"); setMobileOpen(false); }}>
                Contact
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
