import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './morphs.module.css';

/* 30 */ export function SearchGrow() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <div className={c.searchG} data-on={on}>
        <button type="button" aria-expanded={on} aria-label={on ? 'Close search' : 'Open search'} onClick={() => setOn((v) => !v)}><Ico n={on ? 'close' : 'search'} /></button>
        <input aria-label="Search" placeholder="Search…" tabIndex={on ? 0 : -1} />
      </div>
    </div>
  );
}
