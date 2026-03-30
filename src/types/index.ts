export interface NavLink {
  id: string;
  label: string;
  href: string;
  dropdownSections?: NavDropdownSection[];
}

export interface NavDropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface NavDropdownSection {
  id: string;
  items: NavDropdownItem[];
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
  image?: string;
}

export interface Partner {
  id: number;
  icon: string;
  title: string;
  href?: string;
  iconBg?: string;
  iconColor?: string;
  iconRing?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  shortReview: string;
  fullReview: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export interface Charity {
  id: number;
  name: string;
  logo: string;
}

export interface EventType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroImage: string;
  tips: string[];
  metaDescription: string;
}

export interface PartnerType {
  slug: string;
  title: string;
  description: string;
}

export interface Definition {
  term: string;
  definition: string;
}
