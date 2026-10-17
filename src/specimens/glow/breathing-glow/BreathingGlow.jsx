import c from "../glow.module.css";

export function BreathingGlow() {
  return (
    <div className={c.fig} role="img" aria-label="A card with a glow that breathes">
      <div className={`${c.card} ${c.breathe}`}><b>Breathe</b><span>slow pulse</span></div>
    </div>
  );
}
