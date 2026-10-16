import { useToggle } from '../../stage/hooks';
import c from './markup.module.css';

export function Spoiler() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <span className={c.para}>The butler did it, and then <span className={c.spoil} data-on={on}>handed in his notice at seven</span>.</span>
    </button>
  );
}
