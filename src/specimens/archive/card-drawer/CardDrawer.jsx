import { useState } from 'react';
import c from "../archive.module.css";

/* 02 */ export function CardDrawer() {
  const [s, setS] = useState(3);
  return (
    <div className={c.drawerRow} role="group" aria-label="Card drawer">
      {'ABCDEFGH'.split('').map((l, i) => <button key={l} type="button" className={c.slim} aria-pressed={s === i} aria-label={`Card ${l}`} onClick={() => setS(i)}><b>{l}</b></button>)}
    </div>
  );
}
