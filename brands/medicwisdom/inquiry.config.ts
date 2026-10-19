/**
 * Medic Wisdom inquiry delivery (server only). Secrets stay in the
 * environment (RESEND_API_KEY); recipient and sender are overridable with
 * INQUIRY_RECIPIENT / INQUIRY_FROM.
 *
 * LAUNCH BLOCKER (docs/medicwisdom/open-questions.md): medicwisdom.com is no longer
 * held by the client and has no mail records, so info@medicwisdom.com
 * cannot receive mail today. Set INQUIRY_RECIPIENT to a mailbox the owner
 * confirms, and INQUIRY_FROM to a sender on a domain verified in Resend,
 * before the form goes live.
 */
export const inquiryConfig = {
  recipients: ["info@medicwisdom.com"],
  from: "Medic Wisdom Website <website@medicwisdom.com>",
  subjectPrefix: "Website inquiry",
  sourceLabel: "Medic Wisdom website /contact",
  env: {
    apiKey: "RESEND_API_KEY",
    recipient: "INQUIRY_RECIPIENT",
    from: "INQUIRY_FROM",
    delivery: "INQUIRY_DELIVERY",
    /** Base URL of the QA mock provider service (scripts/qa/mock-provider.mjs); used only in mock mode. */
    mockProviderUrl: "INQUIRY_MOCK_PROVIDER_URL",
  },
  rateLimit: { windowMs: 10 * 60 * 1000, maxPerWindow: 5 },
  forceMock: false,
} as const;
