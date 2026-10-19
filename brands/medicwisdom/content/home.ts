import type { StoryStage } from "@/components/motion/ScrollStory";
import { processSteps } from "./shared";
import { photos } from "./photos";

/** HOMEPAGE — Medic Wisdom. Copy from the old homepage unless noted. */
export const homePage = {
  seo: {
    title: "CPR and First Aid Training in Missouri | Medic Wisdom",
    description: "Get certified with CPR and First Aid training from Medic Wisdom. Hands-on CPR/AED, BLS, ACLS and EMS courses for individuals, workplaces and schools in Missouri.",
  },
  services: {
    eyebrow: "Our courses",
    heading: "Training for every level, from bystander to flight medic",
    intro: "CPR/AED, BLS, ACLS, EMS and CEU classes, custom training for police officers, event staff and venue safety teams — and AED rentals with training included.",
    more: { label: "See every course and AED rentals", href: "/services" },
    callLabel: "Call",
  },
  process: { eyebrow: "How it works", heading: "From first call to certification card", intro: "Four steps, whether you're booking one seat or training a whole department." },
  about: { eyebrow: "Meet your instructor", cta: { label: "More about Tim", href: "/about" } },
  testimonials: {
    eyebrow: "What our students say",
    heading: "Trusted by first responders, healthcare providers and local businesses",
    intro: "Hear what students across St. Louis say about the impact of the training and the confidence they gained to act in emergencies.",
  },
  area: {
    eyebrow: "Where we train",
    heading: "Training that comes to you",
    intro: "Mobile, flexible and professional. Classes at our O'Fallon training facility, on-site at your workplace, school, church, venue or department anywhere in Missouri, and online for selected courses.",
    fallback: { text: "Want a class at your location?", callLabel: "Call", action: "for a custom quote." },
    more: { label: "Where we train", href: "/service-area" },
  },
  finalCta: {
    heading: "Experience a higher quality of training",
    body: "Leave our class not just certified, but certified awesome. Register for an upcoming class, or call to book group or on-site training.",
    careers: null as { text: string; label: string } | null,
  },
};

export const hero = {
  eyebrow: "CPR · First Aid · BLS · ACLS · EMS",
  headline: "CPR and First Aid Training in Missouri,",
  headlineAccent: "taught by a career paramedic.",
  body: "Medic Wisdom equips you with the skills and confidence to respond in any emergency. Hands-on CPR/AED and First Aid courses for individuals, workplaces and schools across Missouri — plus BLS, ACLS and EMS education for the pros.",
  image: photos.timWide,
};

export { trustPoints } from "./shared";

export const servicePathways: { slug: string; title: string; summary: string; examples: string[]; image: { src: string; alt: string }; href?: string }[] = [
  {
    slug: "cpr-first-aid",
    title: "CPR, AED & First Aid",
    summary: "For everyday people, workplaces, venues and police. No experience required — just real-life skills that save lives.",
    examples: ["CPR, AED & First Aid", "Heartsaver®", "Event & venue staff", "EMS for law enforcement"],
    image: photos.firstAidClass,
    href: "/services/cpr-first-aid",
  },
  {
    slug: "healthcare-providers",
    title: "BLS & ACLS",
    summary: "American Heart Association certification for nurses, EMTs, paramedics, physicians and first responders. Renewals welcome.",
    examples: ["BLS Provider", "ACLS"],
    image: photos.blsTeam,
    href: "/services/healthcare-providers",
  },
  {
    slug: "ems-education",
    title: "EMS education",
    summary: "12-lead EKG at three levels, NREMT prep and Hamilton T1 ventilator training — from a flight paramedic.",
    examples: ["12-Lead EKG", "Advanced 12-Lead", "Free 12-lead for EMTs", "NREMT prep", "Hamilton T1"],
    image: photos.cardEkg,
    href: "/services/ems-education",
  },
];

/** Not offered (site.offersEmergencyService = false), so never rendered. */
export const emergencyCallout = { heading: "", body: "" };

const stageImages = [photos.bagMaskDemo, photos.firstAidClass, photos.cardEmtEkg, photos.chestCompressions];
export const storyStages: StoryStage[] = processSteps.map((step, i) => ({ ...step, image: stageImages[i] }));

export const about = {
  heading: "Real training, real skills, real confidence",
  paragraphs: [
    "Welcome to Medic Wisdom, your trusted provider of professional, engaging and real-life EMS and CPR training. Whether you're a business, healthcare provider, first responder or concerned citizen, we bring top-tier, hands-on medical training right to you.",
    "Medic Wisdom was founded by Tim Bobbitt — a career paramedic, flight paramedic, firefighter/paramedic and EMS educator with over two decades on the front line. Our mission? Empowering you with the confidence and skills to act fast, stay calm, and save lives.",
  ],
  image: photos.timPortrait,
};

/**
 * Attributed exactly as the old homepage publishes them. The stray "CEO"
 * heading on Kelly P.'s card was a template leftover and is dropped. The
 * owner confirms these quotes before launch (docs/medicwisdom/open-questions.md).
 */
export const testimonials: { quote: string; name: string; excerpt?: boolean }[] = [
  {
    quote: "After 20+ years in law enforcement, this was one of the most valuable trainings I've ever taken. Straight to the point, highly effective, and truly impactful. I walked away with practical skills that could save a life — whether it's a citizen, a fellow officer, or even myself. I only wish I had this training when I started my career.",
    name: "Harold Holm, Veteran Law Enforcement Officer",
  },
  {
    quote: "You can tell he genuinely wants every student to succeed. His feedback is constructive, his teaching style is clear, and his passion for EMS is contagious. Whether it's a CPR course for beginners or advanced paramedic training, Tim adapts his instruction to fit the audience and keeps everyone engaged.",
    name: "Marcus R., Event Medic & Former Student",
  },
  {
    quote: "Every Medic Wisdom class I've taken has been engaging, fast-paced, and full of real-life application. Tim has a way of keeping the classroom alive with stories, humor, and encouragement — but also keeps it professional and focused. If you're serious about being the best in the field, this is the guy to learn from.",
    name: "Kelly P., RN transitioning to EMS",
  },
  {
    quote: "Tim's teaching style is unlike any EMS instructor I've had before. He doesn't just teach from a textbook — he brings over 20 years of field experience into every lesson. His scenarios are realistic, his expectations are high, and he makes sure we're prepared for what really happens in the field.",
    name: "Jordan M., EMT Student",
  },
  {
    quote: "Tim's approach is refreshingly hands-on. Every class involves scenarios that simulate high-pressure calls — cardiac arrests, overdoses, trauma — and we're taught not just what to do, but why it matters. He doesn't just train responders; he builds thinking medics.",
    name: "Kevin G., Firefighter/Paramedic",
  },
  {
    quote: "This class helped me finally pass the NREMT after two failed attempts. The breakdown of each section and real test tips made all the difference.",
    name: "Ashley B., NREMT-P",
  },
];
