import fs from "fs";
import path from "path";
import type { ComponentType } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface BlogPost extends BlogPostMeta {
  Body: ComponentType;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getFiles() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".tsx") && !f.startsWith("_"));
}

/**
 * Returns metadata for every post, sorted newest-first.
 * Used by the blog listing page.
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = getFiles();
  const posts: BlogPostMeta[] = [];

  for (const file of files) {
    const mod = await import(`@/content/blog/${file.replace(".tsx", "")}`);
    const { Body, ...meta } = mod.default as BlogPost;
    posts.push(meta);
  }

  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return posts;
}

/**
 * Returns a single post by slug (metadata + Body component).
 * Used by the dynamic [slug] route.
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
  const files = getFiles();

  for (const file of files) {
    const mod = await import(`@/content/blog/${file.replace(".tsx", "")}`);
    const post = mod.default as BlogPost;
    if (post.slug === slug) return post;
  }

  return null;
}

/**
 * Returns all slugs for static generation.
 */
export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
