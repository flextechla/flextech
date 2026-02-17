import Image from "next/image";
import { Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { PROBLEMS, SITE } from "@/lib/constants";

export default function ProblemsSection() {
  return (
    <section className="py-24 px-8">
      <SectionHeader
        label="Sound Familiar?"
        title="We've Heard It All — And Fixed It All"
        description="Over 30 years of solving real problems for real people."
      />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Problem Cards */}
        <div className="flex flex-col gap-4">
          {PROBLEMS.map((problem, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-5 bg-brand-card border border-white/[0.04] rounded-xl transition-all duration-300 hover:border-brand-accent/15 hover:bg-brand-card-hover">
                <div className="w-9 h-9 min-w-[36px] rounded-[10px] bg-brand-warning/10 flex items-center justify-center text-brand-warning font-bold">
                  ?
                </div>
                <p className="text-text-muted text-[0.9rem] leading-relaxed">
                  &ldquo;<span className="text-text-primary font-medium">{problem}</span>&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Image */}
        <ScrollReveal className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
            <Image
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=700&fit=crop&q=80"
              alt="Computer repair technician working on-site"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* CTA */}
      <ScrollReveal className="max-w-[1200px] mx-auto mt-12 text-center">
        <p className="text-text-muted mb-6">
          Whatever the issue, we&apos;ll get you back up and running.
        </p>
        <Button href={SITE.phoneTel} external>
          <Phone size={18} />
          Call Us: {SITE.phone} →
        </Button>
      </ScrollReveal>
    </section>
  );
}
