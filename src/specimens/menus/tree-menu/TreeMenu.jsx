import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../menus.module.css";

/* 32 */ export function TreeMenu() {
  const [open, setOpen] = useState({ src: true });
  const flip = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }));
  return (
    <ul className={c.tree} role="tree" aria-label="Tree menu">
      {[['src', ['app.js', 'ui.js']], ['docs', ['intro.md']]].map(([d, kids]) => (
        <li key={d} role="treeitem" aria-expanded={!!open[d]}>
          <button type="button" onClick={() => flip(d)}><Ico n={open[d] ? 'down' : 'right'} />{d}/</button>
          {open[d] && <ul role="group">{kids.map((f) => <li key={f} role="treeitem" aria-selected={false}>{f}</li>)}</ul>}
        </li>
      ))}
    </ul>
  );
}
