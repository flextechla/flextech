/**
 * TEMPLATE — Copy this file to create a new blog post.
 *
 * 1. Duplicate this file
 * 2. Rename it to your slug, e.g.  my-new-post.tsx
 * 3. Fill in the metadata and write your article in the Body component
 * 4. Push to GitHub — done!
 *
 * The blog listing and individual post pages pick it up automatically.
 * (Files starting with _ are ignored, so this template won't appear.)
 */

import type { BlogPost } from "@/lib/posts";

const post: BlogPost = {
  slug: "my-new-post",
  title: "My New Post Title",
  excerpt: "A short summary that appears on the blog listing page.",
  date: "2026-01-01",
  Body: () => (
    <>
      <p>Write your article here using normal JSX.</p>

      <h2>Use H2 for Section Headings</h2>

      <p>Keep writing paragraphs with p tags.</p>

      <h3>Use H3 for Sub-Headings</h3>

      <p>Everything is styled automatically by the blog layout.</p>

      <blockquote>
        <p>Use blockquote for callouts or CTAs.</p>
      </blockquote>
    </>
  ),
};

export default post;
