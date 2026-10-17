import { useState } from 'react';
import c from "../studio.module.css";

/* 38 */ export function HeadphoneKnob() {
  const [n, setN] = useState(6);
  return (
    <div className={c.phones}>
      <button type="button" aria-label={`Headphone volume ${n} of 11. Press to raise`} onClick={() => setN((n + 1) % 12)} style={{ '--n': n }}><i /></button>
      <output>{n}</output>
    </div>
  );
}
