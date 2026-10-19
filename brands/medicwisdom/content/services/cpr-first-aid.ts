import type { ServicePageContent } from "@/content/services/types";
import { trustPoints, processSteps } from "../shared";
import { photos, shareImage } from "../photos";

/**
 * CPR, AED & FIRST AID — hub plus four courses. Copy is the old site's own
 * page text for each course (/cpr-aed-training, /bls-heartsaver,
 * /event-medical-training, /ems-for-leo), tightened and de-duplicated.
 */
const hubPath = "/services/cpr-first-aid";
const hubCrumb = { label: "CPR, AED & First Aid", href: hubPath };

export const cprFirstAid: ServicePageContent = {
  slug: "cpr-first-aid",
  path: hubPath,
  seo: {
    title: "CPR, AED & First Aid Classes in Missouri | Medic Wisdom",
    description: "Hands-on CPR, AED and First Aid classes for individuals, workplaces, schools, venues and police in Missouri. No experience needed. On-site training available.",
    keyword: "cpr and first aid classes missouri",
    supporting: ["cpr aed training", "heartsaver cpr class", "workplace cpr training"],
    image: shareImage,
  },
  schema: { name: "CPR, AED & First Aid Training", serviceType: "CPR and first aid training" },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "CPR, AED & First Aid" }],
  directory: { title: "CPR, AED & First Aid", summary: "For everyday people, workplaces, venues and police: CPR, AED use and first aid, taught hands-on." },
  hero: {
    eyebrow: "Courses · CPR, AED & First Aid",
    headline: "CPR, AED & First Aid Classes in Missouri",
    intro: "When accidents strike — at work, at school or in public — being trained in First Aid and CPR/AED can save lives. Our courses cover everything from basic wound care and injury response to cardiac emergencies and AED use.",
    image: photos.chestCompressions,
  },
  services: {
    eyebrow: "Four courses",
    heading: "Pick the class that fits who you are",
    intro: "No medical background is needed for any of these. Each is taught hands-on, with real equipment, by a paramedic.",
    items: [
      {
        name: "CPR, AED & First Aid",
        problem: "Someone you love collapses, and most people freeze — not because they don't care, but because they don't know what to do.",
        solution: "A 3–4 hour class for complete beginners: hands-only CPR, using an AED, and first steps for choking, bleeding, burns and allergic reactions.",
        href: `${hubPath}/cpr-aed-first-aid`,
      },
      {
        name: "Heartsaver CPR, AED & First Aid",
        problem: "Your job — teacher, coach, daycare worker, lifeguard — asks for an American Heart Association card.",
        solution: "The AHA Heartsaver course: CPR for adults, kids and infants, AED use, choking relief and first aid, with a card valid for 2 years.",
        href: `${hubPath}/heartsaver`,
      },
      {
        name: "Event & venue staff training",
        problem: "Stadiums, churches, arenas and concert halls hold hundreds or thousands of people, and emergencies happen in busy venues.",
        solution: "BLS CPR/AED certification for your staff, plus seizures, intoxication versus true medical emergencies, and an open Ask-the-Medic Q&A.",
        href: `${hubPath}/event-venue-staff`,
      },
      {
        name: "EMS for law enforcement",
        problem: "Officers are often first on scene — and the first chance at saving a life.",
        solution: "AHA BLS CPR/AED certification plus choking response, Narcan, spotting medical emergencies that mimic intoxication, and officer-down care.",
        href: `${hubPath}/law-enforcement`,
      },
    ],
  },
  trust: { eyebrow: "Why Medic Wisdom", heading: "Who teaches, and what backs the card", points: trustPoints },
  process: { eyebrow: "How it works", heading: "From first call to certification card", steps: processSteps },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about CPR and First Aid classes",
    items: [
      { q: "Do I need medical experience to take a class?", a: "Not at all. Many of our courses are open to the public and designed for beginners. We also offer advanced training for healthcare professionals — just choose the course that fits your experience level." },
      { q: "Can you come to our location for training?", a: "Yes, we offer onsite training for groups. Whether it's a school, workplace, or community organization, we'll bring the class to you. Contact us to get a custom quote." },
      { q: "Is Heartsaver the same as BLS?", a: "No. Heartsaver is for non-medical folks who want to be prepared. If you work in healthcare, you'll need BLS Provider." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "BLS & ACLS for healthcare providers", href: "/services/healthcare-providers", description: "AHA BLS Provider and ACLS certification." },
      { label: "AED rentals", href: "/services/aed-rentals", description: "Event, monthly and long-term AED rentals, with training included." },
      { label: "Where we train", href: "/service-area", description: "At our O'Fallon facility or on-site anywhere in Missouri." },
    ],
  },
  cta: { heading: "Learn life-saving skills today", body: "Classes fill fast because we keep them small and personal. Register online, or call to book a group or on-site class." },
  sections: ["hero", "services", "trust", "process", "faqs", "related", "cta"],
};

export const cprAedFirstAid: ServicePageContent = {
  slug: "cpr-aed-first-aid",
  path: `${hubPath}/cpr-aed-first-aid`,
  parent: hubPath,
  seo: {
    title: "CPR & AED Training for Beginners in Missouri | Medic Wisdom",
    description: "CPR, AED and First Aid training for people with zero medical background: hands-only CPR, AED use, choking, bleeding and burns. About 3–4 hours.",
    keyword: "cpr aed training",
    supporting: ["first aid class", "hands-only cpr class"],
    image: shareImage,
  },
  schema: { name: "CPR, AED & First Aid Training", serviceType: "CPR and AED training" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "CPR, AED & First Aid" }],
  directory: { title: "CPR, AED & First Aid", summary: "For complete beginners: hands-only CPR, AED use and first aid in about 3–4 hours." },
  hero: {
    eyebrow: "No experience required",
    headline: "CPR & AED Training for Everyday People",
    intro: "What would you do if someone you love suddenly collapsed? Our CPR & First Aid training is designed for everyday people with zero medical background. We'll teach you step by step, in plain language, how to respond in the moments that matter most.",
    image: photos.firstAidClass,
  },
  services: {
    eyebrow: "What you'll learn",
    heading: "Real-life skills that save lives",
    intro: "You don't need to be strong, fast, or have any prior knowledge. You just need the willingness to learn.",
    items: [
      { name: "Recognize and act", problem: "A coworker collapses, a child starts choking, a neighbor is badly hurt.", solution: "How to recognize when someone needs help and act quickly — instead of panicking." },
      { name: "Hands-only CPR", problem: "Most people have never pushed on a chest and don't know how hard or how fast.", solution: "Hands-only CPR: simple, proven and effective, practised with real equipment until it feels natural." },
      { name: "Using an AED", problem: "The defibrillator is on the wall, and nobody wants to be the one to open it.", solution: "How to use an AED with confidence, from opening the case to delivering a shock." },
      { name: "Choking, bleeding, burns and more", problem: "Not every emergency is a cardiac arrest.", solution: "First steps for choking, bleeding, burns, allergic reactions and more — and how to keep yourself safe while helping others." },
    ],
  },
  trust: {
    eyebrow: "Class details",
    heading: "What to expect",
    points: [
      { label: "About 3–4 hours", detail: "Fun, interactive and supportive — no boring lectures." },
      { label: "Beginner-friendly", detail: "We assume you know nothing, and build you up from there." },
      { label: "Take home", detail: "A completion card, plus a quick-reference guide for your car, home or office." },
      { label: "Who it's for", detail: "Parents, grandparents, teachers, coaches, babysitters, workplace teams — anyone who wants to be prepared." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about this class",
    items: [
      { q: "How long is the class?", a: "About 3–4 hours." },
      { q: "Can I book for a group?", a: "Yes. We run individual training, group sessions for workplaces, schools and teams, and on-site training." },
      { q: "Will I receive a certification card?", a: "Yes! After successful completion of your course, you'll receive an official certification card — either physical or digital — recognized by employers, schools, and healthcare facilities." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "Heartsaver CPR, AED & First Aid", href: `${hubPath}/heartsaver`, description: "The American Heart Association course, with a 2-year card." },
      { label: "All CPR & First Aid courses", href: hubPath, description: "Venue staff, law enforcement and more." },
      { label: "Contact", href: "/contact", description: "Ask a question or book a group class." },
    ],
  },
  cta: { heading: "Don't wait until it's too late", body: "Classes fill fast because we keep them small and personal. Reserve your spot today." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const heartsaver: ServicePageContent = {
  slug: "heartsaver",
  path: `${hubPath}/heartsaver`,
  parent: hubPath,
  seo: {
    title: "Heartsaver CPR, AED & First Aid Class | Medic Wisdom",
    description: "American Heart Association Heartsaver CPR, AED & First Aid in Missouri: CPR for adults, kids and infants, AED use and first aid. Card valid for 2 years.",
    keyword: "heartsaver cpr aed first aid class",
    supporting: ["aha heartsaver course", "heartsaver cpr certification"],
    image: shareImage,
  },
  schema: { name: "Heartsaver CPR, AED & First Aid", serviceType: "AHA Heartsaver CPR AED and First Aid course" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "Heartsaver" }],
  directory: { title: "Heartsaver CPR, AED & First Aid", summary: "The AHA course for non-medical people, with a card valid for 2 years." },
  hero: {
    eyebrow: "American Heart Association · Heartsaver®",
    headline: "Heartsaver CPR, AED & First Aid Class",
    intro: "No pressure. No medical jargon. No problem. Guided by a retired paramedic, you'll practise CPR for adults, kids and infants, use an AED, and learn essential first aid — all in a relaxed, supportive environment.",
    image: photos.bagMaskDemo,
  },
  services: {
    eyebrow: "What to expect",
    heading: "Zero stress. All confidence.",
    intro: "Designed for real people — teachers, parents, coworkers, coaches, daycare workers, lifeguards — and anyone who wants to be ready when it matters most.",
    items: [
      { name: "CPR for adults, kids & infants", problem: "Children and infants need different hand positions, depths and breaths than adults.", solution: "Clear, simple CPR skills for every age, practised hands-on until they stick." },
      { name: "AED use", problem: "An AED only helps if someone nearby is willing to use it.", solution: "How to use an AED quickly and safely, start to finish." },
      { name: "Choking relief & basic first aid", problem: "Choking and everyday injuries call for different skills than CPR.", solution: "Relieving choking and the basic first aid skills you'll actually use." },
      { name: "Practice-While-Watching™", problem: "Lectures are easy to forget under stress.", solution: "Supportive instructors guide you step by step using the AHA's Practice-While-Watching™ technique." },
    ],
  },
  trust: {
    eyebrow: "Course time",
    heading: "What you'll leave with",
    points: [
      { label: "Heartsaver CPR AED", detail: "Approximately 4.5 hours." },
      { label: "Heartsaver First Aid CPR AED", detail: "Approximately 7 hours, paced flexibly so everyone stays comfortable and engaged." },
      { label: "AHA card, valid 2 years", detail: "An American Heart Association certification card." },
      { label: "Real-world skills", detail: "A boost of confidence — and maybe even a few laughs along the way." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about Heartsaver",
    items: [
      { q: "Is this the same as BLS?", a: "Nope! This course is for non-medical folks who just want to be prepared, not panicked. If you work in healthcare, you'll need BLS. But if you just want to help when it counts, Heartsaver is your go-to." },
      { q: "How long does it take?", a: "Heartsaver CPR AED takes approximately 4.5 hours. Heartsaver First Aid CPR AED takes approximately 7 hours." },
      { q: "Can you train our whole team?", a: "Yes. The class is open to individuals and groups, and on-site training is available for businesses and organizations." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "BLS Provider", href: "/services/healthcare-providers/bls-provider", description: "The course for people who work in healthcare." },
      { label: "CPR, AED & First Aid for beginners", href: `${hubPath}/cpr-aed-first-aid`, description: "A 3–4 hour class with a completion card." },
      { label: "Contact", href: "/contact", description: "Book individual or group seats." },
    ],
  },
  cta: { heading: "Sign up today, become someone's hero tomorrow", body: "Friendly, practical and life-saving. Your seat is waiting." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const eventVenueStaff: ServicePageContent = {
  slug: "event-venue-staff",
  path: `${hubPath}/event-venue-staff`,
  parent: hubPath,
  seo: {
    title: "CPR & AED Training for Event and Venue Staff | Medic Wisdom",
    description: "BLS CPR/AED training for stadium, church, arena and concert venue staff in Missouri, tailored to large gatherings. AHA-standard certification.",
    keyword: "cpr and aed training for venue staff",
    supporting: ["church safety cpr training", "stadium staff cpr training"],
    image: shareImage,
  },
  schema: { name: "Event Medical Training", serviceType: "BLS CPR and AED training for event venues" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "Event & venue staff" }],
  directory: { title: "Event & venue staff", summary: "BLS CPR/AED certification for stadiums, churches, arenas and concert venues." },
  hero: {
    eyebrow: "Event medical training",
    headline: "CPR & AED Training for Event and Venue Staff",
    intro: "When emergencies happen, every second counts — especially in high-traffic venues like stadiums, churches, arenas and concert halls. Taught by a retired paramedic, this hands-on course is tailored for large gatherings, so your team is ready when seconds matter most.",
    image: photos.eventGraphic,
  },
  services: {
    eyebrow: "Why it's essential",
    heading: "Be prepared, be protected, be proud",
    items: [
      { name: "Your venue's reputation", problem: "Audiences trust venues that put safety first.", solution: "Trained staff make your venue stand out as proactive, responsible and community-focused — a clear message that you care about everyone who walks through the doors." },
      { name: "Liability and readiness", problem: "Cardiac arrests, seizures, overdoses and diabetic events can and do happen at events.", solution: "Trained staff on site mean faster response times and reduced legal exposure. Training equals protection — for your patrons and your business." },
      { name: "Real-world emergencies, not just CPR", problem: "Most venue emergencies aren't textbook cardiac arrests.", solution: "What to do if someone is seizing, how to tell intoxication from a true medical emergency like stroke or diabetic shock, and an open Ask-the-Medic Q&A." },
      { name: "Certification you can display", problem: "Patrons, insurers and stakeholders want proof.", solution: "Every participant receives official BLS CPR and AED certification meeting American Heart Association standards." },
    ],
  },
  trust: { eyebrow: "Why Medic Wisdom", heading: "Who teaches your team", points: trustPoints },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions from venue managers",
    items: [
      { q: "What size of venue do you train?", a: "Whether your location holds 100 or 10,000 people, the training is customized to your venue and your team." },
      { q: "Who is this class for?", a: "Stadium staff, church safety teams, concert venue and arena crews, and anyone responsible for medical emergency response at large gatherings." },
      { q: "Do you also provide AEDs?", a: "Yes — AED rentals for events, from one day to a full year, with CPR/AED training included." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "AED rentals", href: "/services/aed-rentals", description: "Event rentals from 1 to 7 days, with on-site setup available." },
      { label: "All CPR & First Aid courses", href: hubPath, description: "Beginners, Heartsaver and law enforcement." },
      { label: "Contact", href: "/contact", description: "Schedule your venue's class." },
    ],
  },
  cta: { heading: "Turn your venue into a life-saving environment", body: "Contact us today to schedule your class. Every heartbeat matters — train today so you're ready to save tomorrow." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const lawEnforcement: ServicePageContent = {
  slug: "law-enforcement",
  path: `${hubPath}/law-enforcement`,
  parent: hubPath,
  seo: {
    title: "EMS Training for Police Officers in Missouri | Medic Wisdom",
    description: "Tactical lifesaving for law enforcement: AHA BLS CPR/AED, Narcan, choking, officer-down care and medical emergencies that mimic intoxication.",
    keyword: "ems training for police officers",
    supporting: ["law enforcement cpr training", "officer down medical training"],
    image: shareImage,
  },
  schema: { name: "EMS for Law Enforcement", serviceType: "Medical training for police officers" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "Law enforcement" }],
  directory: { title: "EMS for law enforcement", summary: "Tactical lifesaving for officers, with AHA BLS CPR/AED certification." },
  hero: {
    eyebrow: "Tactical lifesaving · EMS for LEO",
    headline: "EMS Training for Police Officers",
    intro: "Law enforcement officers are often the first on scene — and the first chance at saving a life. This specialized class, designed exclusively for police officers, focuses on the real-world medical situations you're most likely to face in the field.",
    image: photos.policeCar,
  },
  services: {
    eyebrow: "What the course covers",
    heading: "Focused, practical and street-relevant",
    intro: "Taught by a retired paramedic with years of frontline experience, blending real-world scenarios, hands-on practice and AHA-approved techniques.",
    items: [
      { name: "BLS CPR/AED certification", problem: "Cardiac arrest calls don't wait for the ambulance.", solution: "American Heart Association BLS CPR/AED certification as part of the course." },
      { name: "Choking response", problem: "Choking victims range from small children to adults.", solution: "Choking victim response for every age." },
      { name: "Narcan administration", problem: "An overdose can stop someone breathing before EMS arrives.", solution: "How, when and why to give Narcan." },
      { name: "Medical vs. intoxicated", problem: "Diabetic emergencies, strokes and seizures can look like intoxication.", solution: "How to spot the medical emergencies that mimic intoxication." },
      { name: "Officer-down care", problem: "You or a fellow officer is shot or stabbed before EMS arrives.", solution: "What to do in those first minutes." },
      { name: "Ask the medic", problem: "Some questions don't get asked at roll call.", solution: "Q&A time to ask your medical questions in a judgment-free space." },
    ],
  },
  trust: {
    eyebrow: "How we train",
    heading: "No fluff — just lifesaving skills you can use immediately",
    points: [
      { label: "Taught by experienced paramedics", detail: "Over 20 years of frontline EMS expertise." },
      { label: "At your department", detail: "We come to your department, academy or training center." },
      { label: "Or at our facility", detail: "Join us at Medic Wisdom's training facility." },
      { label: "Built for police work", detail: "Professional, supportive, and geared toward the realities of law enforcement." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions from departments",
    items: [
      { q: "Can you train at our academy or department?", a: "Yes. We come to your department, academy or training center, or you can join us at Medic Wisdom's training facility." },
      { q: "Do officers leave with a certification?", a: "Yes — American Heart Association BLS CPR/AED certification is part of the course." },
      { q: "Are group rates available?", a: "Yes. Group rates and on-site training are available. Contact Medic Wisdom to schedule your department's class." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "BLS Provider", href: "/services/healthcare-providers/bls-provider", description: "The AHA course for first responders and healthcare providers." },
      { label: "All CPR & First Aid courses", href: hubPath, description: "Beginners, Heartsaver and venue staff." },
      { label: "Contact", href: "/contact", description: "Schedule your department's class." },
    ],
  },
  cta: { heading: "Equip your officers. Save more lives.", body: "Because every second counts, and you are the first responder. Contact Medic Wisdom to schedule your department's class." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};
