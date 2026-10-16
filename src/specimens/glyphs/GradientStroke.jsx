import { useId } from 'react';
import c from './glyphs.module.css';

export function GradientStroke() {
  const id = `gs${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig} role="img" aria-label="The word flow, outlined in a gradient that travels">
      <svg className={c.gstroke} viewBox="0 0 120 52" aria-hidden="true">
        <defs>
          <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="60" y2="0" spreadMethod="repeat">
            <stop offset="0" stopColor="#ff3333" /><stop offset="0.5" stopColor="#ffffff" /><stop offset="1" stopColor="#ff3333" />
            <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="60 0" dur="2.4s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        <text x="60" y="40" textAnchor="middle" stroke={`url(#${id})`}>Flow</text>
      </svg>
    </div>
  );
}
