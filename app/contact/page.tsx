import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FlexTech for computer repair and IT services in Baton Rouge. Call 225-341-3098 or send us a message for a free consultation.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneTel,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baton Rouge, Louisiana",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 8am–6pm\nEvenings & weekends available",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              Contact Us
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Let&apos;s Fix Your Tech Problem
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[550px] mx-auto">
              Call us for a free consultation or send a message below. We
              typically respond within a few hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 min-w-[44px] rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <item.icon size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-text-dim text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary font-medium hover:text-brand-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary font-medium whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Big Phone CTA */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-6 bg-brand-card border border-brand-accent/15 rounded-2xl text-center">
                <p className="text-text-muted text-sm mb-2">
                  Prefer to talk? Call now:
                </p>
                <a
                  href={SITE.phoneTel}
                  className="font-display text-2xl font-extrabold text-brand-accent hover:drop-shadow-[0_0_20px_rgba(0,212,170,0.33)] transition-all"
                >
                  {SITE.phone}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
