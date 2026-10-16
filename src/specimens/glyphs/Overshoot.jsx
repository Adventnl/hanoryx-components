import { useToggle } from '../../stage/hooks';
import c from './glyphs.module.css';

export function Overshoot() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Optical overshoot, switch it on or off" onClick={flip}>
      <svg className={c.over} viewBox="0 0 120 70" aria-hidden="true">
        <line className={c.ovLine} x1="0" x2="120" y1="14" y2="14" /><line className={c.ovLine} x1="0" x2="120" y1="58" y2="58" />
        <path className={c.ovH} d="M14 14V58M38 14V58M14 36H38" />
        <ellipse className={c.ovO} data-on={on} cx="78" cy="36" rx="19" />
      </svg>
      <span className={c.note}>{on ? 'round letters overshoot' : 'no overshoot: they look short'}</span>
    </button>
  );
}
