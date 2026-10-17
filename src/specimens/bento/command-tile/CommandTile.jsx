import c from "../bento.module.css";
import { Tile } from "../shared";

export function CommandTile() {
  return (
    <div className={c.fig} role="img" aria-label="A command line typing a status command">
      <Tile k="Command">
        <p className={c.cmd}><span>$</span> status --all<i /></p>
        <p className={c.out}>belt   ok<br />gates  ok<br />tea    low</p>
      </Tile>
    </div>
  );
}
