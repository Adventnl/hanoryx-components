import c from "../tilt.module.css";

export function GlossSweep() {
  return (
    <div className={c.fig} role="img" aria-label="A card with a gloss that sweeps across">
      <div className={c.stage}><div className={`${c.card} ${c.gloss}`}><b>Gloss</b><span>passes by</span></div></div>
    </div>
  );
}
