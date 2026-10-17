import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 25 */ export function CheckoutSteps() {
  const [s, setS] = useState(1);
  const S = ['Cart', 'Details', 'Pay', 'Done'];
  return (
    <Co label="Checkout steps" className={c.center}>
      <ol className={c.steps}>{S.map((t, k) => <li key={t} data-done={k < s} aria-current={k === s ? 'step' : undefined}><i>{k < s ? '✓' : k + 1}</i>{t}</li>)}</ol>
      <div className={c.chips}><button type="button" className={c.chip} disabled={s === 0} onClick={() => setS((v) => v - 1)}>Back</button><button type="button" className={c.chip} onClick={() => setS((v) => (v + 1) % 4)}>{s === 3 ? 'Restart' : 'Next'}</button></div>
    </Co>
  );
}
