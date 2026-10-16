import c from './bento.module.css';
import { Tile } from './shared';

const LOADS = [['Belt', 82], ['Gate', 54], ['Tea', 31], ['Mill', 67]];

export function LoadBarsTile() {
  return (
    <div className={c.fig} role="img" aria-label="Four load bars filling in turn">
      <Tile k="Load">
        <span className={c.lbars}>{LOADS.map(([n, v], i) => <i key={n} style={{ '--w': `${v}%`, '--i': i }}><span>{n}</span></i>)}</span>
      </Tile>
    </div>
  );
}
