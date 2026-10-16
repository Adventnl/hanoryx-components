import { useState } from 'react';
import c from './waypoints.module.css';

/* 27 */ export function RouteLegs() {
  const [leg, setLeg] = useState(0);
  const legs = [['A → B', '12 min'], ['B → C', '8 min'], ['C → D', '21 min']];
  return (
    <div className={c.route2}>
      <svg viewBox="0 0 120 40" aria-hidden="true"><path d="M10 28 40 12 80 26 110 10" className={c.rBase} />{[[10, 28], [40, 12], [80, 26], [110, 10]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="3.4" className={k <= leg + 0 ? c.rOn : undefined} />)}<path d={['M10 28 40 12', 'M40 12 80 26', 'M80 26 110 10'][leg]} className={c.rLeg} /></svg>
      <div role="radiogroup" aria-label="Route legs">{legs.map(([t, m], i) => <button key={t} type="button" role="radio" aria-checked={i === leg} onClick={() => setLeg(i)}>{t}<small>{m}</small></button>)}</div>
    </div>
  );
}
