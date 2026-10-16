import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 15 */ export function DismissibleBanner() {
  const [on, setOn] = useState(true);
  return (
    <div className={c.dismiss}>
      <div className={c.collapse} data-open={on}><div role="note"><span>Free shipping this week.</span><button type="button" aria-label="Dismiss banner" onClick={() => setOn(false)}><Ico n="close" /></button></div></div>
      {!on && <Fire onClick={() => setOn(true)}>Bring back</Fire>}
    </div>
  );
}
