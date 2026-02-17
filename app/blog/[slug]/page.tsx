import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string[];
}

const posts: Record<string, BlogPost> = {
  "windows-11-vs-new-computer": {
    slug: "windows-11-vs-new-computer",
    title: "Your Computer Doesn't Support Windows 11 — Now What?",
    date: "2026-02-16",
    content: [
      "Microsoft officially ended support for Windows 10 on October 14, 2025. If you're still running it, your computer is no longer receiving security updates — and that's a bigger deal than most people realize. We've been getting calls about this every single day, so let's break down your real options.",
      "Without security updates, every new vulnerability that gets discovered in Windows 10 stays wide open on your machine. Hackers know this, and they actively target unsupported operating systems because they're easy wins. This isn't a scare tactic — it's how the majority of malware infections happen.",
      "If your computer supports Windows 11, you should have upgraded by now — it's free and relatively painless. But if you already checked and your machine doesn't meet the requirements (usually because it lacks a TPM 2.0 chip or the processor is too old), you're in the group that has some real decisions to make.",
      "Option one: buy a new computer. If your machine is more than five or six years old, this is often the smartest move. A reliable new desktop or laptop doesn't have to break the bank — solid machines for everyday home and office use start around $400-$500. We can help you pick the right one for your needs, set it up, and transfer all your files, bookmarks, passwords, and settings so the transition is seamless.",
      "Option two: buy a refurbished computer. This is a great option that a lot of people overlook. Business-class refurbished machines — often Dell, HP, or Lenovo models that are only two or three years old — come with Windows 11 already installed and can cost half the price of new. We source quality refurbished machines and stand behind them. For many of our clients, this is the sweet spot of value and reliability.",
      "Option three: extended security support. Microsoft now offers paid Extended Security Updates (ESU) for Windows 10, which buys you continued security patches without upgrading your hardware. This can make sense if your computer still runs well and you're not ready to replace it yet. However, it's not cheap, it's temporary, and it only covers security — no new features or broader support. Think of it as renting time, not solving the problem.",
      "There are also workarounds floating around online to force-install Windows 11 on unsupported hardware. We generally don't recommend this. Microsoft has said these machines won't reliably receive all updates, and performance on older hardware can be hit or miss. It creates a false sense of security.",
      "Here's our honest advice: if you're still on Windows 10 right now, every day you wait increases your risk. Pick one of the options above and act on it. If your computer is old and slow anyway, a new or refurbished machine with Windows 11 will feel like a completely different experience — faster, more secure, and good for another five-plus years.",
      "Not sure which option fits your situation? Call us at 225-341-3098 for a free evaluation. We'll look at your current machine, give you a straight answer, and help you make the move — no pressure, no upselling.",
    ],
  },
  "protect-yourself-from-phishing": {
    slug: "protect-yourself-from-phishing",
    title: "How to Protect Yourself from Phishing Attacks",
    date: "2025-01-15",
    content: [
      "Phishing attacks are one of the most common cyber threats facing individuals and businesses today. These deceptive emails, texts, and websites are designed to trick you into revealing sensitive information like passwords, credit card numbers, and personal data.",
      "The first step in protecting yourself is learning to recognize phishing attempts. Look for red flags like urgent language demanding immediate action, misspelled sender addresses, generic greetings instead of your name, and links that don't match the supposed sender's website.",
      "Never click on links in unexpected emails. Instead, go directly to the website by typing the address into your browser. If a bank or service provider contacts you about an urgent issue, call them directly using the number on their official website — not the number in the email.",
      "Keep your software and operating system updated. Many phishing attacks exploit known vulnerabilities that have already been patched. Enable automatic updates whenever possible.",
      "Use two-factor authentication (2FA) on all important accounts. Even if a phisher gets your password, they won't be able to access your account without the second factor.",
      "Report phishing attacks to the authorities. If you think you've been the victim of a phishing attack, report it to the Federal Trade Commission (FTC) and to the company that the scammer was impersonating.",
      "Finally, consider signing up for our guaranteed malware protection. While we can't guarantee you won't encounter a phishing attempt, we will remove any resulting infections at no additional cost.",
    ],
  },
  "signs-your-computer-has-virus": {
    slug: "signs-your-computer-has-virus",
    title: "5 Signs Your Computer Might Have a Virus",
    date: "2024-11-20",
    content: [
      "Computer viruses and malware can be sneaky. Sometimes the signs are obvious, but often they disguise themselves as normal system behavior. Here are five warning signs that your computer might be infected.",
      "Unusual slowness is often the first sign. If your computer suddenly takes much longer to start up, open programs, or load web pages — and you haven't installed new software or updates — malware could be consuming your system resources.",
      "Unexpected pop-ups are a classic symptom. If you're seeing pop-up ads even when your browser is closed, or if your browser redirects you to unfamiliar websites, these are strong indicators of adware or browser hijacker infections.",
      "Programs crashing frequently or your computer restarting on its own can indicate a virus interfering with system processes. If programs that used to work fine are suddenly unstable, it's worth investigating.",
      "Missing files or programs that you didn't delete could mean malware is modifying your system. Some viruses specifically target and corrupt files, while ransomware may encrypt them and demand payment.",
      "Unusual network activity — your internet connection being slow when you're not doing much, or your hard drive light constantly blinking — could mean malware is communicating with external servers or spreading to other devices on your network.",
      "If you notice any of these signs, don't ignore them. The longer malware stays on your system, the more damage it can do. Call us at 225-341-3098 for a thorough scan and cleanup with our 100% guarantee.",
    ],
  },
  "why-you-need-data-backup": {
    slug: "why-you-need-data-backup",
    title: "Why Every Business Needs a Data Backup Plan",
    date: "2024-09-10",
    content: [
      "Data is the lifeblood of modern business. Customer records, financial documents, project files, and communications — losing any of this can be devastating. Yet many small businesses still don't have a proper backup strategy.",
      "Hardware failure is more common than you think. Hard drives have a limited lifespan, and SSDs, while more reliable, aren't immune to failure. A single drive failure without backup can mean permanent data loss.",
      "Ransomware attacks are on the rise, especially targeting small businesses. These attacks encrypt all your files and demand payment for the decryption key. With a current backup, you can restore your data without paying the ransom.",
      "Human error is actually one of the leading causes of data loss. Accidentally deleted files, overwritten documents, or formatting the wrong drive — mistakes happen. A good backup system lets you roll back to a previous version.",
      "The 3-2-1 rule is a proven backup strategy: keep 3 copies of your data, on 2 different types of media, with 1 copy stored off-site or in the cloud. This protects against virtually any data loss scenario.",
      "Don't wait until you've lost data to think about backups. The cost of implementing a backup solution is a fraction of the cost of recovering from data loss — if recovery is even possible.",
      "We can help you design and implement a backup plan that fits your business and budget. Call us for a free consultation to assess your current situation and vulnerabilities.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content[0].slice(0, 160),
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <>
      <article className="pt-32 pb-16 px-8">
        <div className="max-w-[750px] mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-brand-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 text-text-dim text-sm mb-4">
              <Calendar size={14} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight mb-10">
              {post.title}
            </h1>
          </ScrollReveal>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-text-muted text-[1.05rem] leading-[1.8]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 p-8 bg-brand-card border border-brand-accent/15 rounded-2xl text-center">
              <h3 className="font-display text-xl font-bold mb-3">
                Need Help?
              </h3>
              <p className="text-text-muted mb-5">
                Call us for a free consultation — we&apos;re here to help.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button href="/contact">Contact Us →</Button>
                <Button href={SITE.phoneTel} external variant="secondary">
                  Call {SITE.phone}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
