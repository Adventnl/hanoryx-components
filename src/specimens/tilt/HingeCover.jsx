import { useToggle } from '../../stage/hooks';
import c from './tilt.module.css';

export function HingeCover() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A card with a cover that opens" onClick={flip}>
      <span className={c.stage}>
        <span className={c.book} data-on={on}>
          <i className={c.inner}><b>Inside</b></i>
          <i className={c.cover}><b>Cover</b></i>
        </span>
      </span>
    </button>
  );
}
