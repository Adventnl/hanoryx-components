import { useId } from 'react';
import c from "../kinetic.module.css";

/* 35 */ export function LiquidWobble() {
  const id = `lw${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig} role="img" aria-label="Liquid, wobbling">
      <svg className={c.liquidSvg} viewBox="0 0 160 60" aria-hidden="true">
        <defs>
          <filter id={id}>
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.05" numOctaves="2" result="n"><animate attributeName="baseFrequency" values="0.012 0.05;0.02 0.07;0.012 0.05" dur="7s" repeatCount="indefinite" /></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
          </filter>
        </defs>
        <text x="80" y="44" textAnchor="middle" filter={`url(#${id})`} className={c.liquidText}>LIQUID</text>
      </svg>
    </div>
  );
}
