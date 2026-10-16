import { useState } from 'react';
import c from './signals.module.css';
import { STATES } from './shared';

/* 1 */ export function LEDLamp() {
  const [k, setK] = useState(0);
  return <button type="button" className={c.ledBtn} aria-label={`LED, ${STATES[k][1]}. Press to change`} onClick={() => setK((k + 1) % 4)}><i className={c.led} data-t={STATES[k][0]} /><span>{STATES[k][1]}</span></button>;
}
