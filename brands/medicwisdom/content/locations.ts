import type { BranchLocationContent } from "@/content/locations/types";

/**
 * No physical location pages. The O'Fallon office is in site.config.ts; a
 * /locations page needs verified hours and access details the old site does
 * not publish (docs/medicwisdom/decisions.md MW-006).
 */
export const clientLocations: readonly BranchLocationContent[] = [];

export const locationsIndex = {
  seo: { title: "Locations | Medic Wisdom", description: "", image: "/medicwisdom/share-1200x630.png" },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Locations" }],
  hero: { eyebrow: "Locations", headline: "Locations", intro: "", image: { src: "/medicwisdom/photos/first-aid-class-group.webp", alt: "Group of adults kneeling around a CPR manikin during a training session" } },
  heading: "Locations",
  intro: "",
  cta: { heading: "", body: "" },
};
