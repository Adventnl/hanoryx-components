import { useState } from 'react';
import c from './glyphs.module.css';

export function TypeTester() {
  const [t, setT] = useState('Sphinx of black quartz');
  return (
    <div className={c.fig}>
      <div className={c.tester}>
        <p className={c.t1}>{t || ' '}</p>
        <p className={c.t2}>{t || ' '}</p>
        <p className={c.t3}>{t || ' '}</p>
      </div>
      <input className={c.input} value={t} maxLength={24} onChange={(e) => setT(e.target.value)} aria-label="Text to set in three typefaces" spellCheck="false" autoComplete="off" />
    </div>
  );
}
