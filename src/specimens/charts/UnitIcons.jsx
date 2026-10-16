import c from './charts.module.css';
import { useScan } from './shared';

/* 34 */ const UNITS = [['Row A', 7], ['Row B', 5], ['Row C', 9], ['Row D', 3]];

export function UnitIcons() {
  const [i, bind] = useScan(4, { axis: 'y', label: (k) => `${UNITS[k][0]}: ${UNITS[k][1]} of 10` });
  return (
    <div className={c.units} {...bind} aria-label="Unit icons, move down the rows">
      {UNITS.map(([n, v], k) => (
        <p key={n} data-hot={k === i}><em>{n}</em><span>{Array.from({ length: 10 }, (_, j) => <i key={j} data-on={j < v} />)}</span><b>{v}</b></p>
      ))}
    </div>
  );
}
