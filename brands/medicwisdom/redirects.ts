/**
 * LAUNCH REDIRECTS — every WordPress page with real content, mapped to the
 * built page that now carries it. Client data, read by `next.config.ts`.
 *
 * Trailing slashes are not listed: `trailingSlash: false` makes Next strip
 * them (308) before these rules run.
 *
 * Deliberately NOT redirected (they 404): the theme placeholders that never
 * held content — /pals-training (lorem ipsum; no PALS course page exists to
 * send it to), /sample-page, /hello-world, /blog and /category/uncategorized.
 * docs/medicwisdom/decisions.md MW-005.
 */
import type { Redirect } from "@/config/redirects";

const to = (source: string, destination: string): Redirect => ({ source, destination, permanent: true });

export const redirects: Redirect[] = [
  // CPR, AED & First Aid
  to("/cpr-aed-training", "/services/cpr-first-aid/cpr-aed-first-aid"),
  to("/bls-heartsaver", "/services/cpr-first-aid/heartsaver"),
  to("/event-medical-training", "/services/cpr-first-aid/event-venue-staff"),
  to("/ems-for-leo", "/services/cpr-first-aid/law-enforcement"),

  // Healthcare providers
  to("/bls-provider", "/services/healthcare-providers/bls-provider"),
  to("/acls-training", "/services/healthcare-providers/acls"),
  to("/certifications", "/services/healthcare-providers"),
  // A lorem-ipsum page, but the name maps cleanly to the BLS Provider course.
  to("/bls-training", "/services/healthcare-providers/bls-provider"),

  // EMS education
  to("/12-lead-ekg-beginner", "/services/ems-education/12-lead-ekg-beginner"),
  to("/advanced-12-lead-ekg", "/services/ems-education/advanced-12-lead-ekg"),
  to("/12-lead-emt", "/services/ems-education/12-lead-for-emts"),
  to("/nremt-basic-prep-class", "/services/ems-education/nremt-emt-prep"),
  to("/nremt-paramedic-prep-class", "/services/ems-education/nremt-paramedic-prep"),
  to("/hamilton-t1-ventilator", "/services/ems-education/hamilton-t1-ventilator"),
  // The old homepage's "Learn More" buttons pointed at these two (both 404 there).
  to("/nremt-basic", "/services/ems-education/nremt-emt-prep"),
  to("/nremt-paramedic", "/services/ems-education/nremt-paramedic-prep"),
  to("/ems-education", "/services/ems-education"),

  // AED rentals
  to("/aed-rentals", "/services/aed-rentals"),

  // Consolidated
  to("/courses", "/services"),
  to("/faqs", "/services"),
];

export const gone: string[] = [];
