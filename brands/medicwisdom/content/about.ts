import type { Crumb, Faq, RelatedLink } from "@/content/services/types";
import { photos, shareImage } from "./photos";

/** ABOUT — Medic Wisdom. Tim's story is the old About page, in his own first person. */
export const about = {
  path: "/about",
  seo: {
    title: "About Tim Bobbitt, Founder of Medic Wisdom",
    description: "Tim Bobbitt is a career paramedic, flight paramedic, firefighter/paramedic and EMS educator with over 20 years of frontline experience. Meet Medic Wisdom.",
    image: shareImage,
  },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "About" }] as Crumb[],
  hero: {
    eyebrow: "About Medic Wisdom",
    headline: "Over 20 Years of Experience in Every Class",
    intro: "Medic Wisdom was founded by Tim Bobbitt to bring real-world insight into EMS and CPR training — from the streets, from the sky, and from two decades of teaching the next generation.",
    image: photos.timWide,
  },
  story: {
    eyebrow: "Tim's story",
    heading: "From the streets to the sky to the classroom",
    paragraphs: [
      "I'm Tim Bobbitt — a career paramedic, EMS educator and firefighter with over two decades of frontline experience delivering lifesaving care and training the next generation of EMS professionals.",
      "I've served in diverse, high-intensity roles: critical care as a Flight Paramedic, a Firefighter/Paramedic in some of Missouri's busiest and most progressive districts, and a ground paramedic in some of the busiest areas of St. Louis. My background also includes leadership and instructional roles with the St. Charles County Ambulance District, where I helped shape EMS education programs still in use today, such as Lifesaver CPR.",
      "As the founder of Medic Wisdom, my mission is to bring real-world insight into EMS training. I've taught hundreds of EMTs, developed nationally used curriculum, and contributed to some of the most respected textbooks in the field — including Mosby's Paramedic Textbook, Nancy Caroline's Emergency Care in the Streets, and PHTLS.",
      "I'm passionate about combining field experience with evidence-based education. Whether it's running high-acuity calls, writing NREMT-style test questions or delivering engaging classroom sessions, I believe in training that translates into better outcomes on the street. When I'm not in the field or the classroom, I'm probably spending time with my two dogs, Missy and Benson.",
    ],
    image: photos.timPortrait,
  },
  values: {
    eyebrow: "Why choose Medic Wisdom",
    heading: "What every class gives you",
    intro: "Whether you're a healthcare pro, parent, coach or teacher, we turn your knowledge into confident action.",
    items: [
      { title: "Real training for real emergencies", body: "We don't just teach CPR — we prepare you to save lives when seconds count." },
      { title: "Tailored to your team", body: "From churches to concert venues, we customize training that makes sense for your setting." },
      { title: "Efficient. Effective. Empowering.", body: "Our sessions are packed with value, not fluff — get certified without wasting time." },
      { title: "Beyond certification", body: "We teach the why, not just the how — so you're ready for real-world emergencies." },
      { title: "Business-friendly, liability-reducing", body: "Give your team life-saving skills and your organization peace of mind." },
      { title: "Learn with confidence, teach with pride", body: "Leave our class not just certified, but certified awesome." },
    ],
  },
  trust: { eyebrow: "The facts", heading: "What backs the training" },
  testimonials: { eyebrow: "What our students say", heading: "In their words", intro: "" },
  pathways: {
    eyebrow: "Courses",
    heading: "Where to start",
    links: [
      { label: "CPR, AED & First Aid", href: "/services/cpr-first-aid", description: "For everyday people, workplaces, venues and police." },
      { label: "BLS & ACLS", href: "/services/healthcare-providers", description: "AHA certification for healthcare providers." },
      { label: "EMS education", href: "/services/ems-education", description: "12-lead EKG, NREMT prep and Hamilton T1." },
      { label: "AED rentals", href: "/services/aed-rentals", description: "Units, signage, rescue kit and training included." },
    ] as RelatedLink[],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about Medic Wisdom",
    items: [
      { q: "Who teaches the classes?", a: "Medic Wisdom was founded by Tim Bobbitt, a career paramedic with over 20 years of frontline experience as a flight paramedic, firefighter/paramedic and EMS educator." },
      { q: "Which organizations is Medic Wisdom affiliated with?", a: "Medic Wisdom is an American Heart Association Aligned Training Site, an American Red Cross Authorized Training Provider and an HSI Approved Training Center." },
      { q: "Can you come to our location for training?", a: "Yes, we offer onsite training for groups. Whether it's a school, workplace, or community organization, we'll bring the class to you. Contact us to get a custom quote." },
    ] as Faq[],
  },
  cta: { heading: "Ready to train with Tim?", body: "Register for an upcoming class, or call to book group or on-site training." },
};
