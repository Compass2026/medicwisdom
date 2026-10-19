# Medic Wisdom — open questions for the owner

Each of these needs Tim (or Tom with Tim) before launch. The preview banner
carries the most important ones as reviewer notes.

## Launch blockers

1. **The domain `medicwisdom.com` is no longer Medic Wisdom's.** Public
   registration data (RDAP, Oct 19 2026) shows it re-registered on
   **2026-08-20 through SnapNames**, a domain aftermarket registrar, with
   nameservers at `ns.buydomains.com` and no MX records. The old site only
   ever ran on `medicwisdom.wpenginepowered.com`, and its "Book online"
   link points at `www.medicwisdom.com`. Either recover or buy back the
   domain, or choose a new one. Then set `NEXT_PUBLIC_SITE_URL` (canonicals,
   sitemap and structured data all read it).
2. **Email.** With no mail records on the domain, `info@medicwisdom.com`
   cannot receive mail today, and it is printed on every page. Confirm the
   address students should use. The contact form's recipient is set with
   `INQUIRY_RECIPIENT`, and its sender (`INQUIRY_FROM`) must be on a domain
   verified in Resend.
3. **Privacy policy.** The contact form collects names, emails and phone
   numbers, and the old footer promised a "Privacy Policy" and "Terms &
   Condition" that never existed. The client supplies, or approves, the
   text. The Foundation does not write legal text for a client.

## Facts to confirm

4. **Phone.** (636) 336-6565 is used everywhere. The old Contact page and
   the homepage contact block also show or dial **(314) 288-7109**. Which
   number is right, and should either be the call/text number for AED
   quotes?
5. **Address.** Is 506 Barbara Pl, O'Fallon, MO the public training facility
   (the EMS-for-LEO and Hamilton pages mention "Medic Wisdom's training
   facility" and "Training Center")? What is the ZIP? The AED page says
   "based in Wentzville, Missouri (ZIP: 63366)". If the address is a home,
   should it be removed so the site shows city and state only?
6. **Testimonials.** Six quotes are reproduced exactly as published (Harold
   Holm, Marcus R., Kelly P., Jordan M., Kevin G., Ashley B.). Confirm each
   one is a real student and may be quoted.
7. **Counters.** Can "100% success rate" and "250+ lives saved" be sourced?
   Until they are, they stay off the site. Also confirm "1,500+ students
   trained".
8. **Affiliations.** AHA Aligned Training Site, American Red Cross Authorized
   Training Provider and HSI Approved Training Center are currently shown as
   text. If Tim wants the official badges, we need the current authorization
   and the organisations' artwork rules.
9. **PALS.** The old homepage says "we specialize in … PALS", but no PALS
   course page exists. Is PALS offered? If so, a course page can be added
   under BLS & ACLS.
10. **"24/7 customer support"** on AED rentals, and **"same-day
    certification"** on ACLS. Both are kept as published. Confirm they are
    still true.

## Photos

11. Replace the four stock classroom photos with Tim's own class photos.
    Six or more real shots would let every course page show real classes.
12. The Hamilton T1 product photo: confirm the right to use it, or swap it
    for a photo of Medic Wisdom's own training unit.

## Operations

13. **Hosting.** Done Oct 19 2026. The Vercel project is `medicwisdom` on
    the compassmarketin team. `COMPASS_BRAND=medicwisdom` is set in every
    environment, and the production branch is `main` (also the GitHub
    default). Deployments sit behind Vercel's team login at
    `medicwisdom-compassmarketin.vercel.app`. Still to do at launch: set
    `NEXT_PUBLIC_SITE_URL` once the domain is settled (#1), set
    `NEXT_PUBLIC_ALLOW_INDEXING=true` in production only, set
    `RESEND_API_KEY` and `INQUIRY_RECIPIENT` (#2), point DNS, then follow
    the Foundation's `docs/launch-checklist.md`.
14. **CRM record.** Done Oct 19 2026. The client is
    `51b886da-0bad-45d5-977e-be8fea5e148b`, with work mode
    `upgrade_existing` against this repository and `main`, and brand
    `medicwisdom`. The Foundation worker's Brand Build, Taxonomy and Keyword
    Research stages run first. After that, Website changes arrive as
    preview branches and pull requests against `main`.
