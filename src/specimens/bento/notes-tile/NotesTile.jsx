import { useState } from 'react';
import c from "../bento.module.css";
import { Tile } from "../shared";

/* ---------- 03 inputs and small apps ---------- */

export function NotesTile() {
  const [t, setT] = useState('Check the belt before seven.');
  const words = t.trim() ? t.trim().split(/\s+/).length : 0;
  return (
    <div className={c.fig}>
      <Tile k={`Notes · ${words} words`}>
        <textarea className={c.area} value={t} onChange={(e) => setT(e.target.value)} rows={3} aria-label="Notes" spellCheck="false" />
      </Tile>
    </div>
  );
}
