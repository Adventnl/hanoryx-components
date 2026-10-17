import { useId } from 'react';
import c from "../stamps.module.css";

/* 04 */ export function RingSeal() {
  const id = useId();
  return (
    <div className={c.ringSeal} role="img" aria-label="A round seal with turning text">
      <svg viewBox="0 0 100 100">
        <defs><path id={`rs${id}`} d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
        <g className={c.turn}><text><textPath href={`#rs${id}`}>HANORYX SYSTEMS · EST. 2019 · MADE TO LAST ·</textPath></text></g>
        <circle cx="50" cy="50" r="26" className={c.rule} />
        <path d="M50 33l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z" className={c.star} />
      </svg>
    </div>
  );
}
