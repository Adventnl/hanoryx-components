import { useState } from 'react';
import c from './dials.module.css';

/* 30 */ export function Roulette() {
  const [turn, setTurn] = useState(0);
  const [hit, setHit] = useState(null);
  const spin = () => {
    const to = Math.floor(Math.random() * 12);
    setTurn((t) => Math.ceil(t / 360) * 360 + 1080 + (360 - to * 30 - 15));
    setHit(to);
  };
  return (
    <div className={c.roulette}>
      <button type="button" aria-label="Spin the roulette wheel" onClick={spin} style={{ '--t': `${turn}deg` }}><i /></button>
      <u /><output>{hit === null ? 'SPIN' : `№ ${hit + 1}`}</output>
    </div>
  );
}
