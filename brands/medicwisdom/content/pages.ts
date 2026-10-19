import type { CorePage } from "@/content/pages";
export type { CorePage };

/** CORE PAGES — Medic Wisdom. No blog, no careers, no legal documents yet. */
export const corePages: CorePage[] = [
  { path: "/", title: "Home", related: ["/services", "/services/cpr-first-aid", "/services/healthcare-providers", "/services/ems-education", "/services/aed-rentals", "/service-area", "/about", "/contact"], incoming: ["nav", "footer"] },
  { path: "/about", title: "About", parent: "/", related: ["/services/cpr-first-aid", "/services/healthcare-providers", "/services/ems-education", "/services/aed-rentals", "/contact"], incoming: ["nav", "footer", "/"] },
  { path: "/services", title: "Courses", parent: "/", related: ["/services/cpr-first-aid", "/services/healthcare-providers", "/services/ems-education", "/services/aed-rentals", "/contact"], incoming: ["nav", "footer", "/"] },
  { path: "/service-area", title: "Where we train", parent: "/", related: ["/services/cpr-first-aid", "/services/healthcare-providers", "/services/ems-education", "/services/aed-rentals", "/contact"], incoming: ["nav", "/"] },
  { path: "/contact", title: "Contact", parent: "/", related: [], incoming: ["nav", "footer", "/"] },
];
