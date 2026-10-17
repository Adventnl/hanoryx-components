import { useState } from 'react';
import c from "../archive.module.css";

/* 05 */ export function FilingCabinet() {
  const [o, setO] = useState(1);
  return (
    <div className={c.cab} role="group" aria-label="Filing cabinet">
      {[0, 1, 2].map((i) => <button key={i} type="button" className={c.dr} aria-pressed={o === i} aria-label={`Drawer ${i + 1}`} onClick={() => setO(o === i ? -1 : i)}><i /><b /></button>)}
    </div>
  );
}
