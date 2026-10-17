import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 39 */ export function EmptyState() {
  const [has, setHas] = useState(false);
  return (
    <Phone label="Empty state" className={c.center}>
      {has ? [0, 1, 2].map((k) => <span key={k} className={c.item}>Task {k + 1}</span>) : <><span className={c.art} style={{ background: '#3a3b42' }}><Ico n="list" /></span><b className={c.h}>Nothing yet</b></>}
      <button type="button" className={has ? c.ghost : c.btn} onClick={() => setHas((v) => !v)}>{has ? 'Clear' : 'Add a task'}</button>
    </Phone>
  );
}
