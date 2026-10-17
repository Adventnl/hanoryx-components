import c from "../fold.module.css";

export function Pleats() {
  return (
    <div className={c.fig} role="img" aria-label="Pleated paper that breathes in and out">
      <div className={`${c.stage} ${c.waveStage}`}>
        <div className={c.pleats}>{Array.from({ length: 10 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>
      </div>
    </div>
  );
}
