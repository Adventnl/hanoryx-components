import { useToggle } from '../../stage/hooks';
import c from './fold.module.css';

export function GarageDoor() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A sectional door; raise it" onClick={flip}>
      <span className={c.garage} data-on={on}>
        <i className={c.inside}>Inside</i>
        {[0, 1, 2, 3].map((i) => <i key={i} className={c.gp} style={{ '--i': i }} />)}
      </span>
    </button>
  );
}
