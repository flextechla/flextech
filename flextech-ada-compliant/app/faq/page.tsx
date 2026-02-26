import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about FlexTech computer services in Baton Rouge. Pricing, response times, service areas, and more.",
};

const faqs = [
  {
    q: "How much do you charge?",
    a: "Our rates vary depending on the service, but we always provide a free consultation and transparent quote before any work begins. No hidden fees, no surprises.",
  },
  {
    q: "Do you offer on-site service?",
    a: "Yes! We come to your home or office throughout the Baton Rouge area. No need to unplug or transport your equipment anywhere.",
  },
  {
    q: "How quickly can you respond?",
    a: "We typically respond within 24 hours and can often schedule same-day or next-day service. For urgent issues, call us directly at 225-341-3098.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve the greater Baton Rouge, Louisiana area including Denham Springs, Gonzales, Prairieville, Central, and surrounding communities.",
  },
  {
    q: "Do you work with businesses or just home users?",
    a: "Both! We serve home users and businesses of all sizes. From a single slow laptop to a full office network, we handle it all.",
  },
  {
    q: "Is your virus removal really 100% guaranteed?",
    a: "Absolutely. If a virus we removed comes back, so do we — at no extra charge. We also set up protection to prevent future infections.",
  },
  {
    q: "Can you fix my computer remotely?",
    a: "Many issues can be resolved remotely. We use a secure, encrypted connection to access your computer with your permission. It's fast, safe, and convenient.",
  },
  {
    q: "Do I need to back up my data before you work on my computer?",
    a: "We always recommend having a backup, and we can help you set one up. Before any major work, we'll discuss data safety and take precautions to protect your files.",
  },
  {
    q: "What if you can't fix the problem?",
    a: "If we can't resolve your issue, you don't pay. We're upfront about what we can and can't do, and we'll always give you honest advice about your options.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              FAQ
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[550px] mx-auto">
              Quick answers to the questions we hear most. Don&apos;t see yours?
              Give us a call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-8">
        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="p-6 bg-brand-card border border-white/5 rounded-xl">
                <h3 className="font-display font-bold text-[1.05rem] mb-3">
                  {faq.q}
                </h3>
                <p className="text-text-muted text-[0.95rem] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-text-muted mb-6">
            We&apos;re happy to help. Call or send us a message.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Contact Us →</Button>
            <Button href={SITE.phoneTel} external variant="secondary">
              Call {SITE.phone}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
