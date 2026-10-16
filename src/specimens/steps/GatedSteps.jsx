import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './steps.module.css';

/* 39 */ export function GatedSteps() {
  const [open, setOpen] = useState(1);
  return (
    <ol className={c.gates} aria-label="Gated steps">
      {['Welcome', 'Terms', 'Profile', 'Launch'].map((t, k) => <li key={t} data-locked={k > open}><button type="button" disabled={k > open} onClick={() => k === open && setOpen(open + 1 > 3 ? 1 : open + 1)}><Ico n={k > open ? 'lock' : 'check'} />{t}</button></li>)}
    </ol>
  );
}
