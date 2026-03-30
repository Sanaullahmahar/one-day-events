import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { navLinks } from "@/data/navLinks";
import { COPYRIGHT_YEAR, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    id: "partners",
    label: "Partners",
    href: "/partners",
    dropdownSections: navLinks.find((l) => l.id === "partners")?.dropdownSections,
  },
  {
    id: "events",
    label: "Events",
    href: "/events",
    dropdownSections: navLinks.find((l) => l.id === "events")?.dropdownSections,
  },
  { id: "about", label: "About Us", href: "/about-us" },
  { id: "faq", label: "FAQ's", href: "/faq" },
  { id: "definitions", label: "Definitions", href: "/definitions" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
  { id: "privacy", label: "Privacy", href: "/privacy" },
];

const socialLinks = [
  { label: "Instagram", href: "#", className: "text-[#E94A84]", icon: <Instagram className="h-5 w-5" /> },
  { label: "Facebook", href: "#", className: "text-[#3557A6]", icon: <Facebook className="h-5 w-5" /> },
  { label: "Twitter", href: "#", className: "text-[#1D9BF0]", icon: <Twitter className="h-5 w-5" /> },
  { label: "LinkedIn", href: "#", className: "text-[#0077B5]", icon: <Linkedin className="h-5 w-5" /> },
];

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <footer className="border-t border-border/70 bg-white py-10 sm:py-12">
      <Container className="max-w-[1500px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <nav className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {footerLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.dropdownSections ? link.id : null)}
                onMouseLeave={() => setActiveDropdown((c) => (c === link.id ? null : c))}
              >
                {link.dropdownSections ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[16px] font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-1 text-[16px] font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )}

                {link.dropdownSections && activeDropdown === link.id && (
                  <div
                    className={cn(
                      "absolute bottom-full left-0 z-40 mb-5 rounded-[22px] border border-border bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] before:absolute before:left-0 before:right-0 before:top-full before:h-5 before:content-['']",
                      link.id === "events" ? "w-[min(90vw,800px)]" : "w-64",
                    )}
                  >
                    <div
                      className={cn(
                        "gap-x-16 gap-y-2",
                        link.dropdownSections.length > 1 ? "grid grid-cols-2" : "grid grid-cols-1",
                      )}
                    >
                      {link.dropdownSections.map((section) => (
                        <div key={section.id} className="space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block rounded-xl px-4 py-2 text-[16px] text-foreground transition-colors hover:bg-accent hover:text-primary"
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

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full bg-muted transition-all duration-300 hover:-translate-y-1 hover:bg-muted/80",
                  link.className,
                )}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-[13px] font-bold uppercase tracking-[-0.01em] text-foreground">
            © {COPYRIGHT_YEAR} {SITE_NAME.toUpperCase().replace(/\s+/g, "")}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
