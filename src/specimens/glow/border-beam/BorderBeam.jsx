import c from "../glow.module.css";

export function BorderBeam() {
  return (
    <div className={c.fig} role="img" aria-label="A card with a beam of light running around its border">
      <div className={`${c.card} ${c.beam}`}><b>Border beam</b><span>runs the edge</span></div>
    </div>
  );
}
