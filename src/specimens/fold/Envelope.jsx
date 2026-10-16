import { useToggle } from '../../stage/hooks';
import c from './fold.module.css';

export function Envelope() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="An envelope; open it" onClick={flip}>
      <span className={c.stage}>
        <span className={c.env} data-on={on}>
          <i className={c.note}><b>Letter</b></i>
          <i className={c.pocket} />
          <i className={c.flap} />
        </span>
      </span>
    </button>
  );
}
