/**
 * Preview banner copy and reviewer notes — shown on previews only (never in
 * production). Each note is a fact that needs the owner before launch;
 * docs/medicwisdom/open-questions.md has the full list.
 */
export const previewNotice = {
  title: "Preview — not yet live, not indexed",
  intro: "This is the rebuilt Medic Wisdom site for review. Content comes from the current WordPress site; the notes below need Tim's confirmation before launch.",
};
export const reviewerNotes: { where: string; note: string }[] = [
  { where: "Everywhere", note: "medicwisdom.com is held by a domain reseller (re-registered Aug 20 2026) and has no mail records, so info@medicwisdom.com cannot receive mail today. Confirm the domain and email before launch." },
  { where: "Header, footer, contact", note: "The old site shows (636) 336-6565 but some of its links dial (314) 288-7109. This build uses (636) 336-6565 everywhere — confirm." },
  { where: "Footer, contact, schema", note: "Office address 506 Barbara Pl, O'Fallon, MO is published without a ZIP; the AED page says Wentzville, 63366. Confirm the address and whether it should be public." },
  { where: "Home and About", note: "Testimonials are reproduced exactly as published on the old site. Confirm each quote and name may be used." },
  { where: "Home", note: "The old \"100% success rate\" and \"250+ lives saved\" counters are not shown. Provide a source to restore them." },
  { where: "Footer", note: "No privacy policy or terms exist yet. The contact form collects personal details, so a privacy policy should be in place before launch." },
];
