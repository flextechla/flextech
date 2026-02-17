"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="py-12 px-8 bg-brand-card border-y border-white/[0.04]">
      <motion.div
        className="max-w-[1200px] mx-auto flex justify-center gap-8 md:gap-12 flex-wrap items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {TRUST_STATS.map((stat, i) => (
          <div key={stat.value} className="flex items-center gap-3">
            {/* Divider (not before first item) */}
            {i > 0 && (
              <div className="hidden md:block w-px h-10 bg-white/[0.08] mr-4 md:mr-8" />
            )}
            <span className="font-display text-2xl font-extrabold text-brand-accent">
              {stat.value}
            </span>
            <span className="text-text-muted text-[0.9rem] whitespace-pre-line leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
