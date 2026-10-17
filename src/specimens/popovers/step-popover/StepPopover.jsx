import { useState } from 'react';
import c from "../popovers.module.css";

/* 38 */ export function StepPopover() {
  const [k, setK] = useState(1);
  return (
    <div className={c.steps}>
      <ol>{['Draft', 'Review', 'Live'].map((t, i) => <li key={t}><button type="button" aria-current={i === k ? 'step' : undefined} onClick={() => setK(i)}>{i + 1}</button>{i === k && <em>{t}</em>}</li>)}</ol>
    </div>
  );
}
