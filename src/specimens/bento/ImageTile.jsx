import { useHot } from '../../stage/chartKit';
import c from './bento.module.css';

export function ImageTile() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A picture that zooms and shows its caption" {...bind}>
      <span className={`${c.tile} ${c.imgTile}`}><i className={c.art} /><span className={c.cap}>Fig. 1 — The belt, from the gate</span></span>
    </button>
  );
}
