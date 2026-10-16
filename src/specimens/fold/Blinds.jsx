import { useHot } from '../../stage/chartKit';
import c from './fold.module.css';

export function Blinds() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Venetian blinds" {...bind}>
      <span className={c.stage}>
        <span className={c.win}>
          <i className={c.view}><b>Light</b></i>
          <span className={c.slats}>{[0, 1, 2, 3, 4, 5, 6].map((i) => <i key={i} style={{ '--i': i }} />)}</span>
        </span>
      </span>
    </button>
  );
}
