import c from './charts.module.css';
import { f1 } from './shared';

/* 16 */ const WF = (() => {
  const steps = [['Start', 60], ['A', 18], ['B', -9], ['C', 14], ['D', -12], ['E', 7]];
  let run = 0;
  const out = [];
  steps.forEach(([n, d], i) => {
    const from = i === 0 ? 0 : run;
    run = i === 0 ? d : run + d;
    out.push({ n, from, to: run, kind: i === 0 ? 't' : d >= 0 ? 'u' : 'd' });
  });
  out.push({ n: 'End', from: 0, to: run, kind: 't' });
  const y = (v) => f1(48 - (v / 90) * 44);
  return out.map((b) => ({ ...b, y: y(Math.max(b.from, b.to)), h: f1(Math.abs(y(b.from) - y(b.to))) }));
})();

export function Waterfall() {
  return (
    <div className={c.ch} role="img" aria-label="Waterfall chart building up bar by bar">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 48H98" />
        {WF.map((b, i) => <rect key={b.n} className={c.wf} data-kind={b.kind} style={{ '--i': i }} x={5 + i * 13} width="10" y={b.y} height={b.h} />)}
      </svg>
    </div>
  );
}
