import { useState } from 'react';
import c from "../menus.module.css";

/* 41 */ export function MagneticMenu() {
  const [at, setAt] = useState(-1);
  return (
    <ul className={c.magnet} onPointerLeave={() => setAt(-1)} aria-label="Magnetic menu">
      {['Alpha', 'Beta', 'Gamma', 'Delta'].map((t, i) => <li key={t}><a href="#magnet" onPointerEnter={() => setAt(i)} onFocus={() => setAt(i)} onClick={(e) => e.preventDefault()}>{t}</a></li>)}
      <i style={{ '--at': at < 0 ? 0 : at, opacity: at < 0 ? 0 : 1 }} aria-hidden="true" />
    </ul>
  );
}
