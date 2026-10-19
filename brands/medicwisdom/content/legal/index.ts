import type { LegalDocument } from "@/content/legal/types";
import type { Crumb } from "@/content/services/types";

/**
 * No legal documents yet: the old footer listed "Privacy Policy" and "Terms
 * & Condition" with no pages behind them, and the Foundation never writes a
 * client's legal text for them (docs/medicwisdom/open-questions.md).
 */
export const legalDocuments: LegalDocument[] = [];
export function findLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((d) => d.slug === slug);
}
export const legal = {
  breadcrumbs: (doc: LegalDocument): Crumb[] => [{ label: "Home", href: "/" }, { label: doc.title }],
  contact: { text: "Questions about this document?", label: "Contact Medic Wisdom", href: "/contact" },
};
