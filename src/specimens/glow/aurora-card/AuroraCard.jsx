import c from "../glow.module.css";

/* ---------- 02 light that moves on its own ---------- */

export function AuroraCard() {
  return (
    <div className={c.fig} role="img" aria-label="A card with slow aurora light behind it">
      <div className={`${c.card} ${c.aurora}`}><i /><i /><i /><b>Aurora</b></div>
    </div>
  );
}
