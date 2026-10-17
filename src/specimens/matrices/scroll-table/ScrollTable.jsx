import { pad2 } from "../../../stage/hooks";
import c from "../matrices.module.css";

/* 6 */ const LOG = Array.from({ length: 24 }, (_, i) => [`R${pad2(i + 1)}`, Math.round(20 + 60 * Math.abs(Math.sin(i * 1.3))), i % 5 === 0]);

export function ScrollTable() {
  return (
    <div className={c.scrollTbl} role="region" aria-label="Scrolling table with a fixed header" tabIndex={0}>
      <table>
        <thead><tr><th>Row</th><th>Load</th><th>Flag</th></tr></thead>
        <tbody>{LOG.map(([n, v, f]) => <tr key={n}><td>{n}</td><td><i style={{ '--v': v / 100 }} />{v}</td><td>{f ? '●' : ''}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
