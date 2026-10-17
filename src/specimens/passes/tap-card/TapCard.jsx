import { useState } from 'react';
import c from "../passes.module.css";
import { useFlash } from "../shared";

/* 8 */
export function TapCard() {
  const [bal, setBal] = useState(750);
  const [on, fire] = useFlash(1000);
  const low = bal < 240;
  const tap = () => { if (low) return; setBal((b) => b - 240); fire(); };
  return (
    <div className={c.fig}>
      <div className={c.tc} data-tap={on} data-low={low}>
        <span className={c.tcReader}><i /><i /><i /><em /></span>
        <span className={c.tcCard}>
          <span className={c.k}>Transit card</span>
          <b>{(bal / 100).toFixed(2)}</b>
          <span className={c.tcChip} />
        </span>
      </div>
      <p className={c.row}>
        <button type="button" className={c.btn} onClick={tap} disabled={low}>Tap in</button>
        <button type="button" className={c.btn} onClick={() => setBal((b) => b + 1000)}>Top up</button>
      </p>
    </div>
  );
}
