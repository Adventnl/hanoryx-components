import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 15 */ export function SectionRail() {
  const [open, setOpen] = useState(0);
  const secs = [['Projects', ['Alpha', 'Beta']], ['People', ['Ada', 'Lin']], ['Archive', ['2023']]];
  return (
    <nav className={c.sections} aria-label="Section rail">
      {secs.map(([t, kids], i) => (
        <div key={t}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><Ico n={open === i ? 'down' : 'right'} />{t}</button>
          {open === i && <ul>{kids.map((k) => <li key={k}>{k}</li>)}</ul>}
        </div>
      ))}
    </nav>
  );
}
