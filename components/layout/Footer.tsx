import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  SITE,
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  FOOTER_SUPPORT,
} from "@/lib/constants";

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-[0.9rem] font-bold mb-4 text-white">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-text-muted text-[0.85rem] hover:text-brand-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 px-8 border-t border-white/5 bg-black/20"
      role="contentinfo"
    >
      {/* Footer Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <Link
            href="/"
            className="inline-block mb-3"
            aria-label="FlexTech home"
          >
            <Image
              src="/images/logo-white.jpg"
              alt="FlexTech"
              width={160}
              height={45}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-text-muted text-[0.85rem] leading-relaxed max-w-[280px]">
            Flexible Service. Technical Solutions. Proudly serving the Baton
            Rouge area for over 30 years.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 text-brand-accent font-semibold text-[0.95rem] mt-3 hover:underline"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>

        {/* Link Columns */}
        <FooterLinkColumn title="Services" links={FOOTER_SERVICES} />
        <FooterLinkColumn title="Company" links={FOOTER_COMPANY} />
        <FooterLinkColumn title="Support" links={FOOTER_SUPPORT} />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-text-dim text-[0.8rem]">
        <span>
          &copy; {year} {SITE.name}. All rights reserved.
        </span>
        <span>{SITE.location}</span>
      </div>
    </footer>
  );
}
