import { useHot } from '../../stage/chartKit';
import c from './fold.module.css';

export function Shutters() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A window with two shutters" {...bind}>
      <span className={c.stage}>
        <span className={c.win}><i className={c.view}><b>View</b></i><i className={c.sl} /><i className={c.sr} /></span>
      </span>
    </button>
  );
}
