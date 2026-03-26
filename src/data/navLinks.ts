import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    id: "events",
    label: "Events",
    href: "/events",
    dropdownSections: [
      {
        id: "events-left",
        items: [
          { id: "barmitzvahs", label: "Barmitzvahs", href: "/events/barmitzvahs" },
          { id: "concerts", label: "Concerts", href: "/events/concerts" },
          { id: "dances", label: "Dances", href: "/events/dances" },
          { id: "festival-insurance", label: "Festival Insurance", href: "/events/festival-insurance" },
          { id: "fundraiser", label: "Fundraiser", href: "/events/fundraiser" },
          { id: "photographers", label: "Photographers", href: "/events/photographers" },
          { id: "quinceanera", label: "Quinceañera", href: "/events/quinceanera" },
          { id: "sporting", label: "Sporting", href: "/events/sporting" },
          { id: "trade-shows", label: "Trade Shows", href: "/events/trade-shows" },
          { id: "video-shoot", label: "Video Shoot", href: "/events/video-shoot" },
          { id: "wedding", label: "Wedding", href: "/events/wedding" },
        ],
      },
      {
        id: "events-right",
        items: [
          { id: "birthday-party", label: "Birthday Party", href: "/events/birthday-party" },
          { id: "conferences", label: "Conferences", href: "/events/conferences" },
          { id: "dj", label: "DJ", href: "/events/dj" },
          { id: "festival-cover", label: "Festival Insurance", href: "/events/festival-cover" },
          { id: "hip-hop-rap", label: "Hip hop & Rap", href: "/events/hip-hop-rap" },
          { id: "political-event", label: "Political Event", href: "/events/political-event" },
          { id: "retreats", label: "Retreats", href: "/events/retreats" },
          { id: "theater-events", label: "Theater Events", href: "/events/theater-events" },
          { id: "vendors", label: "Vendors", href: "/events/vendors" },
          { id: "walks-runs", label: "Walks and Runs", href: "/events/walks-runs" },
        ],
      },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    href: "/learn",
    dropdownSections: [
      {
        id: "learn-links",
        items: [
          { id: "about", label: "About Us", href: "/about" },
          { id: "faq", label: "FAQ's", href: "/faq" },
          { id: "blog", label: "Blog", href: "/blog" },
          { id: "privacy", label: "Privacy", href: "/privacy" },
        ],
      },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    href: "/partners",
    dropdownSections: [
      {
        id: "partner-links",
        items: [
          { id: "insurance-agents", label: "Insurance Agents", href: "/partners/insurance-agents" },
          { id: "event-planners", label: "Event Planners", href: "/partners/event-planners" },
          { id: "venue-partners", label: "Venue Partners", href: "/partners/venue-partners" },
          { id: "other", label: "Other", href: "/partners/other" },
        ],
      },
    ],
  },
];
