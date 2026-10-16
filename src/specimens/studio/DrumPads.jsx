import { useState } from 'react';
import { useCycle } from '../../stage/hooks';
import c from './studio.module.css';

/* 29 */ export function DrumPads() {
  const [hit, setHit] = useState(-1);
  const auto = useCycle(16, 450);
  return (
    <div className={c.pads} role="group" aria-label="Drum pads">
      {Array.from({ length: 16 }, (_, k) => <button key={k} type="button" aria-label={`Pad ${k + 1}`} data-hit={hit === k || (hit < 0 && auto === ((k * 5) % 16))} onPointerDown={() => setHit(k)} onPointerUp={() => setHit(-1)} onPointerLeave={() => setHit(-1)} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setHit(k); }} onKeyUp={() => setHit(-1)} />)}
    </div>
  );
}
