"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_CTA, SITE } from "@/lib/constants";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] bg-brand-dark flex flex-col justify-center items-center gap-6 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "text-xl font-medium transition-colors",
                  pathname === link.href
                    ? "text-brand-accent"
                    : "text-white hover:text-brand-accent"
                )}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={NAV_CTA.href}
              onClick={onClose}
              className="mt-4 bg-brand-accent text-brand-dark px-8 py-3 rounded-lg font-semibold text-lg"
            >
              {NAV_CTA.label}
            </Link>
          </motion.div>

          <motion.a
            href={SITE.phoneTel}
            className="mt-4 flex items-center gap-2 text-text-muted hover:text-brand-accent transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Phone size={18} />
            {SITE.phone}
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
