import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../boards.module.css";
import { Bd, LANES } from "../shared";

/* 05 */ export function Swimlanes() {
  const [open, setOpen] = useState([0, 1]);
  const flip = (r) => setOpen((a) => (a.includes(r) ? a.filter((x) => x !== r) : [...a, r]));
  return (
    <Bd label="Swimlanes" className={c.swim}>
      {['Web', 'Mobile'].map((r, i) => (
        <div key={r} className={c.sl}>
          <button type="button" aria-expanded={open.includes(i)} onClick={() => flip(i)}><Ico n="down" />{r}</button>
          {open.includes(i) && <div className={c.slRow}>{LANES.map((l) => <span key={l} className={c.cd}>{l[0]}{i + 1}</span>)}</div>}
        </div>
      ))}
    </Bd>
  );
}
