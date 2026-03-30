import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is special event insurance?",
    answer: "Special event insurance, aka one day event insurance, is a liability policy that covers events in case of injuries, property damage, or lawsuits that occur. This coverage is for claims by third parties and covers all events such as weddings, birthday parties, concerts, trade shows, festivals, etc.",
    category: "general",
  },
  {
    id: 2,
    question: "What does special event insurance cover?",
    answer: "Special event insurance typically covers general liability, including bodily injury and property damage to third parties. It can also include coverage for event cancellation, liquor liability, and additional insured endorsements depending on your policy.",
    category: "coverage",
  },
  {
    id: 3,
    question: "How do I get my certificate of insurance?",
    answer: "After purchasing your policy, your certificate of insurance (COI) is typically available immediately via email or through your customer portal. You can also request additional insured certificates at any time through our platform.",
    category: "purchase",
  },
  {
    id: 4,
    question: "When should I purchase event insurance?",
    answer: "We recommend purchasing event insurance as soon as your event date and venue are confirmed, ideally at least 14 days before the event. This gives you time to make any adjustments to your coverage.",
    category: "general",
  },
  {
    id: 5,
    question: "Do I need special event insurance if the venue already has coverage?",
    answer: "Yes! The venue's insurance covers their property and operations, not your event. If a guest is injured at your event or you damage the venue, the venue's policy won't cover you. Your own event insurance protects you from these third-party claims.",
    category: "coverage",
  },
  {
    id: 6,
    question: "What type of events does special event insurance cover?",
    answer: "Special event insurance covers a wide range of events including weddings, birthday parties, concerts, corporate events, trade shows, festivals, fundraisers, sporting events, and more. If you're unsure about your event type, contact us and we'll help.",
    category: "coverage",
  },
  {
    id: 7,
    question: "What does per occurrence and aggregate mean?",
    answer: "Per occurrence is the maximum amount the policy will pay for a single claim or incident. Aggregate is the total maximum the policy will pay for all claims during the policy period. For example, a $1M/$2M policy pays up to $1M per incident and $2M total.",
    category: "coverage",
  },
  {
    id: 8,
    question: "How much does event insurance cost?",
    answer: "Event insurance costs vary based on factors like event type, guest count, location, and coverage limits. Basic general liability coverage starts at around $75 for small events. Larger events or those requiring liquor liability will cost more.",
    category: "purchase",
  },
  {
    id: 9,
    question: "Can I add additional insured to my policy?",
    answer: "Yes! You can add additional insureds (like your venue, sponsors, or vendors) to your policy. This is usually required by venues and can be done during the quote process or after purchase through your customer portal.",
    category: "service",
  },
  {
    id: 10,
    question: "What is liquor liability coverage?",
    answer: "Liquor liability coverage protects you if a guest is injured or causes damage as a result of alcohol served at your event. Many venues require this coverage if alcohol will be served, even if a licensed bartender is being used.",
    category: "coverage",
  },
];

export const faqCategories = [
  { id: "all", label: "All", icon: "" },
  { id: "general", label: "General", icon: "" },
  { id: "coverage", label: "Coverage", icon: "" },
  { id: "service", label: "Service", icon: "" },
  { id: "purchase", label: "Purchase", icon: "" },
];
