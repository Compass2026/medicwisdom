# Medic Wisdom — build decisions

The rebuild of Medic Wisdom's WordPress site (`medicwisdom.wpenginepowered.com`,
read Oct 19 2026) on the Compass Website Foundation. Tom's brief: keep the
same information and colours, take creative liberty on everything else, and
follow the documented standard.

## MW-001 — Standard and shape

- **Standard:** Compass Website Foundation v1, `Compass2026/showmeelectricalwebsite`
  @ `f928381b3a81e20694571cefc5091392b2c84e86` (the current
  `foundation_releases` row). This repository holds the whole tree, per the
  standard. `brands/medicwisdom/` was copied from `brands/harbor-lane/` and
  every demo value replaced. It is registered in `brands/registry.ts` with
  `fictional: false`.
- **Work mode:** a new build. Build it with `COMPASS_BRAND=medicwisdom`.
- **Framework changes, both additive.** Each should go upstream to the
  Foundation:
  1. `components/decor/EcgBackground.tsx` plus an `ecg` entry in
     `components/decor/index.tsx` (hero backdrop and story rail). The
     starter checklist allows this: "add a treatment under components/decor
     only if the client needs a motif".
  2. A per-brand favicon. `app/icon.svg` gave every brand Show Me
     Electrical's lightning bolt. It moved to `public/brand/icon-showme.svg`,
     each brand's `site.config.ts` gained `icon`, and `app/layout.tsx` emits
     `icons: { icon: site.icon }`. The showme and harbor-lane builds keep the
     same icon.

## MW-002 — Colours and type

The colours are the old site's Elementor kit (`--e-global-color-*`), mapped
to the Foundation's semantic roles in `brands/medicwisdom/theme.css`:

| Role | Value | Source |
| --- | --- | --- |
| primary-950 (hero, utility bar) | `#140F2D` | kit "secondary" (navy) |
| primary-900 (nav, headings, footer) | `#0301C7` | kit "primary" (royal blue), the old site's dominant colour |
| accent-500 (buttons, highlights) | `#3FEA2B` | kit "accent", the logo's green snake |
| surface | `#F1F1F1` | the old site's section grey |
| ECG pulse (decoration only) | `#FF0000` | kit fourth colour; white on it is 4.0:1, so it never carries text |

The 950–600 and 300–700 steps are derived from those values. Contrast:
white on royal blue 11.5:1, navy on green 11.5:1, `accent-700 #17700E` on
white 6.3:1 and on surface 5.5:1.

**Type:** Poppins for headings (it is in the old site's stylesheet) and
Public Sans for body text. Archivo was tried first and failed the
Foundation's 24 px touch-target check: its short metrics made inline heading
links about 22 px tall.

**Logo:** the client's `Medic-Wisdom-namelogoonly-.png` on a transparent
background, in two versions. In `medicwisdom-logo-light.png` (header and
footer) the black wordmark is turned white. In `medicwisdom-logo.png`
(structured data) the wordmark is navy. The star-of-life mark is untouched.

## MW-003 — What the copy claims

Every course page uses its own old-page text: prices, durations,
formats, inclusions, AHA / OSHA statements. Kept as published:

- 20+ years of experience, and 1,500+ students trained (homepage counter).
- AHA Aligned Training Site, American Red Cross Authorized Training Provider
  and HSI Approved Training Center (the homepage badges). These are rendered
  as text, not as the organisations' logos.
- Prices: free 12-lead class for EMTs, NREMT Paramedic $250, Hamilton T1
  $150, AED rentals from $99 / $125 / $99 a month / $85 a month.
- Testimonials, attributed exactly as published (the stray "CEO" heading on
  Kelly P.'s card was a template leftover and is dropped).

**Withheld until the owner gives a source:** the homepage counters "100%
success rate" and "250+ lives saved". The Foundation does not publish
outcome or pass-rate statistics without a client-owned source behind them.

## MW-004 — Images

Each image's alt text says what is in the frame. Provenance is recorded in
`brands/medicwisdom/content/photos.ts`:

- **Own:** Tim's portrait (an iPhone photo, cropped 4:3 and 4:5) and his
  three 12-lead course cards.
- **Branded illustrations:** the EMT ambulance, paramedic ambulance, police
  car and event-training graphic, each with the Medic Wisdom star. The event
  graphic was AI-generated (its file name), so its "usher" is never
  described as a real person.
- **Stock:** the four classroom and CPR photos (Envato Elements file names).
  They are never captioned as Medic Wisdom's classes, and are the first
  things to replace with Tim's own class photos.
- **Product:** the Hamilton T1 photo, as on the old site.
- Not reused: the PALS / BLS / courses / EMS-education template pages'
  Pexels photo, and the accreditation badge images (MW-003).

## MW-005 — URLs

`brands/medicwisdom/redirects.ts` maps every old page with content to the
page that now carries it (308s, verified locally, at most 2 hops including the
trailing-slash strip). `/faqs` and `/courses` go to `/services`, which holds
the old FAQ.

These are left as 404s: `/pals-training` (lorem ipsum, and no PALS course
page exists to send it to), `/sample-page`, `/hello-world`, `/blog` and
`/category/uncategorized`. All are WordPress or theme leftovers that never
had content.

## MW-006 — Information architecture

- Courses live under the Foundation's fixed `/services` routes; the
  navigation calls them "Courses". There are four hubs: **CPR, AED & First
  Aid** (beginners, Heartsaver, event & venue staff, law enforcement), **BLS
  & ACLS**, **EMS education** (three 12-lead classes, NREMT EMT and
  Paramedic prep, Hamilton T1) and **AED Rentals**. That makes 16 course
  pages in all.
- `/service-area` is **Where we train**: the O'Fallon facility, on-site
  anywhere in Missouri, and online. There are no city pages, because no
  served city has local material to stand on (the city gate). There are no
  `/locations` pages either: the old site publishes no hours or access
  details.
- Not built: blog (the old one held only "Hello world!"), careers (the old
  footer named it with no page behind it), and privacy policy and terms (no
  client text exists; see open questions).
- The primary call to action, **Register now**, goes to the client's
  existing Enrollware schedule (`medicwisdom.enrollware.com/schedule`), as on
  the old site.

## MW-007 — Corrections to the old copy

- Several homepage cards carried another course's text: "BLS/CPR
  Heartsaver" had the NREMT Paramedic text, "BLS/CPR Provider" the NREMT
  Basic text, and "Hamilton T1" the AED Rentals text. Each card and hub now
  summarises its own course's page.
- "Advanced Cardiac Life Support ALCS" became **ACLS**.
- The homepage's "Learn More" links to `/nremt-basic/` and
  `/nremt-paramedic/` were broken (404). They now redirect.
- Emoji used as headings were dropped. The wording around them is kept.

## MW-008 — Contact details

- Phone **(636) 336-6565**, the number the old site displays in its
  header, footer and most pages. Some of its links dial (314) 288-7109
  instead (open questions).
- Email `info@medicwisdom.com`, as published. See the domain blocker in
  open questions.
- Office **506 Barbara Pl, O'Fallon, MO**, published without a ZIP. The ZIP
  is left empty rather than guessed.
- Social profiles (Facebook, Instagram, TikTok) are in `sameAs`, with the
  tracking parameters removed.
