import c from "../glow.module.css";

export function TopBeam() {
  return (
    <div className={c.fig} role="img" aria-label="A card with a beam of light sweeping down from the top edge">
      <div className={`${c.card} ${c.top}`}><i /><b>Top beam</b><span>sweeps across</span></div>
    </div>
  );
}
