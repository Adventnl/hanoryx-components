import { useDrag } from "../../../stage/hooks";
import c from "../graphs.module.css";

/* 9 */ const DENDRO = [[[0, 1], 1.2], [[2, 3], 1.8], [[4, 5], 2.4], [[6, 7], 2.9], [['m0', 'm1'], 4.6], [['m2', 'm3'], 5.4], [['m4', 'm5'], 8]];

const DENDRO_X = [8, 20, 32, 44, 56, 68, 80, 92];

export function DendrogramCut() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.5 });
  const cut = v * 9;
  /* nodes: leaves 0..7, merges m0..m6 with x = mean of children, y = height */
  const pos = {};
  DENDRO_X.forEach((x, i) => { pos[i] = { x, h: 0 }; });
  DENDRO.forEach(([[a, b], h], k) => { pos[`m${k}`] = { x: (pos[a].x + pos[b].x) / 2, h }; });
  const cluster = {};
  let ids = 0;
  const assign = (key, id) => { cluster[key] = id; const k = typeof key === 'string' ? Number(key.slice(1)) : -1; if (k >= 0) DENDRO[k][0].forEach((ch) => assign(ch, id)); };
  for (let k = DENDRO.length - 1; k >= 0; k -= 1) if (!(`m${k}` in cluster) && DENDRO[k][1] <= cut) { assign(`m${k}`, ids); ids += 1; }
  for (let i = 0; i < 8; i += 1) if (!(i in cluster)) { cluster[i] = ids; ids += 1; }
  const Y = (h) => 82 - h * 8;
  return (
    <div className={c.fig}>
      <div className={c.dendro} {...bind} aria-label="Dendrogram, drag the cut line up or down" style={{ ...bind.style, '--v': v }}>
        <svg viewBox="0 0 100 90" aria-hidden="true">
          {DENDRO.map(([[a, b], h], k) => (
            <path key={k} className={c.dLink} data-in={h <= cut} data-k={`m${k}` in cluster ? cluster[`m${k}`] % 5 : -1} d={`M${pos[a].x} ${Y(pos[a].h)}V${Y(h)}H${pos[b].x}V${Y(pos[b].h)}`} />
          ))}
          {DENDRO_X.map((x, i) => <circle key={i} className={c.dLeaf} data-k={cluster[i] % 5} cx={x} cy="82" r="2.2" />)}
        </svg>
        <i />
      </div>
      <p className={c.sub}>{ids} clusters</p>
    </div>
  );
}
