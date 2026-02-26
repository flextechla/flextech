import type { Metadata } from "next";
import { Clock, Shield, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "FlexTech is professional IT delivered to your door. Over 30 years of flexible service and technical solutions in Baton Rouge, Louisiana.",
};

const values = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "We work around your schedule — evenings and weekends available. Your time matters to us.",
  },
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Over 30 years in the IT field. We've seen it all and fixed it all.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "You'll work directly with an experienced technician, not a call center or rotating staff.",
  },
  {
    icon: Award,
    title: "Guaranteed Results",
    description:
      "We stand behind our work with a 100% satisfaction guarantee on virus removal.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              About FlexTech
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Professional IT, Delivered to Your Door
            </h1>
            <div className="space-y-5 text-text-muted text-lg leading-relaxed max-w-[700px]">
              <p>
                FlexTech is professional I.T. technology delivered to your door,
                taken care of in our shop, or even analyzed and repaired by
                remote computer access while you sleep.
              </p>
              <p>
                We provide flexible hours coupled with technical experience to
                fix your problems. With over 30 years in the IT field, we bring
                a depth of knowledge that comes only from decades of hands-on
                experience.
              </p>
              <p>
                Whether you&apos;re a homeowner dealing with a slow computer or
                a business owner needing network support, we treat every client
                with the same level of care and attention. No jargon, no
                pressure — just honest, reliable service.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-brand-card border border-white/[0.04] rounded-2xl h-full">
                <div className="flex justify-center mb-4">
                  <value.icon
                    size={36}
                    className="text-brand-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-[1.05rem] font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-[0.85rem] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.12),transparent_70%)] pointer-events-none" />
        <ScrollReveal className="relative z-10">
          <h2 className="font-display text-2xl font-bold mb-4">
            Let&apos;s Talk About Your Tech Needs
          </h2>
          <p className="text-text-muted mb-6">Free consultation, no obligation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Contact Us →</Button>
            <Button href={SITE.phoneTel} external>
              Call {SITE.phone}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
