import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 02 */ export function LetterGroups() {
  const G = [['A', ['Ana', 'Anders']], ['K', ['Kofi']], ['M', ['Mara', 'Milo']]];
  return <Fd label="Grouped list" className={c.list}>{G.map(([l, ns]) => <div key={l}><b className={c.hd}>{l}</b>{ns.map((n) => <span key={n} className={c.plain}>{n}</span>)}</div>)}</Fd>;
}
