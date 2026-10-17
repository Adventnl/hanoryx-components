import { useState } from 'react';
import { useDrag, useTick } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 33 */ export function KitchenTimer() {
  const [v, bind, set] = useDrag({ mode: 'r', range: 330, init: 0 });
  const [running, setRunning] = useState(false);
  const tick = useTick(1000);
  const [from, setFrom] = useState(0);
  const left = running ? Math.max(0, Math.round(v * 3600) - (tick - from)) : Math.round(v * 3600);
  return (
    <div className={c.timer}>
      <div className={c.knob} {...bind} aria-label="Timer dial" style={{ ...bind.style, '--v': v }}><b /></div>
      <output>{String(Math.floor(left / 60)).padStart(2, '0')}:{String(left % 60).padStart(2, '0')}</output>
      <button type="button" aria-pressed={running} onClick={() => { setFrom(tick); setRunning(!running); if (running) set(left / 3600); }}>{running ? 'STOP' : 'START'}</button>
    </div>
  );
}
