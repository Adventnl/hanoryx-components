import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 24 */ const risk = (r, k) => (5 - r) * (k + 1);

const riskName = (s) => (s <= 4 ? 'Low' : s <= 9 ? 'Moderate' : s <= 16 ? 'High' : 'Severe');

export function RiskMatrix() {
  const [at, bind] = useCell(5, 5);
  const [r, k] = at;
  return (
    <div className={c.box}>
      <div className={c.risk}>
        <em>likelihood ↑</em>
        <div {...bind} aria-label="Risk matrix, move over it or use the arrow keys">
          {Array.from({ length: 25 }, (_, i) => <i key={i} style={{ '--s': risk(Math.floor(i / 5), i % 5) / 25 }} data-sel={Math.floor(i / 5) === r && i % 5 === k} />)}
        </div>
        <em>impact →</em>
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the matrix' : <>Score <b>{risk(r, k)}</b> · {riskName(risk(r, k))}</>}</output>
    </div>
  );
}
