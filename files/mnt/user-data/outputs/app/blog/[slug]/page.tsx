import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPost, getAllSlugs } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { Body } = post;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[720px] mx-auto relative z-10">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-text-dim text-sm mb-8 hover:text-brand-accent transition-colors"
            >
              <ArrowLeft size={14} />
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
            <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-8">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <article className="prose prose-invert prose-lg max-w-none [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-white [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-white [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-5 [&>ul]:text-text-muted [&>ul]:mb-5 [&>ul]:space-y-2 [&>ol]:text-text-muted [&>ol]:mb-5 [&>ol]:space-y-2 [&>blockquote]:border-brand-accent/30 [&>blockquote]:bg-brand-card [&>blockquote]:rounded-xl [&>blockquote]:p-6 [&>blockquote]:my-8 [&>blockquote>p]:text-text-muted [&>blockquote>p]:mb-0">
              <Body />
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-20 px-8">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>
      </section>
    </>
  );
}
