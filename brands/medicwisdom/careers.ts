import type { Metadata } from "next";
import type { Job } from "@/lib/jobs";

/** No careers property: the old footer listed "Careers" with no page behind it. */
export const careers = {
  jobs: [] as Job[],
  metadata: {} as Metadata,
  apply: { from: "", recipients: [] as string[] },
};
