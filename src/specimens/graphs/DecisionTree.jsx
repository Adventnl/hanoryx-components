import { useState } from 'react';
import c from './graphs.module.css';

/* 6 */ const DECIDE_OUT = ['Go', 'Pause', 'Ship', 'Trim', 'Plan', 'Wait', 'Stop', 'Hold'];

export function DecisionTree() {
  const [path, setPath] = useState('');
  const full = path.length === 3;
  const idx = (p) => (1 << p.length) - 1 + (p ? parseInt(p.replace(/Y/g, '0').replace(/N/g, '1'), 2) : 0);
  const onPath = (p) => path.startsWith(p);
  const nodes = [];
  for (let d = 0; d <= 3; d += 1) for (let k = 0; k < 2 ** d; k += 1) { const p = d ? k.toString(2).padStart(d, '0').replace(/0/g, 'Y').replace(/1/g, 'N') : ''; nodes.push({ p, d, x: ((k + 0.5) / 2 ** d) * 100, y: 8 + d * 24 }); }
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 86" aria-hidden="true">
        {nodes.filter((n) => n.d > 0).map((n) => { const par = nodes.find((m) => m.p === n.p.slice(0, -1)); return <path key={n.p} className={c.edge} data-hot={onPath(n.p)} d={`M${par.x} ${par.y + 3}C${par.x} ${par.y + 12} ${n.x} ${n.y - 12} ${n.x} ${n.y - 3}`} />; })}
        {nodes.map((n) => <circle key={n.p || 'root'} className={c.nd} data-hot={onPath(n.p)} cx={n.x} cy={n.y} r={n.d === 3 ? 2.6 : 3.2} />)}
        {nodes.filter((n) => n.d === 3).map((n) => <text key={n.p} className={c.tx} x={n.x} y={n.y + 7} textAnchor="middle" data-hot={path === n.p}>{DECIDE_OUT[idx(n.p) - 7]}</text>)}
      </svg>
      <div className={c.pair}>
        <button type="button" disabled={full} onClick={() => setPath(path + 'Y')}>Yes</button>
        <button type="button" disabled={full} onClick={() => setPath(path + 'N')}>No</button>
        <button type="button" onClick={() => setPath('')}>Reset</button>
      </div>
    </div>
  );
}
