import { useState } from 'react';
import c from "../feeds.module.css";
import { Av, Fd, cx } from "../shared";

/* 39 */ export function CommentTree() {
  const [open, setOpen] = useState([0]);
  const C = [['Ana', 'Great news!', ['Kofi', 'Agreed']], ['Mara', 'When is the demo?', ['Ravi', 'Friday']]];
  return (
    <Fd label="Comment tree" className={c.list}>
      {C.map(([a, t, [b, r]], k) => <div key={a}><div className={c.cmt}><Av h={k * 90} s={a[0]} /><span><em>{a}</em>{t}</span></div><button type="button" className={c.fold} aria-expanded={open.includes(k)} onClick={() => setOpen((x) => (x.includes(k) ? x.filter((y) => y !== k) : [...x, k]))}>1 reply</button>{open.includes(k) && <div className={cx(c.cmt, c.nest)}><Av h={k * 90 + 40} s={b[0]} /><span><em>{b}</em>{r}</span></div>}</div>)}
    </Fd>
  );
}
