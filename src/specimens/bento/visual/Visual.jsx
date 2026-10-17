import c from "../bento.module.css";

/* ---------- the still side ---------- */

/* x y w h, in quarters of the board, for the three arrangements */
const LAYOUTS = [
  [[0, 0, 2, 2], [2, 0, 1, 1], [3, 0, 1, 1], [2, 1, 2, 1], [0, 2, 1, 2], [1, 2, 2, 1], [3, 2, 1, 2], [1, 3, 2, 1]],
  [[2, 0, 2, 2], [0, 0, 1, 1], [1, 0, 1, 1], [0, 1, 2, 1], [3, 2, 1, 2], [1, 2, 2, 1], [0, 2, 1, 2], [1, 3, 2, 1]],
  [[0, 0, 1, 4], [1, 0, 2, 1], [3, 0, 1, 2], [1, 1, 1, 1], [2, 1, 1, 1], [1, 2, 3, 1], [1, 3, 1, 1], [2, 3, 2, 1]],
];

const KINDS = ['hero', 'ring', 'switch', 'dots', 'bars', 'lines', 'meter', 'chips'];

const NAMES = ['Revenue', 'Goal', 'Alerts', 'Month', 'Week', 'Queue', 'Load', 'Tags'];

const boxOf = (i) => {
  const out = {};
  ['a', 'b', 'c'].forEach((l, k) => ['x', 'y', 'w', 'h'].forEach((d, j) => { out[`--${l}${d}`] = LAYOUTS[k][i][j]; }));
  return out;
};

export function Visual() {
  return (
    <div className={c.board} aria-hidden="true">
      <div className={c.grid}>
        {KINDS.map((kind, i) => (
          <div key={kind} className={c.vt} style={boxOf(i)}>
            <div className={`${c.cell} ${c[`k_${kind}`]}`}>
              <i className={c.vk}>{NAMES[i]}</i>
              {kind === 'hero' ? <b>$12.4k</b> : null}
              {kind === 'ring' ? <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" /><circle cx="20" cy="20" r="15" pathLength="100" /></svg> : null}
              {kind === 'switch' ? <u><s /></u> : null}
              {kind === 'dots' ? <span>{Array.from({ length: 35 }, (_, k) => <s key={k} data-on={[3, 9, 10, 17, 18, 24, 31].includes(k)} />)}</span> : null}
              {kind === 'bars' ? <span>{[40, 66, 52, 88, 60, 74].map((h, k) => <s key={k} style={{ '--h': `${h}%` }} />)}</span> : null}
              {kind === 'lines' ? <span><s /><s /><s /></span> : null}
              {kind === 'meter' ? <span><s /></span> : null}
              {kind === 'chips' ? <span><s /><s /><s /></span> : null}
            </div>
          </div>
        ))}
      </div>
      <p className={c.layoutTag}><i className="sc-led" /><span className={c.la}>Arrangement A</span><span className={c.lb}>Arrangement B</span><span className={c.lc}>Arrangement C</span></p>
    </div>
  );
}
