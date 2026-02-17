import { Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-28 px-8 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.2),transparent_70%)] pointer-events-none" />

      <ScrollReveal className="relative z-10 max-w-[650px] mx-auto">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">
          Ready to Get Your Tech
          <br />
          Back on Track?
        </h2>

        <p className="text-text-muted text-lg leading-relaxed mb-8">
          Call us for a free consultation. We&apos;ll diagnose the problem and
          give you a clear plan — no obligation.
        </p>

        <a
          href={SITE.phoneTel}
          className="inline-block font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-brand-accent mb-8 hover:drop-shadow-[0_0_30px_rgba(0,212,170,0.33)] transition-all"
        >
          {SITE.phone}
        </a>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/contact">Get in Touch →</Button>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
