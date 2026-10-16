import { useState } from 'react';
import c from './keypads.module.css';

/* 14 */ export function SoftKeys() {
  const [k, setK] = useState('—');
  return (
    <div className={c.soft}>
      <output>{k}</output>
      <div>{['BACK', 'SELECT', 'MORE'].map((t) => <button type="button" key={t} aria-label={t} onClick={() => setK(t)}>{t}</button>)}</div>
    </div>
  );
}
