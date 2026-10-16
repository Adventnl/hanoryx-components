import { useHot } from '../../stage/chartKit';
import c from './tilt.module.css';

export function DoorCard() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A card with a door" {...bind}>
      <span className={c.stage}>
        <span className={c.doorway}>
          <i className={c.room}>Light</i>
          <i className={c.door} />
        </span>
      </span>
    </button>
  );
}
