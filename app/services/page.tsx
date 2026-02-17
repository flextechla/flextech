import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  Home,
  HardDrive,
  Radio,
  ClipboardCheck,
  Monitor,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete IT solutions for home and business in Baton Rouge. Virus removal, on-site service, data recovery, managed services, consulting, and remote support.",
};

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Home,
  HardDrive,
  Radio,
  ClipboardCheck,
  Monitor,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              Our Services
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Complete IT Solutions for Home & Business
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[600px] mx-auto">
              From virus removal to full network builds, we handle it all —
              on-site, with a personal touch. Over 30 years of experience
              serving the Baton Rouge area.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ScrollReveal key={service.href} delay={i * 0.08}>
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full bg-brand-card border border-white/5 rounded-2xl p-8 overflow-hidden transition-all duration-400 hover:border-brand-accent/15 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-accent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${service.colorClass}`}
                    >
                      {IconComponent && <IconComponent size={26} />}
                    </div>
                    <h2 className="font-display text-xl font-bold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-text-muted text-[0.95rem] leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-accent text-[0.9rem] font-semibold transition-all duration-300 group-hover:gap-3">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.12),transparent_70%)] pointer-events-none" />
        <ScrollReveal className="relative z-10 max-w-[550px] mx-auto">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-text-muted mb-6">
            Call us for a free consultation. We&apos;ll diagnose the problem and
            recommend the right solution — no obligation.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-block font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-brand-accent mb-6 hover:drop-shadow-[0_0_20px_rgba(0,212,170,0.33)] transition-all"
          >
            {SITE.phone}
          </a>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Get in Touch →</Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
