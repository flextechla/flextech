import type { Metadata } from "next";
import { Shield, Wifi, HardDrive, Monitor, Printer, Package } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Quality computer products and hardware sourced by FlexTech. Antivirus software, networking equipment, storage solutions, and more in Baton Rouge.",
};

const products = [
  {
    icon: Shield,
    title: "Security Software",
    description:
      "Antivirus, anti-malware, and internet security solutions. We recommend and install the best protection for your needs and budget.",
    color: "bg-brand-accent/10 text-brand-accent",
  },
  {
    icon: Wifi,
    title: "Networking Equipment",
    description:
      "Routers, switches, access points, and cabling. We source business-grade networking gear and handle the full setup.",
    color: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: HardDrive,
    title: "Storage Solutions",
    description:
      "Hard drives, SSDs, NAS devices, and backup solutions. We help you choose the right storage for reliability and performance.",
    color: "bg-brand-warning/10 text-brand-warning",
  },
  {
    icon: Monitor,
    title: "Computers & Laptops",
    description:
      "Need a new machine? We can source and configure the right computer for your needs — without the big box store markup.",
    color: "bg-brand-danger/10 text-brand-danger",
  },
  {
    icon: Printer,
    title: "Printers & Peripherals",
    description:
      "Printers, scanners, monitors, keyboards, and more. We help you pick what works and set it all up.",
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: Package,
    title: "Custom Solutions",
    description:
      "Need something specific? We source specialized hardware and software for unique business requirements.",
    color: "bg-cyan-400/10 text-cyan-400",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              Products
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Quality Hardware & Software
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[600px] mx-auto">
              We source, recommend, and install the right products for your
              needs. No pushy sales — just honest advice on what actually works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.title} delay={i * 0.08}>
              <div className="h-full bg-brand-card border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-brand-accent/15 hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${product.color}`}
                >
                  <product.icon size={26} />
                </div>
                <h2 className="font-display text-lg font-bold mb-3">
                  {product.title}
                </h2>
                <p className="text-text-muted text-[0.9rem] leading-relaxed">
                  {product.description}
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
            Need Help Choosing?
          </h2>
          <p className="text-text-muted mb-6 max-w-[500px] mx-auto">
            We&apos;ll recommend the right products for your situation and
            budget. Free advice, no obligation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Get a Recommendation →</Button>
            <Button href={SITE.phoneTel} external variant="secondary">
              Call {SITE.phone}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
