import { useState } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import Container from "./Container";
import { navLinks } from "@/data/navLinks";
import { COPYRIGHT_YEAR, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    id: "partners",
    label: "Partners",
    href: "/partners",
    dropdownSections: navLinks.find((link) => link.id === "partners")?.dropdownSections,
  },
  {
    id: "events",
    label: "Events",
    href: "/events",
    dropdownSections: navLinks.find((link) => link.id === "events")?.dropdownSections,
  },
  { id: "about", label: "About Us", href: "/about-us" },
  { id: "faq", label: "FAQ's", href: "/faq" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
  { id: "privacy", label: "Privacy", href: "/privacy" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    className: "text-[#E94A84]",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    label: "Facebook",
    href: "#",
    className: "text-[#3557A6]",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    label: "Twitter",
    href: "#",
    className: "text-[#1D9BF0]",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    className: "text-[#0077B5]",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: "Pinterest",
    href: "#",
    className: "text-[#E60023]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.5C6.78 2.5 4 6.24 4 10.32c0 2.47 1.39 5.55 3.62 6.53.34.15.52.08.6-.24.06-.24.36-1.42.47-1.84.04-.14.02-.27-.1-.42-.58-.7-1.05-1.98-1.05-3.17 0-3.06 2.31-6.02 6.24-6.02 3.4 0 5.79 2.31 5.79 5.61 0 3.73-1.89 6.32-4.34 6.32-1.35 0-2.36-1.12-2.04-2.5.39-1.64 1.14-3.4 1.14-4.58 0-1.06-.57-1.94-1.75-1.94-1.39 0-2.5 1.43-2.5 3.35 0 1.22.41 2.05.41 2.05l-1.64 6.95c-.29 1.24-.04 3.24-.01 3.42.02.11.15.15.22.06.11-.14 1.45-1.79 1.9-2.97.13-.34.67-2.58.67-2.58.35.67 1.38 1.24 2.47 1.24 3.25 0 5.59-2.99 5.59-7.32C20 5.53 16.79 2.5 12 2.5Z" />
      </svg>
    ),
  },
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
                onMouseLeave={() =>
                  setActiveDropdown((current) => (current === link.id ? null : current))
                }
              >
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1 text-[16px] font-medium text-[#25324E] transition-colors hover:text-primary"
                >
                  {link.label}
                  {link.dropdownSections ? <ChevronDown className="h-4 w-4" /> : null}
                </a>

                {link.dropdownSections && activeDropdown === link.id ? (
                  <div
                    className={cn(
                      "absolute bottom-full left-0 z-40 mb-5 rounded-[22px] border border-border bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)]",
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
                            <a
                              key={item.id}
                              href={item.href}
                              className="block rounded-xl px-4 py-2 text-[16px] text-[#2E3553] transition-colors hover:bg-accent hover:text-primary"
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

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F4F4] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eeeeee]",
                  link.className,
                )}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-[13px] font-bold uppercase tracking-[-0.01em] text-[#152C61]">
            © {COPYRIGHT_YEAR} {SITE_NAME.toUpperCase().replace(/\s+/g, "")}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

