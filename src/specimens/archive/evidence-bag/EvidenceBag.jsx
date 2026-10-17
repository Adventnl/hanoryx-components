import { useState } from 'react';
import c from "../archive.module.css";

/* 30 */ export function EvidenceBag() {
  const [torn, setTorn] = useState(false);
  return (
    <button type="button" className={c.bag} aria-pressed={torn} onClick={() => setTorn((v) => !v)} aria-label="Evidence bag. Click to tear the seal">
      <span className={c.seal} data-torn={torn}>EVIDENCE</span>
      <span className={c.bagBody}><i /><i /></span>
    </button>
  );
}
