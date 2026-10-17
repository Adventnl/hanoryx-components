import { useState } from 'react';
import c from "../passes.module.css";

/* 24 */
const FORTUNES = ['The belt keeps moving.', 'A quiet machine is a good machine.', 'Tomorrow runs on time.', 'The gate opens inward.', 'Small stamps, large doors.'];

export function FortuneSlip() {
  const [k, setK] = useState(-1);
  return (
    <div className={c.fig}>
      <button type="button" className={c.fs} data-out={k >= 0} aria-label={k < 0 ? 'Crack the cookie' : 'Pull another fortune'} onClick={() => setK((n) => n + 1)}>
        <span className={c.fsSlip} key={k}><span>{k < 0 ? '' : FORTUNES[k % FORTUNES.length]}</span></span>
        <svg className={c.fsCookie} viewBox="0 0 120 70" aria-hidden="true">
          <path className={c.fsBack} d="M8 46A52 40 0 0 1 112 46Q60 64 8 46Z" />
          <path className={c.fsFront} d="M26 50A36 26 0 0 1 98 50Q62 62 26 50Z" />
        </svg>
      </button>
      <p className={c.k}>{k < 0 ? 'Crack it open' : `Fortune ${(k % FORTUNES.length) + 1} of ${FORTUNES.length}`}</p>
    </div>
  );
}
