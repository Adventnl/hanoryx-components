import { useToggle } from '../../stage/hooks';
import c from './markup.module.css';

export function Overtype() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <span className={c.para}>The password is <span className={c.over} data-on={on}>swordfish<i aria-hidden="true">xxxxxxxxxxxxxx</i></span> today.</span>
    </button>
  );
}
