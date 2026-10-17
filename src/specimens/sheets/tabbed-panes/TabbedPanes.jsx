import { useState } from 'react';
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 32 */ export function TabbedPanes() {
  const [k, setK] = useState(0);
  return (
    <Stage label="Tabbed panes">
      <div className={c.tabbed}><div role="tablist" aria-label="Panes">{['One', 'Two', 'Three'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)}>{t}</button>)}</div><section style={{ '--k': k }}>{['Pane one', 'Pane two', 'Pane three'].map((t) => <p key={t}>{t}</p>)}</section></div>
    </Stage>
  );
}
