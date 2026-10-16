import { useState } from 'react';
import c from './tickers.module.css';

const SLOT_N = 10;

const REELS = [0, 1, 2];

const STRIP = Array.from({ length: SLOT_N * 3 }, (_, i) => i % SLOT_N);

export function SlotReel() {
  const [s, setS] = useState({ k: 0, from: [0, 0, 0], to: [0, 0, 0] });
  const spin = () => setS((v) => {
    const rest = v.to.map((x) => x % SLOT_N);
    return { k: v.k + 1, from: rest, to: rest.map((x, r) => x + 10 + ((v.k * 7 + r * 5 + 3) % 10)) };
  });
  const shown = s.to.map((x) => x % SLOT_N);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} onClick={spin} aria-label={`Spin the reels. Showing ${shown.join(' ')}`}>
      <span className={c.reels} style={{ '--fs': '11cqw' }}>
        {REELS.map((r) => (
          <span key={`${r}-${s.k}`} className={c.reel} style={{ '--a': s.from[r], '--b': s.to[r], '--dur': `${1.1 + r * 0.4}s` }}>
            <span className={c.strip3}>{STRIP.map((d, i) => <i key={i}>{d}</i>)}</span>
          </span>
        ))}
      </span>
      <span className={c.lever}>SPIN</span>
    </button>
  );
}
