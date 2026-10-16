import { useState } from 'react';
import c from './morphs.module.css';
import { TAU, useTween } from './shared';

const SINE = Array.from({ length: 24 }, (_, i) => 32 + Math.sin((i / 23) * TAU * 1.5) * 22);

const SQUARE = Array.from({ length: 24 }, (_, i) => 32 + (Math.sin((i / 23) * TAU * 1.5) > 0 ? -22 : 22));

const FLAT = Array.from({ length: 24 }, () => 32);

const SAW = Array.from({ length: 24 }, (_, i) => 54 - ((i * 1.5) % 22) * 2);

const WAVES = [['sine', SINE], ['square', SQUARE], ['flat', FLAT], ['saw', SAW]];

/* 21 */ export function WaveToFlat() {
  const [i, setI] = useState(0);
  const y = useTween(WAVES[i][1], 650);
  const d = y.map((v, k) => `${k ? 'L' : 'M'}${6 + (k / 23) * 98} ${v.toFixed(1)}`).join('');
  return (
    <button type="button" className={c.svgBtn} onClick={() => setI((v) => (v + 1) % 4)} aria-label={`Wave outline: ${WAVES[i][0]}. Click for the next one`}>
      <svg viewBox="0 0 110 64"><path d={d} /></svg><small>{WAVES[i][0]}</small>
    </button>
  );
}
