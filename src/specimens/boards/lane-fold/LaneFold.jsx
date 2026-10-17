import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, LANES } from "../shared";

/* 11 */ export function LaneFold() {
  const [shut, setShut] = useState([1]);
  const flip = (k) => setShut((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <Bd label="Collapsible lanes" className={c.foldRow}>
      {LANES.map((l, k) => <div key={l} className={c.fl} data-shut={shut.includes(k)}><button type="button" aria-expanded={!shut.includes(k)} aria-label={l} onClick={() => flip(k)}><span>{l}</span></button>{!shut.includes(k) && <><i className={c.cd}>A</i><i className={c.cd}>B</i></>}</div>)}
    </Bd>
  );
}
