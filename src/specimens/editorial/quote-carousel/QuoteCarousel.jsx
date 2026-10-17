import { useState } from 'react';
import { useCycle } from "../../../stage/hooks";
import c from "../editorial.module.css";

const SAYINGS = [['The belt keeps moving.', 'A.'], ['Nobody asked it to.', 'B.'], ['Somebody should.', 'C.']];

export function QuoteCarousel() {
  const auto = useCycle(SAYINGS.length, 3200);
  const [pick, setPick] = useState(null);
  const k = pick ?? auto;
  return (
    <div className={c.fig}>
      <p key={k} className={c.car}>“{SAYINGS[k][0]}” <span className={c.cite}>{SAYINGS[k][1]}</span></p>
      <div className={c.dots} role="group" aria-label="Choose a quote">
        {SAYINGS.map((_, i) => <button key={i} type="button" className={c.dot} aria-label={`Show quote ${i + 1}`} aria-current={i === k} onClick={() => setPick(i)} />)}
      </div>
    </div>
  );
}
