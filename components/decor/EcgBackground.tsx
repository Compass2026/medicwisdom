/**
 * Decorative ECG trace for the hero (Medic Wisdom). Two rhythm strips drawn
 * as SVG: a faint static trace in the accent colour and a short red pulse
 * that sweeps along it like a monitor. Pure SVG + CSS (no JS); aria-hidden;
 * the sweep stops under prefers-reduced-motion.
 */

/** One PQRST complex every `beat` px along a baseline at `y`. */
function rhythm(y: number, beat: number, amp: number, width = 1560, start = -120): string {
  let d = `M${start} ${y}`;
  for (let x = start; x < width; x += beat) {
    d +=
      ` H${x + beat * 0.18}` +
      ` q${beat * 0.04} ${-amp * 0.16} ${beat * 0.08} 0` + // P wave
      ` H${x + beat * 0.34}` +
      ` l${beat * 0.02} ${amp * 0.12}` + // Q
      ` l${beat * 0.03} ${-amp * 1.12}` + // R
      ` l${beat * 0.035} ${amp * 1.34}` + // S
      ` l${beat * 0.02} ${-amp * 0.34}` +
      ` H${x + beat * 0.56}` +
      ` q${beat * 0.07} ${-amp * 0.3} ${beat * 0.14} 0` + // T wave
      ` H${x + beat}`;
  }
  return d;
}

const traces = [
  { d: rhythm(372, 300, 120), width: 2, opacity: 0.22, sweep: "7s", delay: "0s" },
  { d: rhythm(128, 220, 60), width: 1.25, opacity: 0.12, sweep: "9s", delay: "2.5s" },
];

export default function EcgBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <style>{`
        @keyframes ecg-sweep { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
        .ecg-sweep { animation: ecg-sweep var(--ecg-duration, 7s) linear infinite; }
        @media (prefers-reduced-motion: reduce) { .ecg-sweep { animation: none; opacity: 0; } }
      `}</style>
      {traces.map((t, i) => (
        <g key={i}>
          <path
            d={t.d}
            stroke="var(--color-accent-500)"
            strokeWidth={t.width}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={t.opacity}
          />
          <path
            d={t.d}
            pathLength={1000}
            stroke="#ff0000"
            strokeWidth={t.width + 1}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="34 966"
            className="ecg-sweep"
            opacity={0.85}
            style={{ "--ecg-duration": t.sweep, animationDelay: t.delay } as React.CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}
