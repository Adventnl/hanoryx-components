import { useDrag, clamp } from '../../stage/hooks';
import c from './passes.module.css';
import { BC, Barcode } from './shared';

/* 2 */
export function TearOffStub() {
  const [v, bind, set] = useDrag({ mode: 'x', init: 0 });
  const torn = v >= 0.97;
  return (
    <div className={c.fig}>
      <div className={c.ts} {...bind} aria-label="Drag across the ticket to tear off the stub" data-torn={torn} style={{ ...bind.style, '--t': clamp((v - 0.5) / 0.45).toFixed(3) }}>
        <span className={c.tsMain}>
          <span className={c.kp}>Admit one · row F</span>
          <b>Late show</b>
          <span className={c.tsRule} />
          <span className={c.kp}>Keep this half</span>
        </span>
        <span className={c.tsStub}>
          <span className={c.kp}>No.</span>
          <b>0371</b>
          <Barcode code={BC.c} className={c.tsCode} />
        </span>
      </div>
      <p className={c.row}>
        <span className={c.k}>{torn ? 'Torn clean' : 'Drag across to tear'}</span>
        <button type="button" className={c.btn} onClick={() => set(0)}>Reset</button>
      </p>
    </div>
  );
}
