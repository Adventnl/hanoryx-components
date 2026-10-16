import { useToggle } from '../../stage/hooks';
import c from './glow.module.css';

export function LightSwitch() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Pull the cord to switch the light" onClick={flip}>
      <span className={c.lampBox} data-on={on}>
        <i className={c.pull} />
        <i className={c.hood} />
        <i className={c.ray} />
        <span className={`${c.card} ${c.dark}`}><b>{on ? 'Lit' : 'Dark'}</b></span>
      </span>
    </button>
  );
}
