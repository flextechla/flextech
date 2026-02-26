"use client";

import { useEffect, useRef, useCallback } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  // Trap focus inside the mobile menu when open
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus the first link when menu opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLElement>("a[href]");
      firstLink?.focus();
    }
  }, [isOpen]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className="fixed inset-0 z-[999] bg-brand-dark flex flex-col justify-center items-center gap-6 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-6 list-none">
              {NAV_LINKS.map((link, i) => (
                <motion.li
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
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={NAV_CTA.href}
                  onClick={onClose}
                  className="mt-4 inline-block bg-brand-accent text-brand-dark px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  {NAV_CTA.label}
                </Link>
              </motion.li>
            </ul>
          </nav>

          <motion.a
            href={SITE.phoneTel}
            className="mt-4 flex items-center gap-2 text-text-muted hover:text-brand-accent transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            aria-label={`Call FlexTech at ${SITE.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
            {SITE.phone}
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
