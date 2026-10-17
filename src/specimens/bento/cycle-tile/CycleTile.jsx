import { useCycle } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

/* the last one is a small loop of its own */
const CYC = ['Plan', 'Build', 'Ship', 'Watch'];

export function CycleTile() {
  const k = useCycle(CYC.length, 1400);
  return (
    <div className={c.fig} role="img" aria-label={`A cycle currently at ${CYC[k]}`}>
      <Tile k="Cycle">
        <span className={c.cycle}>{CYC.map((n, i) => <i key={n} data-on={i === k}>{n}</i>)}</span>
      </Tile>
    </div>
  );
}
