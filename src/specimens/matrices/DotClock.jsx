import { useTick, pad2 } from '../../stage/hooks';
import c from './matrices.module.css';
import { raster } from './shared';

/* 7 */ export function DotClock() {
  const n = useTick(1100);
  const t = (12 * 60 + 58 + n) % (24 * 60);
  const rows = raster(`${pad2(Math.floor(t / 60))}${n % 2 ? '_' : ':'}${pad2(t % 60)}`);
  return (
    <div className={c.dots} role="img" aria-label="A dot-matrix clock running fast" style={{ '--w': rows[0].length }}>
      {rows.map((row, y) => [...row].map((b, x) => <i key={`${y}-${x}`} data-on={b === '1'} />))}
    </div>
  );
}
