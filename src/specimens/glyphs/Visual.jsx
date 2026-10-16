import { useId } from 'react';
import c from './glyphs.module.css';
import { code } from './shared';

/* ---------- the still side ---------- */

const GLYPHS = ['A', 'g', 'R', 'S', 'e', 'Q', '&', '7'];

/* baseline at y = 88, size 100: Cormorant's ascender .73, cap .63, x .39, descender .28 */
const GUIDES = [['ASC', 15, '0.73'], ['CAP', 25, '0.63'], ['X', 49, '0.39'], ['BASE', 88, '0'], ['DESC', 116, '-0.28']];

export function Visual() {
  const uid = useId().replace(/\W/g, '');
  return (
    <svg className={c.sheet} viewBox="0 0 100 140" aria-hidden="true">
      <defs>
        {GLYPHS.map((_, k) => <clipPath key={k} id={`${uid}-${k}`}><rect className={c.wipe} style={{ '--k': k }} x="0" y="0" width="100" /></clipPath>)}
      </defs>
      {GUIDES.map(([name, y, v]) => (
        <g key={name} className={c.guide} data-base={name === 'BASE'}>
          <line x1="0" x2="100" y1={y} y2={y} />
          <text x="1" y={y - 1}>{name}</text>
          <text x="99" y={y - 1} textAnchor="end">{v}</text>
        </g>
      ))}
      {GLYPHS.map((ch, k) => (
        <g key={ch} className={c.glyph} style={{ '--k': k }}>
          <text className={c.gOut} x="50" y="88" textAnchor="middle">{ch}</text>
          <text className={c.gFill} x="50" y="88" textAnchor="middle" clipPath={`url(#${uid}-${k})`}>{ch}</text>
          <rect className={c.scan} x="0" y="0" width="100" height="0.6" />
          <text className={c.gCode} x="50" y="132" textAnchor="middle">{code(ch)}</text>
        </g>
      ))}
      <g>
        {GLYPHS.map((ch, k) => <text key={ch} className={c.stripCh} style={{ '--k': k }} x={50 + (k - 3.5) * 11} y="139">{ch}</text>)}
      </g>
    </svg>
  );
}
