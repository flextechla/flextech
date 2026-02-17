import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const staticPages = [
    "",
    "/services",
    "/services/virus-removal",
    "/services/on-site",
    "/services/data-recovery",
    "/services/managed-services",
    "/services/consulting",
    "/services/remote-support",
    "/products",
    "/about",
    "/blog",
    "/contact",
    "/faq",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.7,
  }));
}
