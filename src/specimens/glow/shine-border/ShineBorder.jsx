import c from "../glow.module.css";

export function ShineBorder() {
  return (
    <div className={c.fig} role="img" aria-label="A card whose border catches a sheen">
      <div className={`${c.card} ${c.shine}`}><b>Shine</b><span>on the border only</span></div>
    </div>
  );
}
