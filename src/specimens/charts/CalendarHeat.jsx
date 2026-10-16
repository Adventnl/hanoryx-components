import { rng } from '../../stage/hooks';
import c from './charts.module.css';
import { useScan } from './shared';

/* 8 */ const HEAT = (() => {
  const r = rng(51);
  return Array.from({ length: 140 }, (_, k) => Math.min(4, Math.floor(r() * (0.4 + 0.6 * Math.sin((Math.floor(k / 7) / 20) * Math.PI)) * 5)));
})();

export function CalendarHeat() {
  const [i, bind] = useScan(20, { label: (k) => `Week ${k + 1}` });
  const sum = i < 0 ? 0 : HEAT.slice(i * 7, i * 7 + 7).reduce((a, b) => a + b, 0);
  return (
    <div className={c.cal} {...bind} aria-label="Calendar heat, move across the weeks">
      <div className={c.calGrid}>{HEAT.map((v, k) => <i key={k} data-v={v} data-hot={Math.floor(k / 7) === i} />)}</div>
      <output className={c.out}>{i < 0 ? 'Move across the weeks' : <>Week {i + 1} · <b>{sum}</b> events</>}</output>
    </div>
  );
}
