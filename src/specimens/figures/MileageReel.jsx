import c from './figures.module.css';
import { strip } from './shared';

/* 2 */ export function MileageReel() {
  return (
    <div className={c.fig} role="img" aria-label="An odometer rolling forward">
      <div className={c.mileBox}>
        {[4, 3, 2, 1, 0].map((k) => (
          <span key={k} className={`${c.reel} ${k ? c.mileK : c.mile0}`} style={{ '--p10': 10 ** k }}><b>{strip(11).map((d, i) => <i key={i}>{d}</i>)}</b></span>
        ))}
        <small>km</small>
      </div>
    </div>
  );
}
