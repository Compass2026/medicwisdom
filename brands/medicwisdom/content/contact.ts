import type { InquiryFormLabels } from "@/components/site/InquiryForm";

/** CONTACT — Medic Wisdom. Intro and the four booking steps are the old Contact page's. */
export const contact = {
  path: "/contact",
  otherGroup: "Other",
  otherService: "Not sure yet / a group or custom class",
  seo: {
    title: "Contact & Book a Class",
    description: "Contact Medic Wisdom to book a CPR, First Aid, BLS, ACLS or EMS class, ask about group rates and on-site training, or request an AED rental quote.",
  },
  hero: {
    eyebrow: "Contact & book now",
    headline: "Ready to take the next step?",
    intro: "Whether you're an individual, a business or a healthcare professional, our certified training programs are tailored to your needs. Reach out to schedule your class, ask a question, or get started with a group booking.",
  },
  cards: {
    call: { heading: "Call or text", body: "Speak with an instructor, ask about group rates, or book over the phone." },
    email: { heading: "Email", body: "Questions, group bookings and AED rental quotes." },
    shop: { heading: "Office", note: "Classes here, on-site anywhere in Missouri, or online for selected courses." },
  },
  form: {
    eyebrow: "Send us a message",
    heading: "Don't hesitate to contact us",
    intro: "Tell us which class you're interested in, how many people, and where. We reply by phone or email.",
  },
  formLabels: {
    name: "Your name",
    email: "Email",
    phone: "Phone",
    contactHint: "Give us at least one — email or phone.",
    service: "Which course are you interested in?",
    servicePlaceholder: "Choose a course (optional)",
    details: "Message",
    detailsHint: "Which class, how many people, preferred dates, and whether you'd like us to come to you.",
    submit: "Send message",
    submitting: "Sending…",
    errors: {
      name: { required: "Please tell us your name.", tooLong: "Please keep your name under 100 characters." },
      email: { invalid: "That email address doesn't look right.", tooLong: "Please keep your email under 200 characters." },
      phone: { invalid: "Please enter a 10-digit phone number.", tooLong: "Please keep your phone number under 30 characters." },
      service: { invalid: "Please choose a course from the list." },
      details: { required: "Please tell us a little about what you need.", tooLong: "Please keep the message under 3,000 characters." },
      contact: "Add an email address or a phone number so we can reply.",
      fix: "Please check the highlighted fields.",
    },
    success: {
      heading: "Thanks — your message is on its way.",
      body: "We'll get back to you by phone or email. If you'd rather talk now, call or text:",
      again: "Send another message",
    },
    failure: {
      heading: "We couldn't send your message.",
      body: "Nothing you typed has been lost. Please try again in a moment, or reach us directly:",
      network: "We couldn't reach the server. Check your connection and try again.",
    },
    noscript: "This form needs JavaScript to send. You can reach us directly instead:",
  } satisfies InquiryFormLabels,
};
