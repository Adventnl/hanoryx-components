import { useState } from 'react';
import c from "../passes.module.css";

/* 12 */
export function NameSticker() {
  const [name, setName] = useState('Ada');
  return (
    <div className={c.fig}>
      <div className={c.ns} style={{ '--n': Math.max(5, name.length) }}>
        <b>Hello</b>
        <span className={c.nsLine}>my name is</span>
        <span className={c.nsName} key={name.length}>{name.trim() || '…'}</span>
      </div>
      <label className={c.nsField}>
        <span className={c.k}>Name</span>
        <input value={name} maxLength={14} onChange={(e) => setName(e.target.value)} aria-label="Name for the sticker" spellCheck="false" autoComplete="off" />
      </label>
    </div>
  );
}
