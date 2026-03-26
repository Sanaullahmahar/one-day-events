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
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export interface Charity {
  id: number;
  name: string;
  logo: string;
}
