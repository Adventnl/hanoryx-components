import { useState } from 'react';
import c from "../tabs.module.css";

/* 16 */ export function PlanCards() {
  const [k, setK] = useState(0);
  const plans = [['Free', '0'], ['Team', '12'], ['Firm', '40']];
  return (
    <div className={c.cards} role="radiogroup" aria-label="Plan cards">
      {plans.map(([n, p], i) => <button key={n} type="button" role="radio" aria-checked={k === i} onClick={() => setK(i)}><b>{n}</b><span>{p}</span></button>)}
    </div>
  );
}
