import type { Crumb, Faq, Photo, RelatedLink } from "@/content/services/types";
import { processSteps } from "./shared";
import { photos, shareImage } from "./photos";

/** COURSES DIRECTORY (/services) — Medic Wisdom. Also carries the old FAQ page's questions (/faqs redirects here). */
export const servicesDirectory = {
  path: "/services",
  seo: {
    title: "CPR, BLS, ACLS & EMS Courses in Missouri | Medic Wisdom",
    description: "Every Medic Wisdom course: CPR, AED & First Aid, Heartsaver, BLS Provider, ACLS, 12-lead EKG, NREMT prep, Hamilton T1 training and AED rentals.",
    image: shareImage,
  },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Courses" }] as Crumb[],
  hero: {
    eyebrow: "Courses",
    headline: "CPR, BLS, ACLS and EMS Courses in Missouri",
    intro: "Pick the course that fits your needs — CPR, First Aid, BLS, ACLS, EMS education and more, with flexible scheduling. Each course page lists what you'll learn, how long it takes and who it's for.",
    image: photos.chestCompressions as Photo,
  },
  pathways: { eyebrow: "Four groups", heading: "Where do you fit?", intro: "Every course below belongs to one of these." },
  catalog: { eyebrow: "The full list", heading: "Every course, by group", intro: "Each described on its own page." },
  process: { eyebrow: "How it works", heading: "From first call to certification card", intro: "The same four steps for every course.", steps: processSteps },
  faqs: {
    eyebrow: "Frequently asked questions",
    heading: "Have questions? We've got answers.",
    items: [
      { q: "Do I need medical experience to take a class?", a: "Not at all. Many of our courses are open to the public and designed for beginners. We also offer advanced training for healthcare professionals — just choose the course that fits your experience level." },
      { q: "How do I book a class?", a: "Register online with the “Register now” button, or contact our team by phone or email. We also offer group booking options for workplaces and organizations." },
      { q: "Will I receive a certification card?", a: "Yes! After successful completion of your course, you'll receive an official certification card — either physical or digital — recognized by employers, schools, and healthcare facilities." },
      { q: "Can you come to our location for training?", a: "Yes, we offer onsite training for groups. Whether it's a school, workplace, or community organization, we'll bring the class to you. Contact us to get a custom quote." },
      { q: "Do you offer blended or online courses?", a: "Yes! We offer blended learning options that combine online coursework with in-person skills testing. It's a flexible option for busy individuals or remote teams." },
    ] as Faq[],
  },
  related: {
    heading: "Related",
    links: [
      { label: "Contact & book", href: "/contact", description: "Group rates, on-site training and questions." },
      { label: "Where we train", href: "/service-area", description: "O'Fallon, on-site across Missouri, or online." },
      { label: "About Tim", href: "/about", description: "Over 20 years of frontline EMS experience." },
    ] as RelatedLink[],
  },
  cta: { heading: "Ready to get certified?", body: "Register online, or call to book a group or on-site class." },
};
