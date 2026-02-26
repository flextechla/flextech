import Link from "next/link";
import {
  ShieldAlert,
  Home,
  HardDrive,
  Radio,
  ClipboardCheck,
  Monitor,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Home,
  HardDrive,
  Radio,
  ClipboardCheck,
  Monitor,
};

export default function ServicesGrid() {
  return (
    <section className="py-24 px-8 bg-gradient-dark" id="services">
      <SectionHeader
        label="What We Do"
        title="Complete IT Solutions for Home & Business"
        description="From virus removal to full network builds, we handle it all — on-site, with a personal touch."
      />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const IconComponent = iconMap[service.icon];
          return (
            <ScrollReveal key={service.href} delay={i * 0.08}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-brand-card border border-white/5 rounded-2xl p-8 overflow-hidden transition-all duration-400 hover:border-brand-accent/15 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-accent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div
                    className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5 ${service.colorClass}`}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </div>

                  <h3 className="font-display text-[1.15rem] font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-text-muted text-[0.9rem] leading-relaxed">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 mt-5 text-brand-accent text-[0.85rem] font-semibold transition-all duration-300 group-hover:gap-3">
                    Learn more →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
