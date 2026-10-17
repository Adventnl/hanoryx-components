import c from "../kinetic.module.css";

/* 20 */ const RING = 'ROTATE WITH THE WORLD · ';

export function RingLetters() {
  return (
    <div className={c.fig} role="img" aria-label="Letters turning in a ring">
      <div className={c.ring}>
        {[...RING].map((ch, i) => <span key={i} style={{ '--a': `${(i / RING.length) * 360}deg` }}>{ch === ' ' ? ' ' : ch}</span>)}
        <b>R</b>
      </div>
    </div>
  );
}
