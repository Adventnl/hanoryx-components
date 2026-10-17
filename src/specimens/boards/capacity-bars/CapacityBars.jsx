import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 38 */ export function CapacityBars() {
  const [load, setLoad] = useState([3, 5, 2, 4]);
  const P = ['Ana', 'Kofi', 'Mara', 'Ravi'];
  return (
    <Bd label="Capacity" className={c.cap}>
      {P.map((p, k) => <button key={p} type="button" aria-label={`${p} has ${load[k]} of 5. Add a task`} onClick={() => setLoad((a) => a.map((x, i) => (i === k ? (x >= 7 ? 1 : x + 1) : x)))}><small>{p}</small><span><i data-over={load[k] > 5} style={{ width: `${(load[k] / 7) * 100}%` }} /><u /></span><em>{load[k]}</em></button>)}
    </Bd>
  );
}
