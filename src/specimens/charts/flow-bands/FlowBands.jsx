import { useState } from 'react';
import c from "../charts.module.css";
import { Legend, f1 } from "../shared";

/* 23 */ const FLOW = [[20, 14, 6], [6, 22, 7], [4, 9, 12]];

const FLOW_BANDS = (() => {
  const s = 0.46;
  const gap = 3;
  const src = [0, 1, 2].map((i) => FLOW[i].reduce((a, b) => a + b, 0));
  const dst = [0, 1, 2].map((j) => FLOW.reduce((a, row) => a + row[j], 0));
  const top = (arr, i) => arr.slice(0, i).reduce((a, b) => a + b * s + gap, 0);
  const out = [];
  const used = [0, 0, 0];
  FLOW.forEach((row, i) => {
    let off = 0;
    row.forEach((v, j) => {
      const y0 = top(src, i) + off + (v * s) / 2;
      const y1 = top(dst, j) + used[j] + (v * s) / 2;
      off += v * s;
      used[j] += v * s;
      out.push({ i, j, v, w: f1(v * s), d: `M7 ${f1(y0)}C50 ${f1(y0)} 50 ${f1(y1)} 93 ${f1(y1)}` });
    });
  });
  return { out, src, dst, top: (i) => top(src, i), topD: (j) => top(dst, j), s };
})();

export function FlowBands() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.flow} data-hot={hot}>
      <svg viewBox="0 0 100 52" aria-hidden="true">
        {FLOW_BANDS.out.map((b) => <path key={`${b.i}${b.j}`} className={c.band} data-hot={hot === b.i} style={{ strokeWidth: b.w }} d={b.d} />)}
        {FLOW_BANDS.src.map((v, i) => <rect key={i} className={c.node} x="3" width="4" y={FLOW_BANDS.top(i)} height={f1(v * FLOW_BANDS.s)} />)}
        {FLOW_BANDS.dst.map((v, j) => <rect key={j} className={c.node} x="93" width="4" y={FLOW_BANDS.topD(j)} height={f1(v * FLOW_BANDS.s)} />)}
      </svg>
      <Legend items={[['Source A'], ['Source B'], ['Source C']]} hot={hot} setHot={setHot} />
    </div>
  );
}
