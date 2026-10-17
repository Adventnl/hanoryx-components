import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../menus.module.css";

/* 14 */ export function FlyoutRail() {
  const [k, setK] = useState(-1);
  const rows = [['home', ['Overview', 'Alerts']], ['folder', ['Files', 'Shared']], ['gear', ['General', 'Keys']]];
  return (
    <div className={c.fly} onPointerLeave={() => setK(-1)}>
      <nav aria-label="Flyout menu">{rows.map(([n], i) => <button key={n} type="button" aria-label={n} aria-expanded={k === i} onPointerEnter={() => setK(i)} onFocus={() => setK(i)} onClick={() => setK(k === i ? -1 : i)}><Ico n={n} /></button>)}</nav>
      {k >= 0 && <ul>{rows[k][1].map((t) => <li key={t}><a href="#fly" onClick={(e) => e.preventDefault()}>{t}</a></li>)}</ul>}
    </div>
  );
}
