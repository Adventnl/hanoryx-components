import { useToggle } from '../../stage/hooks';
import c from './tilt.module.css';

export function PopUpCard() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A pop-up card; open it" onClick={flip}>
      <span className={c.popup} data-on={on}>
        <i className={c.pBase} />
        <i className={`${c.pFig} ${c.p1}`} /><i className={`${c.pFig} ${c.p2}`} /><i className={`${c.pFig} ${c.p3}`} />
      </span>
    </button>
  );
}
