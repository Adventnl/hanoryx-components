import { useState } from 'react';
import c from "../editorial.module.css";

/* ---------- 03 notes and references ---------- */

export function FootnotePopover() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.fig}>
      <p className={c.para} onKeyDown={(e) => { if (e.key === 'Escape') setOn(false); }}>
        The belt keeps moving
        <span className={c.anchor}>
          <button type="button" className={c.sup} aria-expanded={on} aria-label="Footnote 1" onClick={() => setOn((o) => !o)}>1</button>
          <span className={c.pop} data-on={on} role="note">Nobody asked it to, and nobody can find the switch.</span>
        </span>
        {' '}all night.
      </p>
    </div>
  );
}
