import c from "../glow.module.css";

export function MeshGradient() {
  return (
    <div className={c.fig} role="img" aria-label="A card filled with a slowly moving mesh gradient">
      <div className={`${c.card} ${c.mesh}`}><b>Mesh</b></div>
    </div>
  );
}
