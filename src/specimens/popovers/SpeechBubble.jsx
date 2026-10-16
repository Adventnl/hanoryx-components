import { useState } from 'react';
import c from './popovers.module.css';

/* 8 */ export function SpeechBubble() {
  const [k, setK] = useState(0);
  const tails = ['bl', 'br', 'tl', 'tr'];
  return (
    <div className={c.col}>
      <p className={c.speech} data-t={tails[k]}>Say it in a bubble.</p>
      <button type="button" className={c.next} onClick={() => setK((k + 1) % 4)}>Move the tail</button>
    </div>
  );
}
