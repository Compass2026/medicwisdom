import type { ServicePageContent } from "@/content/services/types";
import { cprFirstAid, cprAedFirstAid, heartsaver, eventVenueStaff, lawEnforcement } from "./cpr-first-aid";
import { healthcareProviders, blsProvider, acls } from "./healthcare-providers";
import { emsEducation, ekgBeginner, ekgAdvanced, ekgForEmts, nremtEmtPrep, nremtParamedicPrep, hamiltonT1 } from "./ems-education";
import { aedRentals } from "./aed-rentals";

/** Medic Wisdom service registries: four hubs (the course groups and AED rentals) and twelve courses beneath them. */
export const servicePages: readonly ServicePageContent[] = [cprFirstAid, healthcareProviders, emsEducation, aedRentals];
export const serviceDetailPages: readonly ServicePageContent[] = [
  cprAedFirstAid,
  heartsaver,
  eventVenueStaff,
  lawEnforcement,
  blsProvider,
  acls,
  ekgBeginner,
  ekgAdvanced,
  ekgForEmts,
  nremtEmtPrep,
  nremtParamedicPrep,
  hamiltonT1,
];
export const allServicePages: readonly ServicePageContent[] = [...servicePages, ...serviceDetailPages];
export function findServicePage(path: string): ServicePageContent | undefined {
  return allServicePages.find((p) => p.path === path);
}
