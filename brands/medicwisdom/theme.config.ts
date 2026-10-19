/** Medic Wisdom: motion settings, JS colour literals and the ECG decoration. */
export const motionColors = {
  /** --color-accent-500 */
  accent: "#3fea2b",
  /** --color-primary-950 */
  surfaceDeep: "#140f2d",
  nodeIdleBorder: "rgba(255,255,255,0.18)",
  nodeActiveFill: "rgba(63,234,43,0.12)",
  nodeGlow: "0 0 24px rgba(63,234,43,0.45)",
} as const;

export const motion = {
  enabled: true,
  smoothScroll: false,
  duration: 0.8,
  stagger: 0.08,
  ease: "power3.out",
  distance: 28,
  mobileBreakpoint: 768,
  parallaxStrength: 40,
  start: "top 82%",
  immediateDeadlineMs: 1200,
} as const;

export type MotionConfig = typeof motion;

/**
 * The industry motif: an ECG trace behind heroes (components/decor/
 * EcgBackground.tsx) and a heartbeat-shaped rail between the steps of the
 * scroll story — the 12-lead strips on Tim's own course cards, not a stock
 * medical cross.
 */
export const decoration = {
  heroBackdrop: "ecg",
  storyRail: "ecg",
} as const;

export type Decoration = typeof decoration;
