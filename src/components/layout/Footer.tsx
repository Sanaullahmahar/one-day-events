import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Container from "./Container";
import { COPYRIGHT_YEAR, SITE_NAME } from "@/lib/constants";

const footerLinks = [
  { label: "Partners", href: "#" },
  { label: "Events", href: "#" },
  { label: "About Us", href: "#" },
  { label: "FAQ's", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Privacy", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </Container>

    <Container className="mt-6">
      <p className="text-center text-xs text-primary">
        © {COPYRIGHT_YEAR} {SITE_NAME.toUpperCase().replace(" ", "")}
      </p>
    </Container>
  </footer>
);

export default Footer;
