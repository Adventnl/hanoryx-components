import { useToggle } from '../../stage/hooks';
import c from './fold.module.css';

export function HandFan() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A fan; open it" onClick={flip}>
      <span className={c.fan} data-on={on}>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <i key={i} style={{ '--i': i }} />)}
      </span>
    </button>
  );
}
