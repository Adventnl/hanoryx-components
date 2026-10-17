import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 40 */ export function ReleaseTrain() {
  const [s, setS] = useState(1);
  const S = ['Plan', 'Build', 'Test', 'Ship'];
  return (
    <Bd label="Release train" className={c.train}>
      <div>{S.map((t, k) => <button key={t} type="button" data-done={k <= s} aria-current={k === s ? 'step' : undefined} onClick={() => setS(k)}><i />{t}</button>)}</div>
      <button type="button" className={c.add} onClick={() => setS((v) => (v + 1) % 4)}>Advance</button>
    </Bd>
  );
}
