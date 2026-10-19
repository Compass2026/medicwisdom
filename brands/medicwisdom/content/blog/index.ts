import type { Article } from "@/content/blog/types";
import type { Crumb, Photo } from "@/content/services/types";

/** No articles yet (the old blog held only WordPress's "Hello world!"): /blog is a real 404 and nothing links to it. */
export const articles: Article[] = [];
export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
export const blog = {
  path: "/blog",
  seo: { title: "Blog | Medic Wisdom", description: "", image: "/medicwisdom/share-1200x630.png" },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Blog" }] as Crumb[],
  hero: { eyebrow: "Blog", headline: "Blog", intro: "", image: { src: "/medicwisdom/photos/first-aid-class-group.webp", alt: "Group of adults kneeling around a CPR manikin during a training session" } as Photo },
  postBreadcrumbs: [{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }] as Crumb[],
  labels: { latest: "Latest posts", readPost: "Read the post", readPrefix: "Read:", published: "Published", updated: "Updated", relatedServices: "Related courses", relatedArticles: "Keep reading" },
  cta: { heading: "", body: "" },
};
