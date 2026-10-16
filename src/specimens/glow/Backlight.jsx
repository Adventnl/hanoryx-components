import { useHot } from '../../stage/chartKit';
import c from './glow.module.css';

export function Backlight() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.wrap}>
        <i className={c.bl} />
        <span className={`${c.card} ${c.plain}`}><b>Backlight</b><span>{hot ? 'on' : 'off'}</span></span>
      </span>
    </button>
  );
}
