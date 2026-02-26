import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "FlexTech is committed to ensuring digital accessibility for all users. Learn about our ongoing efforts and how to report accessibility barriers.",
};

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              Accessibility
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Accessibility Statement
            </h1>
            <div className="space-y-5 text-text-muted text-lg leading-relaxed max-w-[700px]">
              <p>
                FlexTech is committed to ensuring digital accessibility for
                people of all abilities. We are continually improving the user
                experience for everyone and applying the relevant accessibility
                standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-8">
        <div className="max-w-[800px] mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold mb-4">
              Our Commitment
            </h2>
            <p className="text-text-muted leading-relaxed">
              We strive to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1 at Level AA. These guidelines explain how to make web
              content more accessible for people with disabilities and more
              user-friendly for everyone. Conformance with these guidelines helps
              ensure that the website is accessible to people who are blind, have
              low vision, are deaf or hard of hearing, have motor disabilities,
              or have cognitive disabilities.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold mb-4">
              Measures Taken
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              FlexTech takes the following measures to ensure accessibility of
              our website:
            </p>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  Semantic HTML markup with proper heading hierarchy and
                  landmark regions for screen reader navigation.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  Descriptive alt text on all meaningful images and
                  aria-hidden attributes on decorative elements.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  WCAG AA compliant color contrast ratios throughout the site
                  (minimum 4.5:1 for normal text).
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  Full keyboard navigation support with visible focus
                  indicators and skip-to-content functionality.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  Accessible forms with visible labels, error messaging, and
                  ARIA attributes for assistive technology.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  Reduced motion support for users who prefer minimal animation
                  via the <code className="text-brand-accent">prefers-reduced-motion</code> media query.
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold mb-4">
              Known Limitations
            </h2>
            <p className="text-text-muted leading-relaxed">
              Despite our best efforts, some areas of the website may not yet be
              fully accessible. We are actively working to identify and resolve
              any remaining issues. If you encounter an accessibility barrier,
              please let us know so we can address it promptly.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold mb-4">
              Feedback & Contact
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We welcome your feedback on the accessibility of the FlexTech
              website. If you encounter any barriers or have suggestions for
              improvement, please contact us:
            </p>
            <div className="space-y-2 text-text-muted">
              <p>
                <strong className="text-text-primary">Phone:</strong>{" "}
                <a
                  href={SITE.phoneTel}
                  className="text-brand-accent hover:underline"
                  aria-label={`Call FlexTech at ${SITE.phone}`}
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <strong className="text-text-primary">Email:</strong>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
            <p className="text-text-muted leading-relaxed mt-4">
              We try to respond to accessibility feedback within 2 business
              days.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-bold mb-4">
            Need Assistance?
          </h2>
          <p className="text-text-muted mb-6">
            If you need help accessing any content on our site, we&apos;re here
            for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Contact Us →</Button>
            <Button href={SITE.phoneTel} external variant="secondary">
              Call {SITE.phone}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
