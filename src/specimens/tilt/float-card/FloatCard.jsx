import c from "../tilt.module.css";

export function FloatCard() {
  return (
    <div className={c.fig} role="img" aria-label="A card floating above its shadow">
      <div className={c.stage}>
        <div className={`${c.card} ${c.float}`}><b>Float</b><span>breathes</span></div>
        <i className={c.drop} />
      </div>
    </div>
  );
}
