import { useToggle } from '../../stage/hooks';
import c from './glyphs.module.css';

/* ---------- 02 anatomy and construction ---------- */

const PARTS = [['stem', 66, 72, 40, 60, 'end'], ['bowl', 110, 46, 132, 34, 'start'], ['counter', 88, 47, 132, 56, 'start'], ['leg', 101, 84, 132, 92, 'start'], ['foot', 62, 103, 40, 118, 'end']];

export function Anatomy() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Letter anatomy, show or hide the labels" onClick={flip}>
      <svg className={c.anat} viewBox="0 0 160 130" aria-hidden="true">
        <text className={c.anatR} x="80" y="104" textAnchor="middle">R</text>
        <g className={c.callouts} data-on={on}>
          {PARTS.map(([name, x, y, tx, ty, anchor]) => (
            <g key={name}>
              <line x1={x} y1={y} x2={tx} y2={ty} />
              <circle cx={x} cy={y} r="1.6" />
              <text x={tx + (anchor === 'end' ? -1.5 : 1.5)} y={ty + 1.4} textAnchor={anchor}>{name}</text>
            </g>
          ))}
        </g>
      </svg>
    </button>
  );
}
