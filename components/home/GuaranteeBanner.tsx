import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function GuaranteeBanner() {
  return (
    <ScrollReveal>
      <div className="py-16 px-8 bg-gradient-to-br from-brand-accent/[0.08] to-brand-blue/[0.05] border-y border-brand-accent/10">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          {/* Icon */}
          <div className="min-w-[80px] w-20 h-20 rounded-2xl bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center shrink-0">
            <Shield size={36} className="text-brand-accent" />
          </div>

          {/* Text */}
          <div>
            <h3 className="font-display text-[1.6rem] font-bold mb-2">
              No More Viruses —{" "}
              <span className="text-brand-accent">100% Guarantee</span>
            </h3>
            <p className="text-text-muted leading-relaxed">
              We don&apos;t just remove viruses — we make sure they stay gone.
              Our virus removal service comes with a 100% satisfaction
              guarantee. If it comes back, so do we — at no extra charge.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
