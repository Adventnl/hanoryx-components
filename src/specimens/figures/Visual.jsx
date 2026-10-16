import c from './figures.module.css';
import { strip } from './shared';

function Reel({ cls, len = 11 }) {
  return <span className={`${c.reel} ${cls}`}><b>{strip(len).map((d, i) => <i key={i}>{d}</i>)}</b></span>;
}

export function Visual() {
  return (
    <div className={c.stack} aria-hidden="true">
      <p className={c.cap}>specimen</p>
      <div className={c.big}><Reel cls={c.tens} len={6} /><Reel cls={c.ones} /></div>
      <p className={c.of}>of 42</p>
      <div className={c.pct}><Reel cls={c.pH} len={3} /><Reel cls={c.pT} /><Reel cls={c.pO} /><span>%</span></div>
      <p className={c.cap}>of the way down</p>
    </div>
  );
}
