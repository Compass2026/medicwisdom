import type { Photo } from "@/content/services/types";

/**
 * Every image the site uses, with alt text describing what is actually in
 * the frame. Provenance is recorded per image (docs/medicwisdom/decisions.md MW-004):
 *
 *  - OWN: Tim's portrait and his 12-lead course cards (they carry his name
 *    and the Medic Wisdom mark).
 *  - BRANDED ILLUSTRATION: the ambulance, police car and event graphics the
 *    client published, each carrying the Medic Wisdom star of life. The
 *    event graphic was generated with an AI image tool (its file name), so
 *    the "usher" is not a real person and is never described as one.
 *  - STOCK: the classroom and CPR photos (Envato Elements file names). They
 *    are never captioned or described as Medic Wisdom's classes.
 *  - PRODUCT: the Hamilton T1 product photo, as on the old site.
 */
const p = (file: string, alt: string): Photo => ({ src: `/medicwisdom/photos/${file}.webp`, alt });

export const photos = {
  // OWN
  timWide: p("tim-bobbitt-ambulance-wide", "Tim Bobbitt, founder of Medic Wisdom, smiling with arms crossed and a stethoscope around his neck in front of an ambulance"),
  timPortrait: p("tim-bobbitt-portrait", "Portrait of Tim Bobbitt in a navy quarter-zip with a stethoscope, standing in front of a red ambulance"),
  cardEkg: p("course-card-12-lead-ekg", "Course card reading “12 Lead EKG – 12-Lead EKG made easy” over a printed ECG strip, signed Tim Bobbitt NRP, FPC"),
  cardAdvancedEkg: p("course-card-advanced-12-lead", "Course card reading “Advanced 12 Lead EKG – Where ST Hits the Fan” over a printed ECG strip"),
  cardEmtEkg: p("course-card-12-lead-emt", "Course card reading “12 Lead EMT – 12-Lead EKG for absolute beginners” over a printed ECG strip"),
  // BRANDED ILLUSTRATION
  emtAmbulance: p("illustration-emt-ambulance", "Illustration of a white EMT ambulance with a blue stripe and the Medic Wisdom star of life"),
  paramedicAmbulance: p("illustration-paramedic-ambulance", "Illustration of a red and white paramedic ambulance with the Medic Wisdom star of life"),
  policeCar: p("illustration-police-car", "Illustration of a white police car with a blue stripe and the Medic Wisdom star of life on the door"),
  eventGraphic: p("event-medical-training-graphic", "Event medical training graphic: an illustrated usher in a blue jacket and cap beside the Medic Wisdom star of life"),
  // STOCK
  firstAidClass: p("first-aid-class-group", "Group of adults kneeling on the floor around a CPR manikin and first aid supplies during a training session"),
  chestCompressions: p("chest-compressions-manikin", "Close-up of hands performing chest compressions on a CPR training manikin beside an AED trainer"),
  bagMaskDemo: p("instructor-bag-mask-demo", "Instructor demonstrating a bag-valve mask on a CPR manikin while a seated class watches"),
  blsTeam: p("bls-team-cpr-practice", "Three people in scrubs practising CPR and ventilation together on a manikin in a classroom"),
  aedCabinet: p("aed-wall-cabinet", "Wall-mounted AED cabinet with a heart symbol and an automated external defibrillator inside"),
  // PRODUCT
  hamiltonT1: p("hamilton-t1-ventilator", "Hamilton T1 transport ventilator with its display screen and red patient tubing"),
} as const;

/** One share image (1200×630) for every page: logo and ECG trace on navy. */
export const shareImage = "/medicwisdom/share-1200x630.png";
