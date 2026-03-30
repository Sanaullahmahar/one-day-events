import type { Partner } from "@/types";

export const partners: Partner[] = [
  {
    id: 1,
    icon: "Heart",
    title: "Vendor",
    href: "/partners/venue-partners",
    iconBg: "bg-[#F85565]",
    iconColor: "text-white",
    iconRing: "ring-[#D7E8F7]",
  },
  {
    id: 2,
    icon: "Briefcase",
    title: "Brokers",
    href: "/partners/insurance-agents",
    iconBg: "bg-[#E8A11A]",
    iconColor: "text-white",
    iconRing: "ring-[#D7E8F7]",
  },
  {
    id: 3,
    icon: "CalendarDays",
    title: "Event Planners",
    href: "/partners/event-planners",
    iconBg: "bg-[#2F9EE5]",
    iconColor: "text-white",
    iconRing: "ring-[#D7E8F7]",
  },
  {
    id: 4,
    icon: "Users",
    title: "Others",
    href: "/partners/other",
    iconBg: "bg-[#4B4B95]",
    iconColor: "text-white",
    iconRing: "ring-[#D7E8F7]",
  },
];

export interface PartnerTypeConfig {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
}

export const partnerTypes: PartnerTypeConfig[] = [
  {
    slug: "insurance-agents",
    title: "Insurance Agents",
    description: "Join our network of insurance professionals and offer your clients comprehensive event insurance solutions.",
    benefits: [
      "Competitive commission rates",
      "Access to top-rated carriers",
      "Dedicated support team",
      "Marketing materials provided",
      "Real-time policy management",
    ],
  },
  {
    slug: "event-planners",
    title: "Event Planners",
    description: "Partner with us to provide your clients with seamless event insurance coverage as part of your planning services.",
    benefits: [
      "Streamlined quoting for your clients",
      "White-label certificate delivery",
      "Priority customer support",
      "Referral commission program",
      "Co-branded marketing opportunities",
    ],
  },
  {
    slug: "venue-partners",
    title: "Venue Partners",
    description: "Recommend One Day Event to your clients and ensure every event at your venue is properly insured.",
    benefits: [
      "Ensure all events meet insurance requirements",
      "Reduce venue liability exposure",
      "Easy referral program",
      "Custom landing pages for your venue",
      "Dedicated venue partner manager",
    ],
  },
  {
    slug: "other",
    title: "Other Partners",
    description: "Have a unique partnership idea? We're always open to creative collaborations that help event hosts get insured.",
    benefits: [
      "Flexible partnership structures",
      "Co-marketing opportunities",
      "Affiliate commission program",
      "Dedicated partnership manager",
      "Custom integration options",
    ],
  },
];

export const getPartnerTypeBySlug = (slug: string) =>
  partnerTypes.find((p) => p.slug === slug);
