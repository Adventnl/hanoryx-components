import { useState } from 'react';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 24 */ export function FlashMessage() {
  const [k, setK] = useState(0);
  return (
    <div className={c.stage}>
      <Fire onClick={() => setK(k + 1)}>Flash</Fire>
      {k > 0 && <p key={k} role="status" className={c.flash}>Link copied to clipboard</p>}
    </div>
  );
}
