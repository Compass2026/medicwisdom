import type { ServicePageContent } from "@/content/services/types";
import { photos, shareImage } from "../photos";

/**
 * AED RENTALS — a hub with no child pages. Plans, prices, inclusions and
 * claims are the old /aed-rentals page's own. Its "Where We Serve" list was
 * empty on the old page, so nothing more specific than "Missouri &
 * nationwide shipping" is said here.
 */
export const aedRentals: ServicePageContent = {
  slug: "aed-rentals",
  path: "/services/aed-rentals",
  seo: {
    title: "AED Rentals for Events & Workplaces | Medic Wisdom",
    description: "Affordable AED rentals with free CPR/AED training: event rentals from $99, monthly from $125, annual from $85/month. Missouri and nationwide shipping.",
    keyword: "aed rental",
    supporting: ["aed rental for events", "rent an aed missouri"],
    image: shareImage,
  },
  schema: { name: "AED Rentals", serviceType: "AED rental" },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "AED Rentals" }],
  directory: { title: "AED Rentals", summary: "Event, monthly, long-term and annual AED rentals, with training included." },
  hero: {
    eyebrow: "Affordable · Reliable · Life-saving",
    headline: "AED Rentals for Events, Schools and Workplaces",
    intro: "Whether you need an AED for your workplace, school, church, gym or a large-scale event, we make it simple and stress-free. Every AED rental includes CPR/AED training for your staff, so your team is prepared to act when every second counts. Serving Missouri, with fast nationwide shipping.",
    image: photos.aedCabinet,
  },
  services: {
    eyebrow: "Rental plans",
    heading: "Pick the coverage you need",
    intro: "Whether you need an AED for a single-day event or a full year of coverage. No complicated contracts. No surprise fees.",
    items: [
      { name: "Event rental — from $99", problem: "A race, festival, concert or tournament for 1 to 7 days.", solution: "A ready-to-use AED kit shipped to you, with event coverage and on-site setup available as an option." },
      { name: "Monthly rental — from $125", problem: "A season, a project or a short-term site for 1 to 3 months.", solution: "Short-term coverage with no large upfront cost." },
      { name: "Long-term rental — from $99/month", problem: "A school year, a construction phase or a camp season of 6 to 12 months.", solution: "An affordable monthly plan instead of buying a unit outright." },
      { name: "Annual subscription — from $85/month", problem: "An office, gym, church or plant that needs an AED all year.", solution: "A full year of coverage at the lowest monthly rate." },
    ],
  },
  trust: {
    eyebrow: "What's included in every rental",
    heading: "Fully equipped and ready to save lives",
    points: [
      { label: "FDA-approved AED", detail: "A ZOLL, LIFEPAK or Philips unit, with adult pads, a backup set and a fully charged battery." },
      { label: "Signage & rescue kit", detail: "Wall sign, instruction placard, and a CPR/AED rescue kit (gloves, scissors, razor and more). Pediatric pads on request." },
      { label: "Free shipping both ways", detail: "Ships fast and ready to use, nationwide, with 24/7 customer support." },
      { label: "Training included", detail: "Free CPR/AED training videos and quick-guides; AHA BLS or Heartsaver classes for your team at a discount." },
    ],
  },
  faqs: {
    eyebrow: "Questions",
    heading: "Questions about AED rentals",
    items: [
      { q: "Who rents AEDs from Medic Wisdom?", a: "Event venues (concerts, sports, festivals, races), schools, daycares and universities, construction sites and manufacturing plants, churches, camps and community centers, small businesses and corporate offices, film and television sets, and youth sports teams and athletic clubs." },
      { q: "Why rent instead of buy?", a: "Renting is a cost-effective, hassle-free way to be ready for sudden cardiac arrest: affordable monthly plans with no large upfront cost, short- and long-term options, and free training and certification available." },
      { q: "Does renting help with compliance?", a: "Many states require AED access at public gatherings, schools and businesses. Renting an AED helps you meet OSHA and state regulations, be prepared for sudden cardiac arrest, reduce liability by being medically ready, and empower bystanders to act confidently." },
      { q: "Do you offer discounts for nonprofits and schools?", a: "Yes — ask about our discounted community pricing." },
      { q: "Can you staff our event as well?", a: "Ask about our event standby medic services and AED-trained personnel for on-site delivery or coverage." },
    ],
  },
  related: {
    heading: "Related",
    links: [
      { label: "Event & venue staff training", href: "/services/cpr-first-aid/event-venue-staff", description: "BLS CPR/AED certification for your event team." },
      { label: "CPR, AED & First Aid", href: "/services/cpr-first-aid", description: "Classes for your staff or volunteers." },
      { label: "Request a quote", href: "/contact", description: "Call or text (636) 336-6565, or send a message." },
    ],
  },
  cta: { heading: "Ready to rent? Get a free quote", body: "Don't wait until it's too late. Protect your staff, your visitors and your peace of mind. Call or text (636) 336-6565, or request a quote online." },
  sections: ["hero", "services", "trust", "faqs", "related", "cta"],
};
