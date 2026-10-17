import { useState } from 'react';
import c from "../tabs.module.css";

/* 37 */ export function LampTabs() {
  const [k, setK] = useState(0);
  return (
    <div className={c.lamps} role="tablist" aria-label="Lit tabs">
      {['CH1', 'CH2', 'CH3', 'CH4'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)}><i />{t}</button>)}
    </div>
  );
}
