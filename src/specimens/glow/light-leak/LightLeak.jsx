import c from "../glow.module.css";

export function LightLeak() {
  return (
    <div className={c.fig} role="img" aria-label="A light leak drifting across a card">
      <div className={`${c.card} ${c.leak}`}><i /><b>Leak</b></div>
    </div>
  );
}
