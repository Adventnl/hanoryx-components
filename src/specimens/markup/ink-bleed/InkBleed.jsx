import { useId } from 'react';
import c from "../markup.module.css";

export function InkBleed() {
  const id = `bleed${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig} role="img" aria-label="Text whose edges bleed like ink on paper">
      <svg className={c.defs} width="0" height="0" aria-hidden="true" focusable="false">
        <filter id={id} x="-5%" y="-20%" width="110%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3"><animate attributeName="scale" values="2;5;2" dur="5s" repeatCount="indefinite" /></feDisplacementMap>
        </filter>
      </svg>
      <p className={c.bleed} style={{ filter: `url(#${id})` }} aria-hidden="true">Inked, never quite sharp.</p>
    </div>
  );
}
