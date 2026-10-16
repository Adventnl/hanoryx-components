import c from './fold.module.css';

export function TwistRibbon() {
  return (
    <div className={c.fig} role="img" aria-label="A ribbon twisting along its length">
      <div className={`${c.stage} ${c.waveStage}`}>
        <div className={c.ribbon}>{Array.from({ length: 12 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>
      </div>
    </div>
  );
}
