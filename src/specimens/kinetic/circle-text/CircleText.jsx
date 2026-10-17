import { useId } from 'react';
import c from "../kinetic.module.css";

/* 17 */ export function CircleText() {
  const id = `ct${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig} role="img" aria-label="Round and round, written around a circle">
      <svg className={c.circleSvg} viewBox="0 0 100 100" aria-hidden="true">
        <defs><path id={id} d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs>
        <g className={c.spin}><text><textPath href={`#${id}`} textLength="224">ROUND AND ROUND AND ROUND ·</textPath></text></g>
        <circle cx="50" cy="50" r="3" className={c.dotR} />
      </svg>
    </div>
  );
}
