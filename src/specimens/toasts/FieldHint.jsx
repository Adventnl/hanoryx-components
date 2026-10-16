import { useState } from 'react';
import c from './toasts.module.css';

/* 34 */ export function FieldHint() {
  const [v, setV] = useState('ada');
  const bad = v.length < 4;
  return (
    <label className={c.field} data-bad={bad}>
      <span>Handle</span>
      <input value={v} onChange={(e) => setV(e.target.value)} aria-invalid={bad} aria-describedby="hint-34" />
      <small id="hint-34" role={bad ? 'alert' : undefined}>{bad ? 'At least four characters.' : 'Looks good.'}</small>
    </label>
  );
}
