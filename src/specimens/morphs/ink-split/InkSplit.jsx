import { useId, useState } from 'react';
import c from "../morphs.module.css";
import { Goo } from "../shared";

/* 27 */ export function InkSplit() {
  const [on, setOn] = useState(false);
  const id = `g${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.stage}>
      <Goo id={id} std={6} />
      <button type="button" className={c.split} data-on={on} aria-pressed={on} aria-label="Ink drop. Click to split it" onClick={() => setOn((v) => !v)} style={{ filter: `url(#${id})` }}><i /><i /></button>
    </div>
  );
}
