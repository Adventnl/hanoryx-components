import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 28 */ export function Ribbon() {
  const [t, setT] = useState(0);
  const groups = [[['pen', 'copy'], ['bold', 'italic']], [['image', 'link'], ['list', 'grid']], [['eye', 'lock'], ['flag', 'pin']]];
  return (
    <div className={c.ribbon}>
      <div role="tablist" aria-label="Ribbon tabs">{['Home', 'Insert', 'View'].map((n, i) => <button key={n} type="button" role="tab" aria-selected={i === t} onClick={() => setT(i)}>{n}</button>)}</div>
      <div role="toolbar" aria-label={`${['Home', 'Insert', 'View'][t]} tools`}>{groups[t].map((g, gi) => <span key={gi}>{g.map((n) => <button key={n} type="button" aria-label={n}><Ico n={n} /></button>)}</span>)}</div>
    </div>
  );
}
