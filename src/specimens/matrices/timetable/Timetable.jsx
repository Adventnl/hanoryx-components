import { useState } from 'react';
import { rng } from "../../../stage/hooks";
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 28 */ const BUSY_START = (() => {
  const r = rng(28);
  return Array.from({ length: 30 }, () => r() < 0.34);
})();

const DAYS5 = ['M', 'T', 'W', 'T', 'F'];

export function Timetable() {
  const [busy, setBusy] = useState(BUSY_START);
  const [at, bind] = useCell(6, 5, (r, k) => setBusy((b) => b.map((x, i) => (i === r * 5 + k ? !x : x))));
  return (
    <div className={c.box}>
      <div className={c.ttWrap}>
        <span>{DAYS5.map((d, i) => <em key={i}>{d}</em>)}</span>
        <div className={c.slots} {...bind} aria-label="Timetable, click a slot to mark it busy or free">
          {busy.map((b, i) => <i key={i} data-busy={b} data-at={i === at[0] * 5 + at[1]} />)}
        </div>
      </div>
      <output className={c.out}><b>{busy.filter((x) => !x).length}</b> slots free</output>
    </div>
  );
}
