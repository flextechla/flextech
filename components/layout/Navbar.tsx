"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_CTA } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 w-full z-[1000] px-6 py-4 flex justify-between items-center transition-all duration-400",
          scrolled &&
            "bg-brand-dark/85 backdrop-blur-xl border-b border-brand-accent/10"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 shrink-0"
          aria-label="FlexTech home"
        >
          <Image
            src="/images/logo-white.jpg"
            alt="FlexTech"
            width={160}
            height={45}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links — right-aligned */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative text-[0.9rem] font-medium tracking-wide transition-colors duration-300",
                  "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent after:transition-all after:duration-300",
                  "hover:text-white hover:after:w-full",
                  pathname === link.href
                    ? "text-white after:w-full"
                    : "text-text-muted"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={NAV_CTA.href}
              className="bg-brand-accent text-brand-dark px-5 py-2.5 rounded-lg font-semibold text-[0.9rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,212,170,0.33)]"
            >
              {NAV_CTA.label}
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer z-[1001] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-[7px]"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-[7px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
