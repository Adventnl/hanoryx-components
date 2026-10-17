import { useState } from 'react';
import c from "../passes.module.css";
import { BC, Barcode } from "../shared";

/* 30 */
const PARCEL = ['Label printed', 'Sorted at depot', 'Loaded', 'Out for delivery'];

export function ParcelLabel() {
  const [s, setS] = useState(1);
  return (
    <div className={c.fig}>
      <div className={c.pa}>
        <span className={c.paTop}><b>B-14</b><span className={c.paBand}>Priority</span></span>
        <span className={c.paCode}>
          <Barcode code={BC.d} className={c.paBars} />
          <i className={c.paBeam} key={s} />
        </span>
        <ol className={c.paSteps}>
          {PARCEL.map((t, i) => <li key={t} data-done={i <= s}>{t}</li>)}
        </ol>
      </div>
      <p className={c.row}><button type="button" className={c.btn} onClick={() => setS((x) => (x + 1) % PARCEL.length)}>Scan</button><span className={c.k}>Step {s + 1} of {PARCEL.length}</span></p>
    </div>
  );
}
