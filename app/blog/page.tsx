import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tech tips, security advice, and IT insights from FlexTech. Stay informed about protecting your computer and business in Baton Rouge.",
};

const posts = [
  {
    slug: "windows-11-vs-new-computer",
    title: "Your Computer Doesn't Support Windows 11 — Now What?",
    excerpt:
      "Windows 10 support ended in October 2025. If your machine can't run Windows 11, here's an honest look at whether to buy new, go refurbished, or get extended support.",
    date: "2026-02-16",
  },
  {
    slug: "protect-yourself-from-phishing",
    title: "How to Protect Yourself from Phishing Attacks",
    excerpt:
      "Phishing attacks are one of the most common cyber threats today. Learn how to recognize and avoid them with these practical tips.",
    date: "2025-01-15",
  },
  {
    slug: "signs-your-computer-has-virus",
    title: "5 Signs Your Computer Might Have a Virus",
    excerpt:
      "Is your computer running slow, showing pop-ups, or behaving strangely? Here are the telltale signs of a virus infection and what to do about it.",
    date: "2024-11-20",
  },
  {
    slug: "why-you-need-data-backup",
    title: "Why Every Business Needs a Data Backup Plan",
    excerpt:
      "Data loss can happen to anyone. A solid backup strategy is your best insurance against hardware failure, ransomware, and human error.",
    date: "2024-09-10",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-brand-accent mb-3">
              Blog
            </p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-6">
              Tech Tips & Insights
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[550px] mx-auto">
              Practical advice to keep your technology running smoothly and your
              data safe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto space-y-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="p-8 bg-brand-card border border-white/5 rounded-2xl transition-all duration-300 hover:border-brand-accent/15 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-text-dim text-sm mb-3">
                    <Calendar size={14} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="font-display text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold group-hover:gap-3 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
