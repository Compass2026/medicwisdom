import type { CityPageContent } from "@/content/cities/types";

/** No served-city pages: the old site names no city coverage with local material to stand on (city gate). */
export const cityPages: readonly CityPageContent[] = [];
export function findCityPage(slug: string): CityPageContent | undefined {
  return cityPages.find((c) => c.slug === slug);
}
export function cityHref(slug: string | undefined): string | undefined {
  return slug ? findCityPage(slug)?.path : undefined;
}
