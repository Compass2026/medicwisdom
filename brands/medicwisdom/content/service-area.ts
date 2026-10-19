import type { Crumb, Faq, Photo, RelatedLink } from "@/content/services/types";
import type { CoverageGroup, Community } from "@/content/service-area";
import { photos, shareImage } from "./photos";

export type { CoverageGroup, Community };

/**
 * WHERE WE TRAIN — Medic Wisdom. The old site states three ways a class
 * happens: at the O'Fallon training facility, on-site anywhere in Missouri,
 * and online for selected courses (12-lead for EMTs, Hamilton T1). No city
 * pages: the old site names no served cities beyond "St. Louis" and
 * "Missouri" (docs/medicwisdom/decisions.md MW-006).
 */
export const serviceArea = {
  path: "/service-area",
  seo: {
    title: "Where We Train: O'Fallon, St. Louis & Missouri | Medic Wisdom",
    description: "Medic Wisdom trains at its O'Fallon, MO facility, on-site at workplaces, schools, churches, venues and departments across Missouri, and online.",
    image: shareImage,
  },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Where we train" }] as Crumb[],
  hero: {
    eyebrow: "Where we train",
    headline: "CPR and EMS Training in O'Fallon, St. Louis and Across Missouri",
    intro: "Mobile, flexible and professional. Join a class at our O'Fallon training facility, have us bring the class to your workplace, school, church, venue or department anywhere in Missouri, or attend selected courses online.",
    image: photos.firstAidClass as Photo,
  },
  coverage: {
    eyebrow: "Three ways to train",
    heading: "Where does the class happen?",
    intro: "Pick whichever suits your group. On-site classes are quoted for your location.",
    groups: [
      { name: "At our training facility", note: "506 Barbara Pl, O'Fallon, MO — in St. Charles County.", communities: ["O'Fallon"] },
      { name: "On-site, anywhere in Missouri", note: "We bring the class to schools, workplaces, churches, venues, departments, academies and EMT cohorts.", communities: ["St. Louis", "Missouri"] },
      { name: "Online", note: "The free 12-lead class for EMTs (virtual) and the Hamilton T1 ventilator class (via Zoom).", communities: [] },
    ] as CoverageGroup[],
    fallback: { text: "Not sure we can come to you?", action: "Call and we'll tell you." },
  },
  pathways: {
    eyebrow: "What we teach here",
    heading: "Every course, wherever you train",
    links: [
      { label: "CPR, AED & First Aid", href: "/services/cpr-first-aid", description: "Beginners, Heartsaver, venue staff and police." },
      { label: "BLS & ACLS", href: "/services/healthcare-providers", description: "AHA certification for healthcare providers." },
      { label: "EMS education", href: "/services/ems-education", description: "12-lead EKG, NREMT prep and Hamilton T1." },
      { label: "AED rentals", href: "/services/aed-rentals", description: "Missouri, with fast nationwide shipping." },
    ] as RelatedLink[],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about where we train",
    items: [
      { q: "Can you come to our location for training?", a: "Yes, we offer onsite training for groups. Whether it's a school, workplace, or community organization, we'll bring the class to you. Contact us to get a custom quote." },
      { q: "Do you offer blended or online courses?", a: "Yes! We offer blended learning options that combine online coursework with in-person skills testing. The free 12-lead class for EMTs can be taken virtually, and the Hamilton T1 class via Zoom." },
      { q: "Do you ship AED rentals outside Missouri?", a: "Yes. AED rentals ship fast and ready to use, nationwide, with free shipping both ways." },
    ] as Faq[],
  },
  cta: { heading: "Want a class at your location?", body: "Call or send a message with your group size and location, and we'll send a custom quote." },
};
