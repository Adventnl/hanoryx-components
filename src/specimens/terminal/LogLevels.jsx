import { useState } from 'react';
import c from './terminal.module.css';

const SET = [['INFO', 'server started'], ['DEBUG', 'config loaded'], ['WARN', 'disk 87% full'], ['INFO', 'GET /api 200'], ['ERROR', 'db refused'], ['INFO', 'GET /api 200'], ['WARN', 'retry 2/5'], ['ERROR', 'timeout']];

/* 06 */ export function LogLevels() {
  const [on, setOn] = useState(['INFO', 'WARN', 'ERROR']);
  const flip = (l) => setOn((a) => (a.includes(l) ? a.filter((x) => x !== l) : [...a, l]));
  return (
    <div className={c.win}>
      <div className={c.chips} role="group" aria-label="Show levels">
        {['DEBUG', 'INFO', 'WARN', 'ERROR'].map((l) => <button key={l} type="button" className={c.chip} data-lv={l} aria-pressed={on.includes(l)} onClick={() => flip(l)}>{l}</button>)}
      </div>
      <div className={c.scroll}>
        {SET.filter(([l]) => on.includes(l)).map(([l, m], i) => <p key={`${l}${i}`} className={c.ln} data-lv={l}><b>{l}</b> {m}</p>)}
      </div>
    </div>
  );
}
