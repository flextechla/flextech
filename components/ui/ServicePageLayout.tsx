import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE, SERVICES } from "@/lib/constants";

interface ServicePageLayoutProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  details: string[];
  currentHref: string;
}

export default function ServicePageLayout({
  icon,
  title,
  description,
  features,
  details,
  currentHref,
}: ServicePageLayoutProps) {
  const otherServices = SERVICES.filter((s) => s.href !== currentHref);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="mb-6">{icon}</div>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              {title}
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[650px]">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold mb-8">
              What&apos;s Included
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-5 bg-brand-card border border-white/5 rounded-xl">
                  <div className="w-6 h-6 min-w-[24px] rounded-full bg-brand-accent/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                  </div>
                  <p className="text-text-primary text-[0.95rem] leading-relaxed">
                    {feature}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-8 bg-gradient-dark">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold mb-8">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {details.map((detail, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 min-w-[40px] rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center font-display font-bold text-brand-accent">
                    {i + 1}
                  </div>
                  <p className="text-text-muted leading-relaxed pt-2">
                    {detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.12),transparent_70%)] pointer-events-none" />
        <ScrollReveal className="relative z-10 max-w-[550px] mx-auto">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted mb-6">
            Call us for a free consultation — no obligation, no pressure.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-block font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-brand-accent mb-6 hover:drop-shadow-[0_0_20px_rgba(0,212,170,0.33)] transition-all"
          >
            {SITE.phone}
          </a>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Get in Touch →</Button>
            <Button href="/services" variant="secondary">
              All Services
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Other Services */}
      <section className="py-16 px-8 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h3 className="font-display text-xl font-bold mb-8 text-center">
              Other Services
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group block p-6 bg-brand-card border border-white/5 rounded-xl hover:border-brand-accent/15 transition-all duration-300"
                >
                  <h4 className="font-display font-bold mb-2 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-accent text-sm font-semibold">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
