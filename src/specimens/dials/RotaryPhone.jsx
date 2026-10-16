import { useState } from 'react';
import c from './dials.module.css';

/* 16 */ export function RotaryPhone() {
  const [rot, setRot] = useState(0);
  const [out, setOut] = useState('');
  const dial = (n) => {
    setRot(28 + n * 26);
    setOut((s) => (s + n).slice(-6));
    window.setTimeout(() => setRot(0), 420);
  };
  return (
    <div className={c.phone}>
      <div className={c.disc} style={{ '--r': `${rot}deg` }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n, i) => <button type="button" key={n} aria-label={`Dial ${n}`} style={{ '--i': i }} onClick={() => dial(n)}>{n}</button>)}
      </div>
      <output>{out || '—'}</output>
    </div>
  );
}
