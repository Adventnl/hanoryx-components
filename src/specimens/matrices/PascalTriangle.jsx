import { useScan } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 32 */ export function PascalTriangle() {
  const [i, bind] = useScan(12, { axis: 'y', label: (k) => `Row ${k}, sum ${2 ** k}` });
  return (
    <div className={c.box}>
      <div className={c.pascal} {...bind} aria-label="Pascal's triangle with odd numbers lit, move down the rows">
        {Array.from({ length: 12 }, (_, n) => <p key={n} data-hot={n === i}>{Array.from({ length: n + 1 }, (_, k) => <i key={k} data-on={(n & k) === k} />)}</p>)}
      </div>
      <output className={c.out}>{i < 0 ? 'Move down the rows' : <>Row <b>{i}</b> · sum <b>{2 ** i}</b></>}</output>
    </div>
  );
}
