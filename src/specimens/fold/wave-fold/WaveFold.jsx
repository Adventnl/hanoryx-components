import c from "../fold.module.css";

export function WaveFold() {
  return (
    <div className={c.fig} role="img" aria-label="A row of panels folding in a wave">
      <div className={`${c.stage} ${c.waveStage}`}>
        <div className={c.wave}>{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>
      </div>
    </div>
  );
}
