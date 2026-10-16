import { useToggle } from '../../stage/hooks';
import c from './glyphs.module.css';

export function PaintOrder() {
  const [over, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={over} aria-label="Paint order: stroke over or under the fill" onClick={flip}>
      <svg className={c.paint} viewBox="0 0 120 56" aria-hidden="true"><text x="60" y="44" textAnchor="middle" style={{ paintOrder: over ? 'normal' : 'stroke fill' }}>Over</text></svg>
      <span className={c.note}>{over ? 'stroke over fill' : 'stroke under fill'}</span>
    </button>
  );
}
