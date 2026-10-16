import { useState } from 'react';
import c from './signals.module.css';

/* 18 */ export function LampTest() {
  const [test, setTest] = useState(false);
  return (
    <div className={c.panel}>
      <span className={c.lens} data-on={test} aria-hidden="true" />
      <button type="button" aria-label="Lamp test, hold" onPointerDown={() => setTest(true)} onPointerUp={() => setTest(false)} onPointerLeave={() => setTest(false)} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setTest(true); }} onKeyUp={() => setTest(false)} onBlur={() => setTest(false)}>Test</button>
    </div>
  );
}
