import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../morphs.module.css";

/* 31 */ export function ButtonToPanel() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <div className={c.fab} data-on={on}>
        <button type="button" aria-expanded={on} aria-label={on ? 'Close actions' : 'Open actions'} onClick={() => setOn((v) => !v)}><Ico n="plus" /></button>
        <ul>{['Note', 'Photo', 'Link'].map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </div>
  );
}
