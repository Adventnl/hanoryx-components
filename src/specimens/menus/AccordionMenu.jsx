import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './menus.module.css';

/* 9 */ export function AccordionMenu() {
  const [o, setO] = useState(0);
  const sec = [['Account', ['Profile', 'Security']], ['Workspace', ['Members', 'Billing']], ['Support', ['Docs']]];
  return (
    <div className={c.acc}>
      {sec.map(([t, kids], i) => (
        <div key={t}>
          <button type="button" aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>{t}<Ico n={o === i ? 'up' : 'down'} /></button>
          <ul data-open={o === i}>{kids.map((k) => <li key={k}><a href="#acc" tabIndex={o === i ? 0 : -1} onClick={(e) => e.preventDefault()}>{k}</a></li>)}</ul>
        </div>
      ))}
    </div>
  );
}
