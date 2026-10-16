import c from './charts.module.css';
import { useScan } from './shared';

/* 30 */ const PYR = [[4, 5], [9, 8], [14, 13], [19, 18], [16, 17], [11, 13], [6, 9]];

const PYR_AGE = ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60+'];

export function PyramidBars() {
  const [i, bind] = useScan(7, { axis: 'y', label: (k) => `${PYR_AGE[k]}: ${PYR[k][0]} and ${PYR[k][1]}` });
  return (
    <div className={c.pyr} {...bind} aria-label="Pyramid bars, move down the rows">
      {PYR.map(([l, r], k) => (
        <p key={k} data-hot={k === i}><span><i style={{ width: `${l * 5}%` }} /></span><em>{PYR_AGE[k]}</em><span><i style={{ width: `${r * 5}%` }} /></span></p>
      ))}
    </div>
  );
}
