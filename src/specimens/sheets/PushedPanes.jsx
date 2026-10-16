import { useState } from 'react';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 7 */ export function PushedPanes() {
  const [d, setD] = useState(0);
  return (
    <Stage label="Pushed panes">
      <div className={c.pushes}>{[0, 1, 2].map((k) => <section key={k} style={{ '--k': k, '--d': d - k }} aria-hidden={k !== d}><b>Pane {k + 1}</b>{k < 2 && <button type="button" tabIndex={k === d ? 0 : -1} onClick={() => setD(k + 1)}>Push</button>}{k > 0 && <button type="button" tabIndex={k === d ? 0 : -1} onClick={() => setD(k - 1)}>Back</button>}</section>)}</div>
    </Stage>
  );
}
