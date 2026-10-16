import { useDrag, rng, clamp } from '../../stage/hooks';
import c from './charts.module.css';

/* 9 */ const GAUSS = (() => {
  const r = rng(61);
  const g = () => Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r());
  return Array.from({ length: 260 }, (_, k) => clamp(k % 5 < 3 ? 32 + g() * 11 : 68 + g() * 9, 0, 99.9));
})();

export function BinSlider() {
  const [v, bind] = useDrag({ init: 0.35 });
  const bins = 4 + Math.round(v * 20);
  const counts = Array(bins).fill(0);
  GAUSS.forEach((x) => { counts[Math.floor((x / 100) * bins)] += 1; });
  const max = Math.max(...counts);
  return (
    <div className={c.hist}>
      <div className={c.hbars}>{counts.map((n, i) => <i key={i} style={{ '--h': n / max }} />)}</div>
      <div className={c.slide} {...bind} aria-label="Number of bins" style={{ ...bind.style, '--v': v }}><i /></div>
      <output className={c.out}><b>{bins}</b> bins</output>
    </div>
  );
}
