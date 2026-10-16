import { useId, useState } from 'react';
import c from './gauges.module.css';

/* 9 */ const GLASS = 'M10 5H50V15C50 30 36 38 33 45C36 52 50 60 50 75V85H10V75C10 60 24 52 27 45C24 38 10 30 10 15Z';

export function Hourglass() {
  const id = useId().replace(/\W/g, '');
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.glass} aria-label="Hourglass, click to turn it over" onClick={() => setN(n + 1)}>
      <svg viewBox="0 0 60 90" aria-hidden="true" style={{ transform: `rotate(${n * 180}deg)` }}>
        <defs>
          <clipPath id={`${id}t`}><path d="M10 5H50V15C50 30 36 38 33 45H27C24 38 10 30 10 15Z" /></clipPath>
          <clipPath id={`${id}b`}><path d="M27 45H33C36 52 50 60 50 75V85H10V75C10 60 24 52 27 45Z" /></clipPath>
        </defs>
        <g key={n} className={c.sand} data-flip={n % 2}>
          <g clipPath={`url(#${id}t)`}><rect className={c.top} x="8" y="5" width="44" height="40" /></g>
          <g clipPath={`url(#${id}b)`}><rect className={c.bottom} x="8" y="45" width="44" height="40" /></g>
          <path className={c.stream} d="M30 44V83" />
        </g>
        <path className={c.rim} d={GLASS} />
        <path className={c.capLine} d="M6 3H54M6 87H54" />
      </svg>
    </button>
  );
}
