import { useId } from 'react';
import c from './glyphs.module.css';

export function StencilCut() {
  const id = `st${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig} role="img" aria-label="Stencil letters, cut by moving bridges">
      <svg className={c.stencil} viewBox="0 0 120 56" aria-hidden="true">
        <defs>
          <mask id={id}>
            <rect width="120" height="56" fill="#fff" />
            <g className={c.bridges}>{[0, 1, 2, 3].map((i) => <rect key={i} x="0" y={6 + i * 12} width="120" height="2.6" fill="#000" />)}</g>
          </mask>
        </defs>
        <text x="60" y="44" textAnchor="middle" mask={`url(#${id})`}>Cut</text>
      </svg>
    </div>
  );
}
