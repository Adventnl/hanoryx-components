import { useToggle } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

export function PlayerTile() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Player; play or pause" onClick={flip}>
      <Tile k="Now playing">
        <span className={c.eq} data-on={on}>{[0, 1, 2, 3, 4, 5].map((i) => <i key={i} style={{ '--i': i }} />)}</span>
        <b className={c.v}>Quiet machine</b>
        <span className={c.pbar} data-on={on}><i /></span>
      </Tile>
    </button>
  );
}
