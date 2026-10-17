import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../archive.module.css";
import { step } from "../shared";

/* 37 */ export function CombinationLock() {
  const [d, setD] = useState([3, 1, 4]);
  const bump = (i, by) => setD((a) => a.map((v, k) => (k === i ? step(v, by, 10) : v)));
  const open = d.join('') === '314';
  return (
    <div className={c.combo} data-open={open}>
      <div>{d.map((v, i) => (
        <span key={i}>
          <button type="button" aria-label={`Raise wheel ${i + 1}`} onClick={() => bump(i, 1)}><Ico n="up" /></button>
          <b>{v}</b>
          <button type="button" aria-label={`Lower wheel ${i + 1}`} onClick={() => bump(i, -1)}><Ico n="down" /></button>
        </span>
      ))}</div>
      <small>{open ? 'unlocked' : 'locked'}</small>
    </div>
  );
}
