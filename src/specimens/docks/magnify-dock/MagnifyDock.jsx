import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 1 */ export function MagnifyDock() {
  const [x, setX] = useState(null);
  const icons = ['home', 'folder', 'mail', 'camera', 'gear'];
  return (
    <div className={c.mag} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setX(((e.clientX - r.left) / r.width) * icons.length - 0.5); }} onPointerLeave={() => setX(null)} role="toolbar" aria-label="Magnifying dock">
      {icons.map((n, k) => (
        <button key={n} type="button" aria-label={n} style={{ '--s': x === null ? 0 : Math.max(0, 1 - Math.abs(k - x) * 0.55) }}><Ico n={n} /></button>
      ))}
    </div>
  );
}
