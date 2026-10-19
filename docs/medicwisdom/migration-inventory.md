# Medic Wisdom — migration inventory

The old site is WordPress + Elementor on WP Engine
(`medicwisdom.wpenginepowered.com`, `robots.txt: Disallow: /`), read
Oct 19 2026 from its Rank Math sitemaps.

| Old URL | Old content | New URL | How |
| --- | --- | --- | --- |
| `/` | Home | `/` | same path |
| `/about/` | Tim's story | `/about` | trailing slash stripped |
| `/contact/` | Contact form, 4 booking steps | `/contact` | trailing slash stripped |
| `/faqs/` | 5 FAQs | `/services` (FAQ section) | 308 |
| `/cpr-aed-training/` | CPR & First Aid for beginners | `/services/cpr-first-aid/cpr-aed-first-aid` | 308 |
| `/bls-heartsaver/` | AHA Heartsaver | `/services/cpr-first-aid/heartsaver` | 308 |
| `/event-medical-training/` | Venue staff BLS CPR/AED | `/services/cpr-first-aid/event-venue-staff` | 308 |
| `/ems-for-leo/` | EMS for law enforcement | `/services/cpr-first-aid/law-enforcement` | 308 |
| `/bls-provider/` | AHA BLS Provider | `/services/healthcare-providers/bls-provider` | 308 |
| `/acls-training/` | AHA ACLS | `/services/healthcare-providers/acls` | 308 |
| `/certifications/` | empty (menu parent) | `/services/healthcare-providers` | 308 |
| `/12-lead-ekg-beginner/` | 12-lead fundamentals | `/services/ems-education/12-lead-ekg-beginner` | 308 |
| `/advanced-12-lead-ekg/` | Advanced 12-lead | `/services/ems-education/advanced-12-lead-ekg` | 308 |
| `/12-lead-emt/` | Free 12-lead for EMTs | `/services/ems-education/12-lead-for-emts` | 308 |
| `/nremt-basic-prep-class/` | NREMT EMT prep | `/services/ems-education/nremt-emt-prep` | 308 |
| `/nremt-paramedic-prep-class/` | NREMT Paramedic prep ($250) | `/services/ems-education/nremt-paramedic-prep` | 308 |
| `/nremt-basic/`, `/nremt-paramedic/` | broken homepage links (404 on the old site) | the two NREMT pages | 308 |
| `/hamilton-t1-ventilator/` | Hamilton T1 ($150) | `/services/ems-education/hamilton-t1-ventilator` | 308 |
| `/aed-rentals/` | AED rentals and pricing | `/services/aed-rentals` | 308 |
| `/courses/`, `/ems-education/`, `/bls-training/` | theme lorem ipsum | `/services`, `/services/ems-education`, `/services/healthcare-providers/bls-provider` | 308 (the names map cleanly) |
| `/pals-training/` | theme lorem ipsum | — | 404 (no PALS page; open questions #9) |
| `/sample-page/`, `/hello-world/`, `/blog/`, `/category/uncategorized/` | WordPress defaults | — | 404 |

New pages with no old equivalent: the hubs `/services`,
`/services/cpr-first-aid`, `/services/healthcare-providers` and
`/services/ems-education`, and `/service-area` (Where we train).

External links kept: the Enrollware schedule
(`https://medicwisdom.enrollware.com/schedule`) for every **Register now**,
and the Facebook, Instagram and TikTok profiles (in structured data).

Images: see decisions MW-004. Old upload URLs are not redirected, because
they live on the WP Engine host, which is not the production domain.
