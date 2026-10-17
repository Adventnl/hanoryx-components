import c from "../matrices.module.css";

/* 31 */ const RULE30 = (() => {
  let row = Array.from({ length: 23 }, (_, i) => i === 11);
  const out = [row];
  for (let g = 0; g < 10; g += 1) {
    const prev = row;
    row = prev.map((_, i) => { const a = prev[i - 1] ? 1 : 0; const b = prev[i] ? 1 : 0; const d = prev[i + 1] ? 1 : 0; return ((30 >> (a * 4 + b * 2 + d)) & 1) === 1; });
    out.push(row);
  }
  return out;
})();

export function CellularRows() {
  return (
    <div className={c.auto} role="img" aria-label="A cellular automaton growing row by row">
      {RULE30.map((row, r) => <p key={r} style={{ '--r': r }}>{row.map((on, i) => <i key={i} data-on={on} />)}</p>)}
    </div>
  );
}
