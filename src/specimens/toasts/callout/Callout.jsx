import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../toasts.module.css";

/* 13 */ export function Callout() {
  const [k, setK] = useState(0);
  const kinds = [['Note', 'pen', 'Notes sit quietly beside the text.'], ['Tip', 'bolt', 'Press ? to see every shortcut.'], ['Warning', 'flag', 'Deleting a project deletes its files.']];
  return (
    <div className={c.callout}>
      <div role="tablist" aria-label="Callout kind">{kinds.map(([t], i) => <button key={t} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
      <aside data-k={k}><Ico n={kinds[k][1]} /><div><b>{kinds[k][0]}</b><p>{kinds[k][2]}</p></div></aside>
    </div>
  );
}
