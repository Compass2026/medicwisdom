import type { TrustPoint, ProcessStep } from "@/content/services/types";

/**
 * Trust points — each from the client's own site (docs/medicwisdom/decisions.md MW-003).
 * The old homepage's "100% success rate" and "250+ lives saved" counters are
 * withheld until the owner gives a source for them.
 */
export const trustPoints: TrustPoint[] = [
  { label: "20+ years in EMS", detail: "Taught by Tim Bobbitt, a career paramedic, flight paramedic and firefighter/paramedic." },
  { label: "1,500+ students trained", detail: "First responders, healthcare providers, businesses and everyday people." },
  { label: "AHA, Red Cross & HSI", detail: "AHA Aligned Training Site, American Red Cross Authorized Training Provider, HSI Approved Training Center." },
  { label: "Training that comes to you", detail: "On-site classes for workplaces, schools, churches, venues and departments." },
];

/** The four steps from the old Contact page ("Step 1 … Step 4"). */
export const processSteps: ProcessStep[] = [
  { step: "01", title: "Reach out", body: "Have questions or need group rates? Call, email or send a message to speak with an instructor or get a custom quote." },
  { step: "02", title: "Choose your class", body: "Pick the course that fits your needs — CPR, First Aid, BLS, ACLS, EMS education and more. Flexible scheduling options are available." },
  { step: "03", title: "Book and confirm", body: "Reserve your seat online or over the phone. You'll get a confirmation email with all the details you need." },
  { step: "04", title: "Get certified with confidence", body: "Attend your class, learn life-saving skills, and walk away with an official certification backed by top-tier instructors." },
];
