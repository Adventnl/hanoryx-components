import { useState } from 'react';
import c from "../morphs.module.css";

/* 36 */ export function ListToCards() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <button type="button" className={c.lc} data-on={on} aria-pressed={on} aria-label="Layout. Click to switch between a list and cards" onClick={() => setOn((v) => !v)}>
        {[0, 1, 2].map((k) => <i key={k}><b /><u /></i>)}
      </button>
    </div>
  );
}
