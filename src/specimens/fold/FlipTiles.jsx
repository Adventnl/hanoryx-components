import { useCell } from '../../stage/chartKit';
import c from './fold.module.css';

export function FlipTiles() {
  const [at, bind] = useCell(2, 4, null);
  const L = [...'FOLDFLIP'];
  return (
    <div className={c.fig}>
      <div {...bind} className={c.tiles} aria-label="Tiles that flip as the pointer crosses them">
        {L.map((ch, i) => <i key={i} data-on={at[0] === Math.floor(i / 4) && at[1] === i % 4}><b>{ch}</b></i>)}
      </div>
    </div>
  );
}
