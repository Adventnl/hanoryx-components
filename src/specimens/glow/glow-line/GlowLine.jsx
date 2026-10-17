import c from "../glow.module.css";

export function GlowLine() {
  return (
    <div className={c.fig} role="img" aria-label="A glowing line chart being drawn">
      <svg className={c.gline} viewBox="0 0 120 40" aria-hidden="true">
        <path pathLength="1" d="M2 32C14 30 18 14 30 16S44 34 56 26 70 6 84 12 100 30 118 8" />
      </svg>
    </div>
  );
}
