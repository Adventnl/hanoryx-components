import { useToggle } from '../../stage/hooks';
import c from './markup.module.css';

export function StrikeDraw() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <span className={c.para}>The old timetable <s className={c.strike} data-on={on}>said the belt would stop at six</s> and so it did not.</span>
    </button>
  );
}
