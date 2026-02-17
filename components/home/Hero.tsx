"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-32 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)",
          }}
        />
        {/* Orbs */}
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(0,212,170,0.2),transparent_70%)] animate-float" />
        <div className="absolute bottom-[10%] -left-[5%] w-[350px] h-[350px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(77,159,255,0.15),transparent_70%)] animate-float [animation-delay:-4s]" />
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          className="lg:text-left text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-[0.8rem] font-medium text-brand-accent mb-6">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse-dot" />
            Serving Baton Rouge for 30+ Years
          </div>

          <h1 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight mb-5">
            Flexible Service.
            <br />
            <span className="gradient-text">Technical Solutions.</span>
          </h1>

          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-[500px] lg:mx-0 mx-auto">
            On-site computer services for your home or business. Let us focus on
            fixing your computer problems so you can focus on what matters most.
          </p>

          <div className="flex gap-4 flex-wrap lg:justify-start justify-center">
            <Button href="/contact">Free Consultation →</Button>
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
          </div>

          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 mt-6 font-display text-xl font-bold text-white hover:text-brand-accent transition-colors"
          >
            <Phone size={20} />
            {SITE.phone}
          </a>
        </motion.div>

        {/* Right Column — Visual */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-square max-w-[480px] mx-auto">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border border-brand-accent/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-[12%] border border-brand-blue/10 rounded-full animate-spin-slower" />
            <div className="absolute inset-[24%] border border-brand-accent/10 rounded-full animate-spin-slowest" />

            {/* Center Icon */}
            <div className="absolute inset-[35%] bg-brand-card border border-brand-accent/15 rounded-3xl flex items-center justify-center text-5xl shadow-[0_0_60px_rgba(0,212,170,0.2)]">
              🛡️
            </div>

            {/* Floating Cards */}
            <FloatingCard
              position="top-[2%] right-[10%]"
              delay="-0.5s"
              iconBg="bg-brand-accent/15"
              icon="✓"
              title="Virus Removed"
              titleColor="text-brand-accent"
              subtitle="100% Guaranteed"
              href="/services/virus-removal"
            />
            <FloatingCard
              position="top-[25%] left-[-12%]"
              delay="-2s"
              iconBg="bg-brand-blue/15"
              icon="🔧"
              title="On-Site Service"
              titleColor="text-brand-blue"
              subtitle="We come to you"
              href="/services/on-site"
            />
            <FloatingCard
              position="bottom-[25%] right-[-10%]"
              delay="-3.5s"
              iconBg="bg-brand-warning/15"
              icon="💾"
              title="Data Recovered"
              titleColor="text-brand-warning"
              subtitle="Files restored safely"
              href="/services/data-recovery"
            />
            <FloatingCard
              position="top-[5%] left-[5%]"
              delay="-1s"
              iconBg="bg-brand-danger/15"
              icon="📡"
              title="Managed Services"
              titleColor="text-brand-danger"
              subtitle="Proactive IT support"
              href="/services/managed-services"
            />
            <FloatingCard
              position="bottom-[5%] left-[-5%]"
              delay="-2.5s"
              iconBg="bg-purple-500/15"
              icon="📋"
              title="Consulting"
              titleColor="text-purple-400"
              subtitle="Expert evaluation"
              href="/services/consulting"
            />
            <FloatingCard
              position="bottom-[2%] right-[15%]"
              delay="-4s"
              iconBg="bg-cyan-400/15"
              icon="🖥️"
              title="Remote Support"
              titleColor="text-cyan-400"
              subtitle="Quick fixes online"
              href="/services/remote-support"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Floating Card Sub-component ── */
function FloatingCard({
  position,
  delay,
  iconBg,
  icon,
  title,
  titleColor,
  subtitle,
  href,
}: {
  position: string;
  delay: string;
  iconBg: string;
  icon: string;
  title: string;
  titleColor: string;
  subtitle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className={`absolute ${position} bg-brand-card border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-bobble hover:border-brand-accent/30 hover:shadow-[0_8px_40px_rgba(0,212,170,0.15)] transition-all duration-300 cursor-pointer`}
      style={{ animationDelay: delay }}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-base ${iconBg}`}
      >
        {icon}
      </div>
      <div>
        <div className={`${titleColor} font-semibold text-[0.8rem]`}>
          {title}
        </div>
        <div className="text-text-dim text-[0.7rem]">{subtitle}</div>
      </div>
    </a>
  );
}