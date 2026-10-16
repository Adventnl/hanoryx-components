import { useState } from 'react';
import c from './fields.module.css';

/* 14 */ export function AutoGrowArea() {
  const [t, setT] = useState('Type a few lines.\nThe box grows with them.');
  return (
    <div className={c.grow}>
      <textarea value={t} rows={2} aria-label="Auto-growing text" onChange={(e) => { setT(e.target.value); e.target.style.height = 'auto'; e.target.style.height = `${e.target.scrollHeight}px`; }} />
      <output>{t.length} CHARS · {t.split('\n').length} LINES</output>
    </div>
  );
}
