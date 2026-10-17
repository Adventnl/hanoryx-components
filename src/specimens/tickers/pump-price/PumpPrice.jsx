import { useState } from 'react';
import c from "../tickers.module.css";
import { Roll } from "../shared";

export function PumpPrice() {
  const [cents, setCents] = useState(349);
  const step = (d) => setCents((v) => Math.min(999, Math.max(100, v + d)));
  const d = String(cents).padStart(3, '0');
  return (
    <div className={c.fig}>
      <div className={c.pump} style={{ '--fs': '11cqw' }} role="img" aria-label={`Price ${(cents / 100).toFixed(2)} a litre`}>
        <span className={c.unit}>$</span><Roll d={+d[0]} /><b>.</b><Roll d={+d[1]} /><Roll d={+d[2]} /><sup>9</sup>
      </div>
      <div className={c.pair2}>
        <button type="button" className={c.nudge} onClick={() => step(-1)} aria-label="Lower the price">−</button>
        <button type="button" className={c.nudge} onClick={() => step(1)} aria-label="Raise the price">+</button>
      </div>
    </div>
  );
}
