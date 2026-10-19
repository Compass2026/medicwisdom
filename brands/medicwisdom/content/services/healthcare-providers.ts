import type { ServicePageContent } from "@/content/services/types";
import { trustPoints, processSteps } from "../shared";
import { photos, shareImage } from "../photos";

/**
 * HEALTHCARE PROVIDERS — BLS Provider and ACLS. Copy from the old site's
 * /bls-provider and /acls-training pages. The old homepage card for "BLS/CPR
 * Provider" carried the NREMT prep text by mistake; it is not reused.
 */
const hubPath = "/services/healthcare-providers";
const hubCrumb = { label: "BLS & ACLS", href: hubPath };

export const healthcareProviders: ServicePageContent = {
  slug: "healthcare-providers",
  path: hubPath,
  seo: {
    title: "BLS & ACLS Certification Classes in Missouri | Medic Wisdom",
    description: "AHA BLS Provider and ACLS certification for nurses, EMTs, paramedics, physicians and first responders in Missouri. In-person and blended. 2-year cards.",
    keyword: "bls and acls certification missouri",
    supporting: ["aha bls provider class", "acls renewal"],
    image: shareImage,
  },
  schema: { name: "BLS and ACLS Certification", serviceType: "Healthcare provider resuscitation training" },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "BLS & ACLS" }],
  directory: { title: "BLS & ACLS", summary: "AHA BLS Provider and ACLS for nurses, EMTs, paramedics and first responders." },
  hero: {
    eyebrow: "Courses · Healthcare providers",
    headline: "BLS & ACLS Certification Classes in Missouri",
    intro: "BLS, ACLS and EMS refreshers taught by instructors who've been there, done that. American Heart Association courses for the people who run the codes — with in-person and blended options and 2-year certification.",
    image: photos.timWide,
  },
  services: {
    eyebrow: "Two certifications",
    heading: "The cards your employer asks for",
    items: [
      {
        name: "BLS Provider",
        problem: "You work — or are training to work — in healthcare or public safety, and you need an AHA BLS card.",
        solution: "High-quality CPR for adults, children and infants, AED use, choking relief, bag-mask ventilation and team resuscitation, with an AHA card valid for 2 years.",
        href: `${hubPath}/bls-provider`,
      },
      {
        name: "Advanced Cardiac Life Support (ACLS)",
        problem: "You may be involved in resuscitation or the acute management of cardiovascular emergencies.",
        solution: "The AHA ACLS course: arrhythmia recognition, advanced airway, megacode simulations, post-cardiac arrest care and team dynamics. Valid for 2 years.",
        href: `${hubPath}/acls`,
      },
    ],
  },
  trust: { eyebrow: "Why Medic Wisdom", heading: "Taught by people who actually work in EMS", points: trustPoints },
  process: { eyebrow: "How it works", heading: "From first call to certification card", steps: processSteps },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about BLS and ACLS",
    items: [
      { q: "Do you offer blended or online courses?", a: "Yes! We offer blended learning options that combine online coursework with in-person skills testing. It's a flexible option for busy individuals or remote teams." },
      { q: "Can I renew with you?", a: "Yes. Renewals are welcome — already certified? Come refresh your skills with us." },
      { q: "How long are the cards valid?", a: "Both the AHA BLS Provider and ACLS cards are valid for 2 years." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "EMS education", href: "/services/ems-education", description: "12-lead EKG, NREMT prep and Hamilton T1 ventilator classes." },
      { label: "Heartsaver", href: "/services/cpr-first-aid/heartsaver", description: "The AHA course for people outside healthcare." },
      { label: "Contact", href: "/contact", description: "Group rates and on-site training." },
    ],
  },
  cta: { heading: "Let's get you certified", body: "Reserve your spot online. Group rates and on-site training are available." },
  sections: ["hero", "services", "trust", "process", "faqs", "related", "cta"],
};

export const blsProvider: ServicePageContent = {
  slug: "bls-provider",
  path: `${hubPath}/bls-provider`,
  parent: hubPath,
  seo: {
    title: "AHA BLS Provider Certification Class | Medic Wisdom",
    description: "AHA BLS Provider certification in Missouri for nurses, EMTs, physicians, students and first responders. In-person or blended; renewals welcome.",
    keyword: "bls provider certification",
    supporting: ["bls class for nurses", "bls renewal"],
    image: shareImage,
  },
  schema: { name: "BLS Provider Certification", serviceType: "AHA Basic Life Support Provider course" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "BLS Provider" }],
  directory: { title: "BLS Provider", summary: "AHA BLS for healthcare and public safety, with a 2-year card." },
  hero: {
    eyebrow: "For healthcare heroes",
    headline: "BLS Provider Certification Class",
    intro: "Ready to level up your life-saving skills — without the fear, fluff or pressure? Healthcare pros learn the essentials of CPR, AED and emergency teamwork in a class that's engaging, hands-on, and yes… even fun.",
    image: photos.blsTeam,
  },
  services: {
    eyebrow: "What you'll learn",
    heading: "Your AHA-approved foundation",
    intro: "For managing cardiac arrests, choking and other life-threatening events with confidence and calm. Based on the latest 2020 AHA Guidelines.",
    items: [
      { name: "High-quality CPR", problem: "Adults, children and infants each need different technique — alone or with a team.", solution: "High-quality CPR for adults, children and infants, single and multi-rescuer." },
      { name: "AED use", problem: "A shock delivered late, or unsafely, costs the patient.", solution: "How to deliver a life-saving shock safely and effectively." },
      { name: "Choking relief", problem: "Airway obstruction needs a fast, practised response.", solution: "Step-by-step skills for airway obstruction." },
      { name: "Team resuscitation", problem: "Codes go wrong when the team doesn't communicate.", solution: "How to communicate and work with a team under pressure." },
      { name: "Bag-mask ventilation", problem: "Rescue breathing is hard to get right without practice.", solution: "Perform effective rescue breathing with a bag-valve mask." },
      { name: "Emergency recognition", problem: "Knowing when to act is the first skill.", solution: "Identify cardiac arrest, respiratory failure, and when to act." },
    ],
  },
  trust: {
    eyebrow: "Certification details",
    heading: "What the card means",
    points: [
      { label: "AHA BLS Provider card", detail: "Valid for 2 years." },
      { label: "Meets requirements", detail: "Meets OSHA and healthcare employment requirements." },
      { label: "In-person or blended", detail: "Instructor-led with skills testing, or online coursework plus an in-person skills check." },
      { label: "Renewals welcome", detail: "Already certified? Come refresh your skills with us." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about BLS Provider",
    items: [
      { q: "Who should take this class?", a: "If you work (or are training to work) in healthcare or public safety, you need this course — nurses, physicians, EMTs, respiratory therapists, healthcare students, police officers, firefighters, lifeguards and first responders." },
      { q: "What makes this BLS class different?", a: "It's laid-back and supportive, team-based and practical, and interactive — you'll practise real-life scenarios with others, not just stare at a screen." },
      { q: "Is there a blended option?", a: "Yes. Complete the online coursework, then come in for an in-person skills check." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "ACLS", href: `${hubPath}/acls`, description: "The advanced course that builds on BLS." },
      { label: "EMS for law enforcement", href: "/services/cpr-first-aid/law-enforcement", description: "BLS plus officer-specific medical training." },
      { label: "Contact", href: "/contact", description: "Group rates and on-site training." },
    ],
  },
  cta: { heading: "You never know when someone will need you to act", body: "Make sure you're ready. Sign up for a stress-free, skill-packed BLS Provider class today." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const acls: ServicePageContent = {
  slug: "acls",
  path: `${hubPath}/acls`,
  parent: hubPath,
  seo: {
    title: "ACLS Certification Course in Missouri | Medic Wisdom",
    description: "AHA ACLS certification in Missouri: arrhythmia management, advanced airway, megacode simulations. Classroom or blended. Same-day certification available.",
    keyword: "acls certification course",
    supporting: ["acls class missouri", "acls blended learning"],
    image: shareImage,
  },
  schema: { name: "Advanced Cardiac Life Support (ACLS)", serviceType: "AHA Advanced Cardiovascular Life Support course" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "ACLS" }],
  directory: { title: "ACLS", summary: "AHA Advanced Cardiovascular Life Support, classroom or blended." },
  hero: {
    eyebrow: "AHA-certified · In-person & blended · 2-year certification",
    headline: "ACLS Certification Course",
    intro: "When seconds count, advanced skills make the difference. The American Heart Association's Advanced Cardiovascular Life Support course gives healthcare professionals the clinical tools and critical thinking to manage cardiac arrest, stroke, arrhythmias and other life-threatening cardiovascular emergencies.",
    image: photos.chestCompressions,
  },
  services: {
    eyebrow: "Curriculum",
    heading: "What you'll learn",
    intro: "Builds on your BLS knowledge and goes deep into advanced interventions for adult patients in cardiac arrest or critical conditions.",
    items: [
      { name: "Advanced life support skills", problem: "Basic CPR alone won't run a code.", solution: "Advanced airway management, bag-mask ventilation and IV/IO medication administration." },
      { name: "Arrhythmia recognition & management", problem: "The rhythm on the monitor decides the next move.", solution: "ECG interpretation and the management of each arrhythmia." },
      { name: "Acute coronary syndromes & stroke", problem: "Cardiac and stroke patients need the right care fast.", solution: "Recognition and management of acute coronary syndromes and stroke." },
      { name: "Post-cardiac arrest care", problem: "Getting a pulse back is not the end of the resuscitation.", solution: "Post-cardiac arrest care for the patient you just got back." },
      { name: "Effective team dynamics", problem: "Megacodes test the team as much as the individual.", solution: "Realistic, team-based megacode simulations on high-fidelity manikins." },
      { name: "BLS integration", problem: "Advanced care stands on good BLS.", solution: "Refreshed BLS skills woven through every scenario." },
    ],
  },
  trust: {
    eyebrow: "Certification details",
    heading: "What you'll leave with",
    points: [
      { label: "Issued by the AHA", detail: "American Heart Association ACLS, valid for 2 years." },
      { label: "Digital provider eCard", detail: "Plus CME/CE credit eligibility." },
      { label: "Meets requirements", detail: "Hospital, EMS and licensing requirements for ACLS credentialing." },
      { label: "Same-day certification", detail: "Available — with small group sizes for better hands-on learning." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about ACLS",
    items: [
      { q: "Who should take the ACLS course?", a: "Licensed healthcare professionals who may be involved in resuscitation or the acute management of cardiovascular emergencies: emergency physicians and nurses, paramedics and advanced EMTs, ICU and critical care nurses, hospitalists and anesthesiologists, respiratory therapists, and providers in ERs, ICUs and urgent care." },
      { q: "What formats do you offer?", a: "Two AHA-approved formats: classroom (instructor-led, scenario-based training with real-time feedback), or blended learning — complete the cognitive portion online, then join us for a fast-paced, hands-on skills session." },
      { q: "What should I do before class?", a: "Complete the AHA Pre-Course Self-Assessment, review the ACLS Provider Manual or eBook, and refresh your BLS skills to prepare for advanced scenarios." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "BLS Provider", href: `${hubPath}/bls-provider`, description: "The foundation ACLS builds on." },
      { label: "12-lead EKG courses", href: "/services/ems-education", description: "Beginner and advanced 12-lead interpretation." },
      { label: "Contact", href: "/contact", description: "Group rates and on-site training." },
    ],
  },
  cta: { heading: "Be prepared for the worst — respond with confidence", body: "Courses taught by field-experienced providers, with convenient scheduling. Register online or call to book." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};
