import { useState } from 'react';
import { useTick } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 40 */ export function MasterChannel() {
  const [kids, setKids] = useState([true, false, true]);
  const all = kids.every(Boolean);
  const some = kids.some(Boolean);
  const tick = useTick(1400);
  return (
    <div className={c.master} data-tick={tick % 2}>
      <button type="button" role="checkbox" aria-checked={all ? 'true' : some ? 'mixed' : 'false'} aria-label="Master" className={c.mBox} data-s={all ? 2 : some ? 1 : 0} onClick={() => setKids(kids.map(() => !all))}><i /></button>
      <div>{kids.map((k, i) => <button type="button" key={i} aria-pressed={k} aria-label={`Channel ${i + 1}`} onClick={() => setKids(kids.map((x, j) => (j === i ? !x : x)))}>{i + 1}</button>)}</div>
    </div>
  );
}
