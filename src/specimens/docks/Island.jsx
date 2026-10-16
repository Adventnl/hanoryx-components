import { useState } from 'react';
import c from './docks.module.css';

/* 30 */ export function Island() {
  const [k, setK] = useState(0);
  const states = [['', ''], ['Now playing', '▶'], ['Timer 02:00', '◔'], ['Call in progress', '●']];
  return (
    <div className={c.island}>
      <button type="button" data-k={k} aria-label={`Island, ${states[k][0] || 'idle'}. Click to change`} onClick={() => setK((k + 1) % 4)}><span aria-hidden="true">{states[k][1]}</span><b>{states[k][0]}</b></button>
    </div>
  );
}
