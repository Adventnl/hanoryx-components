import { useState } from 'react';
import c from './graphs.module.css';

/* 12 */ const ROUTE_N = [[10, 30], [34, 14], [34, 56], [62, 30], [84, 14], [88, 52]];

const ROUTE_E = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [1, 4]];

const ROUTE = [0, 2, 3, 5];

export function PacketRoute() {
  const [n, setN] = useState(1);
  const d = ROUTE.map((i, k) => `${k ? 'L' : 'M'}${ROUTE_N[i][0]} ${ROUTE_N[i][1]}`).join('');
  return (
    <button type="button" className={c.chBtn} aria-label="Packet route, click to send a packet" onClick={() => setN(n + 1)}>
      <svg className={c.svg} viewBox="0 0 100 70" aria-hidden="true">
        {ROUTE_E.map(([a, b], i) => <line key={i} className={c.edge} x1={ROUTE_N[a][0]} y1={ROUTE_N[a][1]} x2={ROUTE_N[b][0]} y2={ROUTE_N[b][1]} />)}
        <path className={c.edge} data-hot d={d} />
        {ROUTE_N.map(([x, y], i) => <circle key={i} className={c.nd} data-hot={ROUTE.includes(i)} cx={x} cy={y} r="3" />)}
        <circle key={n} className={c.packet} r="2.2" style={{ offsetPath: `path("${d}")` }} />
      </svg>
      <span className={c.sub}>packets sent <b>{n}</b></span>
    </button>
  );
}
