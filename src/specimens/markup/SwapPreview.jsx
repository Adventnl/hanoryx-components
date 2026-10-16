import { useState } from 'react';
import c from './markup.module.css';

const SWAP = 'The belt keeps moving, and the belt does not ask why. Nobody has ever seen the belt stop.';

export function SwapPreview() {
  const [r, setR] = useState('tape');
  const parts = SWAP.split(/(belt)/g);
  return (
    <div className={c.fig}>
      <p className={c.para}>{parts.map((p, i) => (i % 2 ? <span key={i} className={c.swapPair}><del>{p}</del><ins>{r || '…'}</ins></span> : p))}</p>
      <label className={c.search}>
        <span>replace “belt” with</span>
        <input value={r} onChange={(e) => setR(e.target.value.slice(0, 12))} aria-label="Replacement for the word belt" spellCheck="false" autoComplete="off" />
      </label>
    </div>
  );
}
