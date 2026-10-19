import type { ServicePageContent } from "@/content/services/types";
import { trustPoints } from "../shared";
import { photos, shareImage } from "../photos";

/**
 * EMS EDUCATION — 12-lead EKG (three levels), NREMT prep (EMT and
 * paramedic) and the Hamilton T1 ventilator. Copy from the old site's own
 * pages for each course. Prices and formats are as the old site states them
 * ($0 for 12-lead for EMTs, $250 NREMT paramedic, $150 Hamilton T1).
 */
const hubPath = "/services/ems-education";
const hubCrumb = { label: "EMS education", href: hubPath };

export const emsEducation: ServicePageContent = {
  slug: "ems-education",
  path: hubPath,
  seo: {
    title: "EMS Education: 12-Lead EKG & NREMT Prep | Medic Wisdom",
    description: "EMS classes in Missouri from a career paramedic: beginner and advanced 12-lead EKG, a free 12-lead class for EMTs, NREMT prep and Hamilton T1 training.",
    keyword: "ems continuing education missouri",
    supporting: ["12 lead ekg class", "nremt prep class", "hamilton t1 ventilator training"],
    image: shareImage,
  },
  schema: { name: "EMS Education", serviceType: "EMS continuing education" },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "EMS education" }],
  directory: { title: "EMS education", summary: "12-lead EKG at three levels, NREMT prep, and Hamilton T1 ventilator training." },
  hero: {
    eyebrow: "Courses · EMS education",
    headline: "EMS Education from a Career Paramedic",
    intro: "Over 20 years of frontline EMS expertise poured into every class: flight paramedic, firefighter/paramedic and EMS educator. We teach the why, not just the how — so you're ready for real-world emergencies.",
    image: photos.timWide,
  },
  services: {
    eyebrow: "Six courses",
    heading: "From your first 12-lead to critical care",
    items: [
      { name: "12-Lead EKG for Beginners", problem: "You can run a 12-lead, but reading one still feels like guesswork.", solution: "Axis, lead placement, STEMI vs NSTEMI and the common patterns that save lives in the field.", href: `${hubPath}/12-lead-ekg-beginner` },
      { name: "Advanced 12-Lead ECG Interpretation", problem: "You know the basics and want to read like a cardiologist.", solution: "Subtle STEMI equivalents, posterior and RV infarcts, bundle branch blocks and mimics, LVH, pericarditis, hyperkalemia.", href: `${hubPath}/advanced-12-lead-ekg` },
      { name: "Free 12-Lead Class for EMTs", problem: "EMT school barely touched 12-leads, but the real world expects you to know what you're looking at.", solution: "A short, free crash course: when to run a 12-lead and how to spot the big stuff. Virtual or in person.", href: `${hubPath}/12-lead-for-emts` },
      { name: "NREMT EMT Prep", problem: "You've made it through class, clinicals and skills labs — now you have to pass the NREMT.", solution: "A fun, fast-paced written review with test-taking strategies, drills and mock questions.", href: `${hubPath}/nremt-emt-prep` },
      { name: "NREMT Paramedic Prep", problem: "The paramedic written exam covers the whole curriculum.", solution: "A 2-day intensive review on the NREMT Paramedic Test Plan, with a custom workbook and mock exam. $250.", href: `${hubPath}/nremt-paramedic-prep` },
      { name: "Hamilton T1 Ventilator", problem: "Surface-level settings aren't enough in critical care transport.", solution: "A 6-hour, 100% hands-on deep dive on real Hamilton T1 units. In person or via Zoom. $150.", href: `${hubPath}/hamilton-t1-ventilator` },
    ],
  },
  trust: { eyebrow: "Why learn with Medic Wisdom", heading: "Taught by medics who've been there and aced it", points: trustPoints },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about EMS classes",
    items: [
      { q: "Can you teach our whole EMT or paramedic cohort?", a: "Yes. The NREMT prep classes are held at Medic Wisdom, or we'll come to your class or cohort." },
      { q: "Are any classes online?", a: "Yes. The free 12-lead class for EMTs can be set up as a virtual class, and the Hamilton T1 class can be attended via Zoom." },
      { q: "Are group and agency discounts available?", a: "Yes for the Hamilton T1 class. For a cohort or agency booking on any other class, contact us for a quote." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "BLS & ACLS", href: "/services/healthcare-providers", description: "AHA BLS Provider and ACLS certification." },
      { label: "About Tim", href: "/about", description: "Flight paramedic, firefighter/paramedic and EMS educator." },
      { label: "Contact", href: "/contact", description: "Book a seat or a cohort class." },
    ],
  },
  cta: { heading: "Training the lifesavers of tomorrow", body: "Classes fill fast. Register online, or call to set up a class for your agency or cohort." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const ekgBeginner: ServicePageContent = {
  slug: "12-lead-ekg-beginner",
  path: `${hubPath}/12-lead-ekg-beginner`,
  parent: hubPath,
  seo: {
    title: "12-Lead EKG Class for Beginners | Medic Wisdom",
    description: "Fundamentals of 12-lead EKG interpretation for EMTs, new medics, nurses and ALS providers: axis, lead placement, STEMI vs NSTEMI and key patterns.",
    keyword: "12 lead ekg class for beginners",
    supporting: ["12 lead ekg interpretation course", "stemi recognition class"],
    image: shareImage,
  },
  schema: { name: "12-Lead EKG for Beginners", serviceType: "12-lead EKG interpretation course" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "12-Lead EKG for Beginners" }],
  directory: { title: "12-Lead EKG for Beginners", summary: "Axis, lead placement, STEMI vs NSTEMI and the patterns that save lives." },
  hero: {
    eyebrow: "12-Lead EKG made easy",
    headline: "12-Lead EKG Class for Beginners",
    intro: "Ready to take your cardiac care skills to the next level? Whether you're a new medic or just need a solid refresher, our Fundamentals of 12-Lead EKG Interpretation class will give you the confidence and clarity you've been missing.",
    image: photos.cardEkg,
  },
  services: {
    eyebrow: "What you'll learn",
    heading: "Clarity starts here",
    intro: "A hands-on, easy-to-understand course that breaks down the basics of the 12-lead.",
    items: [
      { name: "Lead placement and axis", problem: "A misplaced lead or a missed axis shift changes the whole read.", solution: "Lead placement and axis determination, step by step." },
      { name: "STEMI vs NSTEMI", problem: "The decision that matters most is also the one people second-guess.", solution: "How to recognise STEMI versus NSTEMI, and recognise critical findings faster." },
      { name: "The “why” behind what you see", problem: "Memorised patterns fall apart on a real patient.", solution: "Learn the reasoning behind each finding, and decode rhythms with clarity." },
      { name: "Patterns that save lives", problem: "Some patterns need action in the field, not at the hospital.", solution: "Identifying the common patterns that can save lives in the field." },
    ],
  },
  trust: {
    eyebrow: "Who it's for",
    heading: "Don't just run the 12-lead. Interpret it with purpose.",
    points: [
      { label: "EMTs", detail: "Build the foundation before your first ALS partner asks." },
      { label: "New medics", detail: "Turn the strip into a decision." },
      { label: "Nurses", detail: "A clear, practical refresher." },
      { label: "Returning ALS providers", detail: "Brush up before you're back on the truck." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "Advanced 12-Lead ECG", href: `${hubPath}/advanced-12-lead-ekg`, description: "The next step: STEMI equivalents, mimics and case studies." },
      { label: "Free 12-lead class for EMTs", href: `${hubPath}/12-lead-for-emts`, description: "A short, no-exam crash course." },
      { label: "Contact", href: "/contact", description: "Ask about upcoming dates." },
    ],
  },
  cta: { heading: "Upcoming dates available — enroll now", body: "Your seat is waiting. Register online or call to ask about the next class." },
  sections: ["hero", "services", "trust", "related", "cta"],
};

export const ekgAdvanced: ServicePageContent = {
  slug: "advanced-12-lead-ekg",
  path: `${hubPath}/advanced-12-lead-ekg`,
  parent: hubPath,
  seo: {
    title: "Advanced 12-Lead ECG Interpretation Class | Medic Wisdom",
    description: "Advanced 12-lead ECG for paramedics, flight medics, critical care providers and nurses: STEMI equivalents, posterior MI, bundle branch blocks and more.",
    keyword: "advanced 12 lead ecg course",
    supporting: ["stemi equivalents class", "critical care ecg course"],
    image: shareImage,
  },
  schema: { name: "Advanced 12-Lead ECG Interpretation", serviceType: "Advanced 12-lead ECG interpretation course" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "Advanced 12-Lead ECG" }],
  directory: { title: "Advanced 12-Lead ECG", summary: "Beyond STEMI recognition, for seasoned paramedics, flight medics and nurses." },
  hero: {
    eyebrow: "Where ST hits the fan",
    headline: "Advanced 12-Lead ECG Interpretation",
    intro: "Already comfortable with the basics? This class goes way beyond STEMI recognition. If you're a seasoned paramedic, flight medic, critical care provider or nurse who wants to fine-tune your cardiac interpretation, this class is for you.",
    image: photos.cardAdvancedEkg,
  },
  services: {
    eyebrow: "What you'll learn",
    heading: "Push past the basics",
    intro: "It's time to stop guessing and start reading with precision and confidence.",
    items: [
      { name: "Subtle STEMI equivalents", problem: "Not every occlusion MI meets the textbook criteria.", solution: "Subtle STEMI equivalents and atypical presentations." },
      { name: "Posterior, high lateral and RV infarcts", problem: "Some infarcts hide from the standard 12 leads.", solution: "How to find posterior, high lateral and right ventricular infarcts." },
      { name: "Bundle branch blocks and their mimics", problem: "Blocks and mimics are where confident reads go wrong.", solution: "Bundle branch blocks, and the patterns that imitate them." },
      { name: "LVH, pericarditis, hyperkalemia and more", problem: "ST changes have more causes than ischemia.", solution: "Left ventricular hypertrophy, pericarditis, hyperkalemia and other look-alikes." },
      { name: "Real-world case studies", problem: "Interpretation has to hold up on a real strip.", solution: "Interactive ECG challenges and real-world case studies." },
    ],
  },
  trust: {
    eyebrow: "Who it's for",
    heading: "Critical care demands this level of understanding",
    points: [
      { label: "Seasoned paramedics", detail: "Sharpen what you already know." },
      { label: "Flight medics", detail: "Interpretation for critical care transport." },
      { label: "Critical care providers", detail: "Read like a cardiologist." },
      { label: "Nurses", detail: "Fine-tune your cardiac interpretation skills." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "12-Lead EKG for Beginners", href: `${hubPath}/12-lead-ekg-beginner`, description: "Start here if you're new to 12-leads." },
      { label: "Hamilton T1 Ventilator", href: `${hubPath}/hamilton-t1-ventilator`, description: "Critical care ventilator training." },
      { label: "ACLS", href: "/services/healthcare-providers/acls", description: "AHA Advanced Cardiovascular Life Support." },
    ],
  },
  cta: { heading: "Classes fill fast — secure your seat today", body: "Register online, or call to ask about group seats for your service." },
  sections: ["hero", "services", "trust", "related", "cta"],
};

export const ekgForEmts: ServicePageContent = {
  slug: "12-lead-for-emts",
  path: `${hubPath}/12-lead-for-emts`,
  parent: hubPath,
  seo: {
    title: "Free 12-Lead EKG Class for EMTs | Medic Wisdom",
    description: "A free 12-lead EKG crash course for EMTs: what a 12-lead shows, when to run one, and how to spot STEMI and ischemia. Virtual or in person. $0.",
    keyword: "free 12 lead class for emts",
    supporting: ["12 lead for emt", "free ems class"],
    image: shareImage,
  },
  schema: { name: "Free 12-Lead EKG Class for EMTs", serviceType: "12-lead EKG introduction for EMTs" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "Free 12-lead for EMTs" }],
  directory: { title: "Free 12-lead class for EMTs", summary: "Short, sweet, straight to the point — and 100% free." },
  hero: {
    eyebrow: "Short. Straight to the point. 100% free.",
    headline: "Free 12-Lead EKG Class for EMTs",
    intro: "Let's be honest — EMT school barely touched 12-leads (if at all), but the real world expects you to know what you're looking at. This free crash course bridges the gap between what you were taught and what's expected in the field.",
    image: photos.cardEmtEkg,
  },
  services: {
    eyebrow: "What you'll learn",
    heading: "No pressure. No exams. Just knowledge.",
    intro: "A quick, practical session that gets right to the good stuff — we're here to build your confidence, not overwhelm you.",
    items: [
      { name: "What a 12-lead actually shows", problem: "The printout means nothing if nobody explained it.", solution: "What a 12-lead EKG actually shows — without the fluff." },
      { name: "When and why to acquire one", problem: "Knowing when to run it is half the skill.", solution: "When and why you should acquire a 12-lead." },
      { name: "Spot the big stuff", problem: "Some findings change where the patient goes.", solution: "How to spot STEMI, ischemia, bundle branch blocks and more." },
      { name: "Advocate for your patient", problem: "EMTs see the patient first, but often feel unheard.", solution: "Real-world tips to impress your medic partners, advocate for your patients and boost your confidence in the back of the rig." },
    ],
  },
  trust: {
    eyebrow: "How to join",
    heading: "Cost? $0. Seriously.",
    points: [
      { label: "Virtual", detail: "Want to stay in your PJs? Drop your email and we'll set up a virtual class." },
      { label: "In person", detail: "Come to Medic Wisdom in person — in and out, fast and informed." },
      { label: "Completely free", detail: "No hidden fees. No sales pitch." },
      { label: "No exams", detail: "Just solid training, because you deserve it." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about the free class",
    items: [
      { q: "Is it really free?", a: "Yes. This class is completely free. No hidden fees. No sales pitch. Just solid training because you deserve it." },
      { q: "Can I take it online?", a: "Yes. Set up a virtual class — just drop your email and we'll handle the rest — or come to Medic Wisdom in person." },
      { q: "Is there a test?", a: "No. This isn't a test — it's a quick, practical session." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "12-Lead EKG for Beginners", href: `${hubPath}/12-lead-ekg-beginner`, description: "The full fundamentals class." },
      { label: "NREMT EMT Prep", href: `${hubPath}/nremt-emt-prep`, description: "Pass the NREMT with confidence." },
      { label: "Contact", href: "/contact", description: "Drop your email to set up a virtual class." },
    ],
  },
  cta: { heading: "Drop your email. Grab your spot. Learn something real.", body: "You'll walk away saying “Why didn't they teach me this in school?!” Did we mention it's free?" },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

const nremtDifferent = [
  { label: "Taught by medics who've aced it", detail: "Instructors who've been there." },
  { label: "Test strategies that work", detail: "Real talk on reading tricky questions and eliminating wrong answers." },
  { label: "Games, drills and mock questions", detail: "Engaging review games and rapid-fire drills." },
  { label: "A supportive vibe", detail: "Positive, confidence-building, no guesswork." },
];

export const nremtEmtPrep: ServicePageContent = {
  slug: "nremt-emt-prep",
  path: `${hubPath}/nremt-emt-prep`,
  parent: hubPath,
  seo: {
    title: "NREMT EMT Prep Class | Pass the NREMT | Medic Wisdom",
    description: "NREMT Basic written prep for EMT students: airway, medical, OB/GYN, trauma, cardiology and operations, plus test strategies. Individuals or programs.",
    keyword: "nremt emt prep class",
    supporting: ["nremt basic review", "emt exam prep"],
    image: shareImage,
  },
  schema: { name: "NREMT EMT Prep Class", serviceType: "NREMT EMT written exam preparation" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "NREMT EMT Prep" }],
  directory: { title: "NREMT EMT Prep", summary: "A fun, fast-paced NREMT Basic written review that's your launchpad." },
  hero: {
    eyebrow: "Ready to crush the NREMT?",
    headline: "NREMT EMT Prep Class",
    intro: "Future EMTs — it's go time. You've made it through class, clinicals and skills labs. Our upbeat, power-packed prep class brings everything you've learned from day 1 to graduation day into one clear, confidence-boosting session. This isn't just a review — it's your launchpad.",
    image: photos.emtAmbulance,
  },
  services: {
    eyebrow: "What you'll review",
    heading: "Everything that shows up on the test",
    items: [
      { name: "Airway, respiration & ventilation", problem: "Airway questions are everywhere on the exam.", solution: "A clear review of airway, respiration and ventilation." },
      { name: "Medical & OB/GYN emergencies", problem: "Medical and OB questions trip people up.", solution: "The medical and OB/GYN emergencies you need to know." },
      { name: "Trauma scenarios", problem: "Trauma questions test priorities, not trivia.", solution: "Trauma scenarios worked through step by step." },
      { name: "Cardiology & resuscitation", problem: "Cardiology is where nerves show.", solution: "Cardiology and resuscitation, tied together." },
      { name: "Operations & EMS safety", problem: "Operations questions are easy points to lose.", solution: "Operations and EMS safety — and all those little things that always show up on the test." },
    ],
  },
  trust: { eyebrow: "What makes this class different", heading: "Walk in as a student — leave ready", points: nremtDifferent },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about NREMT EMT prep",
    items: [
      { q: "Is this for individual students or whole programs?", a: "Both — it's perfect for individual students or entire EMT programs." },
      { q: "Where is it held?", a: "At Medic Wisdom, or we'll come to your class or cohort." },
      { q: "I'm testing next week. Is it too late?", a: "Whether you're testing next week or still feeling shaky, this class will help you wrap it all together and walk into the test center ready." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "NREMT Paramedic Prep", href: `${hubPath}/nremt-paramedic-prep`, description: "The 2-day paramedic written review." },
      { label: "Free 12-lead class for EMTs", href: `${hubPath}/12-lead-for-emts`, description: "What EMT school skipped." },
      { label: "Contact", href: "/contact", description: "Book a cohort class." },
    ],
  },
  cta: { heading: "Let's finish this journey strong", body: "Spots are limited — don't miss out. Medic Wisdom: training the lifesavers of tomorrow." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const nremtParamedicPrep: ServicePageContent = {
  slug: "nremt-paramedic-prep",
  path: `${hubPath}/nremt-paramedic-prep`,
  parent: hubPath,
  seo: {
    title: "NREMT Paramedic Review Class, 2-Day | Medic Wisdom",
    description: "2-day intensive NREMT Paramedic exam prep, $250: the full paramedic curriculum on the NREMT test plan, a custom workbook, mock exam and 500+ questions.",
    keyword: "nremt paramedic review class",
    supporting: ["paramedic exam prep", "nremt paramedic prep course"],
    image: shareImage,
  },
  schema: { name: "NREMT Paramedic Review Class", serviceType: "NREMT Paramedic written exam preparation" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "NREMT Paramedic Prep" }],
  directory: { title: "NREMT Paramedic Prep", summary: "A 2-day intensive review of the whole paramedic curriculum. $250." },
  hero: {
    eyebrow: "2-day intensive · $250",
    headline: "NREMT Paramedic Review Class",
    intro: "Ready to pass the NREMT Paramedic written exam the first time? This 2-day review helps paramedic students and recent graduates master every topic on the test, sharpen test-taking strategy and walk in confident. It follows the NREMT Paramedic Test Plan and the DOT National EMS Education Standards.",
    image: photos.paramedicAmbulance,
  },
  services: {
    eyebrow: "What this class covers",
    heading: "The entire paramedic curriculum, focused",
    items: [
      { name: "Airway, ventilation & respiratory", problem: "Airway is the foundation of every scenario question.", solution: "Airway, ventilation and respiratory emergencies." },
      { name: "Cardiology & 12-lead EKG", problem: "Cardiology is the heaviest lift for most candidates.", solution: "Cardiology and 12-lead EKG interpretation." },
      { name: "Medical emergencies", problem: "Neuro, endocrine, GI, tox and psych all appear.", solution: "A structured pass through every medical system." },
      { name: "Trauma & shock", problem: "Trauma questions test assessment order.", solution: "Trauma assessment and shock management." },
      { name: "Special populations", problem: "Pediatric, obstetric and geriatric patients change the answer.", solution: "Pediatric, obstetric and geriatric emergencies." },
      { name: "Pharmacology & calculations", problem: "Drug math under pressure costs points.", solution: "Pharmacology and medication calculations." },
      { name: "Operations & special situations", problem: "The easy-to-forget section.", solution: "EMS operations and special situations." },
      { name: "Critical thinking & test strategy", problem: "Scenario questions reward method, not memory.", solution: "How to approach difficult, scenario-based questions with confidence." },
    ],
  },
  trust: {
    eyebrow: "Why choose us",
    heading: "What you get",
    points: [
      { label: "Custom workbook & mock exam", detail: "Aligned with NREMT guidelines." },
      { label: "500+ practice questions", detail: "Plus access to an online quiz bank." },
      { label: "Feedback on weak areas", detail: "Personalized, from experienced EMS instructors." },
      { label: "Proven test strategies", detail: "Real talk on reading tricky questions." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about paramedic prep",
    items: [
      { q: "Who should attend?", a: "Current paramedic students approaching graduation, paramedics who want a structured final review before testing, candidates who've failed the NREMT and need a guided reset, and anyone who wants to boost test-taking skills and reduce anxiety." },
      { q: "How long is it, and what does it cost?", a: "It's a 2-day intensive, and the price is $250." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "NREMT EMT Prep", href: `${hubPath}/nremt-emt-prep`, description: "The EMT-level written review." },
      { label: "Advanced 12-Lead ECG", href: `${hubPath}/advanced-12-lead-ekg`, description: "Go deeper on cardiology." },
      { label: "Contact", href: "/contact", description: "Ask about the next class dates." },
    ],
  },
  cta: { heading: "Ready to pass the NREMT Paramedic exam?", body: "Space is limited — spots fill quickly. Give yourself the best shot at success with a focused, high-yield review." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};

export const hamiltonT1: ServicePageContent = {
  slug: "hamilton-t1-ventilator",
  path: `${hubPath}/hamilton-t1-ventilator`,
  parent: hubPath,
  seo: {
    title: "Hamilton T1 Ventilator Training Class | Medic Wisdom",
    description: "Hands-on Hamilton T1 ventilator training for critical care paramedics, flight medics and RTs: modes, waveforms, alarms, synchrony. 6 hours, $150.",
    keyword: "hamilton t1 ventilator training",
    supporting: ["transport ventilator course", "flight medic ventilator class"],
    image: shareImage,
  },
  schema: { name: "Hamilton T1 Ventilator Training", serviceType: "Transport ventilator training" },
  breadcrumbs: [{ label: "Home", href: "/" }, hubCrumb, { label: "Hamilton T1 Ventilator" }],
  directory: { title: "Hamilton T1 Ventilator", summary: "A 6-hour hands-on deep dive on real units. $150 per provider." },
  hero: {
    eyebrow: "Be confident. Be competent. Be critical care ready.",
    headline: "Hamilton T1 Ventilator Training",
    intro: "Ready to go beyond surface-level settings and truly master the Hamilton T1? This in-depth, hands-on course is designed for paramedics, flight medics and critical care providers who want real-world confidence on one of the most advanced transport ventilators on the market.",
    image: photos.hamiltonT1,
  },
  services: {
    eyebrow: "What you'll learn",
    heading: "A deep dive, on real units",
    items: [
      { name: "Hamilton T1 overview", problem: "An unfamiliar interface slows you down in the back of the aircraft or truck.", solution: "Understanding the modes, features and interface." },
      { name: "Advanced ventilator settings", problem: "Defaults don't fit every patient.", solution: "A deep dive into ASV, CMV, PCV, SIMV, NIV, NIV-ST and more." },
      { name: "Waveform interpretation", problem: "Waveforms tell you what's wrong before the patient does.", solution: "Identify, troubleshoot and adjust in real time." },
      { name: "Alarm management", problem: "An alarm is only useful if you know what to do about it.", solution: "What each alarm means and what you should do." },
      { name: "Ventilator-patient synchrony", problem: "A patient fighting the vent is a patient at risk.", solution: "How to recognise and optimise synchrony." },
      { name: "Transport readiness & case simulations", problem: "Skills have to hold up in prehospital and interfacility transport.", solution: "Best practices for the T1 in transport, then real-life scenarios and case simulations." },
    ],
  },
  trust: {
    eyebrow: "Location, format & tuition",
    heading: "Offered monthly",
    points: [
      { label: "$150 per provider", detail: "Group and agency discounts available." },
      { label: "6-hour session", detail: "Starts at 12:00 PM." },
      { label: "In person or online", detail: "Join us at the Medic Wisdom Training Center, or attend via Zoom." },
      { label: "100% hands-on", detail: "Real Hamilton T1 units, small classes, and a certificate of completion." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about the Hamilton T1 class",
    items: [
      { q: "Who is this class for?", a: "Critical care paramedics, flight medics and transport teams, respiratory therapists in mobile environments, advanced EMTs moving into critical care, and providers preparing for the FP-C or CCP-C exams." },
      { q: "How much does it cost?", a: "Only $150 per provider. Group and agency discounts are available." },
      { q: "When is it offered?", a: "Monthly, as a 6-hour session starting at 12:00 PM, in person or via Zoom." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "Advanced 12-Lead ECG", href: `${hubPath}/advanced-12-lead-ekg`, description: "Critical care cardiac interpretation." },
      { label: "About Tim", href: "/about", description: "Flight paramedic and critical care educator." },
      { label: "Contact", href: "/contact", description: "Group and agency discounts." },
    ],
  },
  cta: { heading: "Get certified. Get confident. Get ready to save lives.", body: "Classes fill fast. Register online, or call (636) 336-6565." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};
