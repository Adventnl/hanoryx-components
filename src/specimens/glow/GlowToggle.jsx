import { useToggle } from '../../stage/hooks';
import c from './glow.module.css';

export function GlowToggle() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" role="switch" aria-checked={on} aria-label="Glow switch" className={`${c.fig} ${c.reset}`} onClick={flip}>
      <span className={c.sw} data-on={on}><i /></span>
    </button>
  );
}
