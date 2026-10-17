import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 04 */ export function ReorderList() {
  const [l, setL] = useState(['Intro', 'Pricing', 'FAQ', 'Contact']);
  const mv = (i, d) => setL((a) => { const b = [...a]; const j = i + d; if (j < 0 || j >= b.length) return a; [b[i], b[j]] = [b[j], b[i]]; return b; });
  return (
    <Fd label="Reorder list" className={c.list}>
      {l.map((t, i) => <div key={t} className={c.row}><span>{t}</span><span className={c.ud}><button type="button" aria-label={`Move ${t} up`} disabled={i === 0} onClick={() => mv(i, -1)}><Ico n="up" /></button><button type="button" aria-label={`Move ${t} down`} disabled={i === l.length - 1} onClick={() => mv(i, 1)}><Ico n="down" /></button></span></div>)}
    </Fd>
  );
}
