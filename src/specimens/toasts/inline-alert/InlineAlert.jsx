import { useState } from 'react';
import c from "../toasts.module.css";

/* 12 */ export function InlineAlert() {
  const [k, setK] = useState(0);
  const kinds = [['Heads up', 'Backups run at night.', c.aInfo], ['Done', 'Your changes are live.', c.aOk], ['Careful', 'This cannot be undone.', c.aWarn], ['Failed', 'We could not save that.', c.aBad]];
  return (
    <div className={c.alerts}>
      <div role="group" aria-label="Alert type">{kinds.map(([t], i) => <button key={t} type="button" aria-pressed={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
      <div role="alert" className={`${c.alert} ${kinds[k][2]}`} key={k}><b>{kinds[k][0]}</b><span>{kinds[k][1]}</span></div>
    </div>
  );
}
