import c from "../charts.module.css";
import { useScan } from "../shared";

/* 29 */ const MOSAIC = [[30, [50, 30, 20]], [22, [40, 40, 20]], [18, [60, 25, 15]], [16, [30, 50, 20]], [14, [45, 35, 20]]];

const MOSAIC_EDGES = MOSAIC.map((_, i) => MOSAIC.slice(0, i + 1).reduce((a, [w]) => a + w, 0) / 100);

export function MosaicColumns() {
  const [i, bind] = useScan(5, { edges: MOSAIC_EDGES, label: (k) => `Column ${k + 1}, width ${MOSAIC[k][0]}` });
  return (
    <div className={c.ch} {...bind} aria-label="Mosaic columns, move across them">
      <div className={c.mosaic}>
        {MOSAIC.map(([w, parts], k) => (
          <span key={k} data-hot={k === i} style={{ flexBasis: `${w}%` }}>
            {parts.map((h, j) => <i key={j} style={{ flexBasis: `${h}%`, '--k': j }} />)}
          </span>
        ))}
      </div>
      <output className={c.out}>{i < 0 ? 'Move across the columns' : <>Column {i + 1} · width <b>{MOSAIC[i][0]}</b></>}</output>
    </div>
  );
}
