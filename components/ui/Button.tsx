import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-body text-[0.95rem] font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-brand-accent text-brand-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,170,0.33)]",
    secondary:
      "bg-transparent text-white border border-white/15 hover:border-brand-accent hover:text-brand-accent",
  };

  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
