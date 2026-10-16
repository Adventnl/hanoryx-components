import { useState } from 'react';
import c from './keypads.module.css';

/* 23 */ export function AsyncButton() {
  const [st, setSt] = useState('idle');
  const go = () => {
    if (st !== 'idle') return;
    setSt('busy');
    window.setTimeout(() => { setSt('done'); window.setTimeout(() => setSt('idle'), 1400); }, 1100);
  };
  return <button type="button" className={c.asyncBtn} data-s={st} onClick={go} aria-live="polite"><i /><span>{st === 'idle' ? 'Save' : st === 'busy' ? 'Saving' : 'Saved'}</span></button>;
}
