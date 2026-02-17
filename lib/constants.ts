// ── Site Metadata ──
export const SITE = {
  name: "FlexTech",
  tagline: "Flexible Service, Technical Solutions",
  description:
    "On-site computer services for home and business in Baton Rouge, LA. 30+ years experience. Virus removal, data recovery, networking, and more.",
  url: "https://www.flextechla.com",
  phone: "225-341-3098",
  phoneTel: "tel:2253413098",
  location: "Baton Rouge, Louisiana",
  email: "info@flextechla.com",
} as const;

// ── Navigation Links ──
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const NAV_CTA: NavLink = {
  label: "Contact Us",
  href: "/contact",
};

// ── Services Data ──
export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: string; // Lucide icon name
  colorClass: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Virus Removal & Protection",
    description:
      "Malware, spyware, ransomware — we eliminate it all with a 100% guarantee. We'll also set up protection to keep you safe going forward.",
    href: "/services/virus-removal",
    icon: "ShieldAlert",
    colorClass: "bg-brand-accent/10 text-brand-accent",
  },
  {
    title: "On-Site Services",
    description:
      "We come to your home or office. No need to unplug, transport, or wait in line. Convenient service on your schedule.",
    href: "/services/on-site",
    icon: "Home",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
  {
    title: "Data Recovery",
    description:
      "Lost photos, documents, or critical business files? We specialize in recovering data from damaged or failed drives.",
    href: "/services/data-recovery",
    icon: "HardDrive",
    colorClass: "bg-brand-warning/10 text-brand-warning",
  },
  {
    title: "Managed Services",
    description:
      "Proactive monitoring, maintenance, and support for businesses. We keep your systems running so you can focus on growth.",
    href: "/services/managed-services",
    icon: "Radio",
    colorClass: "bg-brand-danger/10 text-brand-danger",
  },
  {
    title: "Consulting & Evaluation",
    description:
      "Not sure what you need? We'll evaluate your setup and give honest, expert recommendations — no pressure, no upselling.",
    href: "/services/consulting",
    icon: "ClipboardCheck",
    colorClass: "bg-purple-500/10 text-purple-400",
  },
  {
    title: "Remote Support",
    description:
      "Quick fixes without the wait. We can securely connect to your machine and resolve many issues in minutes.",
    href: "/services/remote-support",
    icon: "Monitor",
    colorClass: "bg-cyan-400/10 text-cyan-400",
  },
];

// ── Trust Bar Stats ──
export const TRUST_STATS = [
  { value: "30+", label: "Years of\nExperience" },
  { value: "100%", label: "Virus Removal\nGuarantee" },
  { value: "24hr", label: "Response\nTime" },
  { value: "Free", label: "Consultation\n& Estimates" },
] as const;

// ── "Sound Familiar" Problems ──
export const PROBLEMS = [
  "My computer is slow.",
  "I can't see my files on the server.",
  "Do I have a virus?",
  "My laptop won't come on. Did I lose my pictures?",
  "Should I fix my computer or buy a new one?",
  "I need to add another computer to our network.",
] as const;

// ── Why Choose Us Cards ──
export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export const WHY_US: WhyCard[] = [
  {
    icon: "Home",
    title: "We Come to You",
    description:
      "On-site service at your home or office. No hauling equipment to a store.",
  },
  {
    icon: "MessageCircle",
    title: "Plain English",
    description:
      "We explain things in a way that makes sense — no confusing tech jargon.",
  },
  {
    icon: "DollarSign",
    title: "Honest Pricing",
    description:
      "Free consultations and transparent quotes. No surprise fees, ever.",
  },
  {
    icon: "Zap",
    title: "Fast Turnaround",
    description: "Most issues resolved same-day. We respect your time.",
  },
];

// ── Footer Links ──
export const FOOTER_SERVICES = [
  { label: "Virus Removal", href: "/services/virus-removal" },
  { label: "On-Site Services", href: "/services/on-site" },
  { label: "Data Recovery", href: "/services/data-recovery" },
  { label: "Managed Services", href: "/services/managed-services" },
  { label: "Consulting", href: "/services/consulting" },
  { label: "Remote Support", href: "/services/remote-support" },
];

export const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
];

export const FOOTER_SUPPORT = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Remote Help", href: "/services/remote-support" },
];
