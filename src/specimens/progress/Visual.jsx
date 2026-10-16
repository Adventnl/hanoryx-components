import c from './progress.module.css';

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visRing}><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" /><circle cx="50" cy="50" r="44" pathLength="1" /></svg><b /></div>
      <div className={c.visBars}>{[1, 0.62, 0.34].map((w, k) => <i key={k} style={{ '--w': w }} />)}</div>
      <small>1 RING · 3 BARS</small>
    </div>
  );
}
