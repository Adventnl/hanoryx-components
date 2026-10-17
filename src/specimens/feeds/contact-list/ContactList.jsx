import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Av, Fd, NAMES } from "../shared";

/* 01 */ export function ContactList() {
  const [s, setS] = useState(1);
  return <Fd label="Contacts" className={c.list}>{NAMES.slice(0, 4).map((n, k) => <button key={n} type="button" className={c.row} aria-pressed={s === k} onClick={() => setS(k)}><Av h={k * 70} s={n[0]} /><span><em>{n}</em><small>{['Design', 'Ops', 'Eng', 'Sales'][k]}</small></span>{s === k ? <Ico n="check" /> : null}</button>)}</Fd>;
}
