import ScrollReveal from "@/components/ui/ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className="text-center max-w-[600px] mx-auto mb-16">
      <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
        {label}
      </p>
      <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted leading-relaxed">{description}</p>
      )}
    </ScrollReveal>
  );
}
