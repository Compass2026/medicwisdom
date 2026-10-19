/**
 * MEDIC WISDOM — client identity record.
 *
 * Every value traces to the client's own published site
 * (medicwisdom.wpenginepowered.com, read Oct 19 2026) unless a comment says
 * otherwise. Conflicts in that source are listed in docs/medicwisdom/decisions.md and
 * docs/medicwisdom/open-questions.md; nothing here resolves one by guessing.
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/** Online class registration (Enrollware). Every "Register" button on the old site points here. */
export const registrationUrl = "https://medicwisdom.enrollware.com/schedule";

export const site = {
  name: "Medic Wisdom",
  legalName: "Medic Wisdom",
  fictional: false,
  logo: {
    src: "/medicwisdom/medicwisdom-logo-light.png",
    alt: "Medic Wisdom",
    width: 864,
    height: 249,
    wordmark: ["Medic", "Wisdom"] as [string, string],
  },
  metadata: {
    defaultTitle: "CPR and First Aid Training in Missouri | Medic Wisdom",
    titleTemplate: "%s | Medic Wisdom",
    description:
      "CPR/AED, First Aid, BLS, ACLS and EMS education taught by a career paramedic. Classes for individuals, workplaces, schools and first responders across Missouri.",
  },
  header: { utilityLabel: "CPR · BLS · ACLS · EMS education" },
  footer: {
    blurb:
      "Real training, real skills, real confidence. CPR, First Aid and EMS education from a career paramedic with over 20 years on the street, in the air and in the classroom.",
    exploreHeading: "Explore",
    areasHeading: "Where we train",
    areasText: "At our O'Fallon training facility, on-site anywhere in Missouri, and online for selected classes.",
    contactHeading: "Contact",
  },
  notFound: {
    eyebrow: "404",
    heading: "This page flatlined",
    body: "The page you're looking for doesn't exist. Head back to the homepage or browse the classes.",
    cta: { label: "Back to the homepage", href: "/" },
  },
  tagline: "Real training, real skills, real confidence",
  foundedBy: "Tim Bobbitt",
  yearsExperience: "20+",
  /** As printed on Tim's own 12-lead course cards ("Tim Bobbitt NRP, FPC"). */
  founderCredential: "NRP, FPC",

  /** The number the old site displays in the header and on most pages. A second number appears in some links (docs/medicwisdom/open-questions.md). */
  phone: "(636) 336-6565",
  phoneHref: "tel:+16363366565",
  /** Published address — but the medicwisdom.com domain has lapsed (docs/medicwisdom/open-questions.md, launch blocker). */
  email: "info@medicwisdom.com",
  /**
   * The old site's contact block: "Office — 506 Barbara Pl, O'Fallon, MO".
   * No ZIP is published with it (the AED page names 63366 beside
   * "Wentzville"), so the ZIP stays null rather than picking one.
   */
  address: {
    street: "506 Barbara Pl" as string | null,
    city: "O'Fallon",
    state: "MO",
    zip: null as string | null,
    country: "US",
  },
  geo: null as { lat: number; lng: number } | null,

  serviceArea: "St. Louis and across Missouri",
  serviceAreaLong: "O'Fallon, St. Charles County, the St. Louis area and anywhere in Missouri for on-site training",
  /** Rendered as areaServed AdministrativeArea: the old site says "across Missouri". */
  counties: ["Missouri"],
  /** The office town, and "across St. Louis" (old homepage testimonials intro). */
  confirmedCities: ["O'Fallon", "St. Louis"] as string[],

  productionUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicwisdom.com",
  /** The old footer lists "Careers" as plain text with no page behind it. */
  careers: null as { url: string; wordpressUrl: string } | null,

  schemaType: "EducationalOrganization",
  businessDescription:
    "Medic Wisdom provides hands-on CPR/AED, First Aid, BLS, ACLS and EMS education, plus AED rentals, for individuals, workplaces, schools, venues and first responders across Missouri.",
  serviceCatalogName: "Training courses and AED rentals",
  serviceCatalog: [
    "CPR, AED & First Aid training",
    "Heartsaver CPR AED & First Aid",
    "BLS Provider",
    "Advanced Cardiac Life Support (ACLS)",
    "Event and venue staff medical training",
    "EMS training for law enforcement",
    "12-lead EKG courses",
    "NREMT exam prep",
    "Hamilton T1 ventilator training",
    "AED rentals",
  ],
  /** Browser-tab icon: the star-of-life mark from the logo. */
  icon: "/medicwisdom/icon-512.png",
  shareImage: "/medicwisdom/share-1200x630.png",
  logoUrl: "/medicwisdom/medicwisdom-logo.png",

  primaryCta: { label: "Register now", href: registrationUrl },
  secondaryCta: { label: "Call (636) 336-6565", href: "tel:+16363366565" },

  nav: [
    { label: "Courses", href: "/services" },
    { label: "AED Rentals", href: "/services/aed-rentals" },
    { label: "About", href: "/about" },
    { label: "Where we train", href: "/service-area" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  footerLinks: [
    { label: "All courses", href: "/services" },
    { label: "CPR, AED & First Aid", href: "/services/cpr-first-aid" },
    { label: "BLS & ACLS", href: "/services/healthcare-providers" },
    { label: "EMS education", href: "/services/ems-education" },
    { label: "AED rentals", href: "/services/aed-rentals" },
    { label: "About Tim", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  /** No privacy policy or terms exist yet; the old footer named them without pages. */
  legalLinks: [] as NavItem[],

  sameAs: [
    "https://www.facebook.com/profile.php?id=61577110402804",
    "https://www.instagram.com/medic_wisdom/",
    "https://www.tiktok.com/@medicwisdom",
  ] as string[],
  /** A training provider, not an emergency service. */
  offersEmergencyService: false,
} as const;

export type Site = typeof site;
