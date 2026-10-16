import { useToggle } from '../../stage/hooks';
import c from './fold.module.css';

export function Clamshell() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A clamshell case; open it" onClick={flip}>
      <span className={c.stage}>
        <span className={c.shell} data-on={on}>
          <i className={c.base}><b>Screen</b></i>
          <i className={c.lid}><b>Lid</b></i>
        </span>
      </span>
    </button>
  );
}
