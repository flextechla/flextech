import {
  Home,
  MessageCircle,
  DollarSign,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Home,
  MessageCircle,
  DollarSign,
  Zap,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-8">
      <SectionHeader
        label="Why FlexTech"
        title="Technology Service That Feels Personal"
      />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_US.map((card, i) => {
          const IconComponent = iconMap[card.icon];
          return (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="text-center p-10 bg-brand-card border border-white/[0.04] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/10">
                <div className="flex justify-center mb-4">
                  {IconComponent && (
                    <IconComponent
                      size={40}
                      className="text-brand-accent"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <h4 className="font-display text-[1.05rem] font-bold mb-2">
                  {card.title}
                </h4>
                <p className="text-text-muted text-[0.85rem] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
