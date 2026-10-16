import { useTick } from '../../stage/hooks';
import c from './charts.module.css';
import { curve, f1, series, smooth3 } from './shared';

/* 27 */ const stream = (seed) => {
  const layers = Array.from({ length: 5 }, (_, k) => smooth3(smooth3(series(12, seed + k * 7, 0.2, 1))));
  const total = layers[0].map((_, j) => layers.reduce((a, l) => a + l[j], 0));
  const xs = (j) => f1((j * 100) / 11);
  const k = 34 / Math.max(...total);
  return layers.map((l, n) => {
    const top = l.map((_, j) => [xs(j), f1(26 - (total[j] * k) / 2 + layers.slice(0, n + 1).reduce((a, m) => a + m[j], 0) * k)]);
    const bottom = l.map((_, j) => [xs(j), f1(26 - (total[j] * k) / 2 + layers.slice(0, n).reduce((a, m) => a + m[j], 0) * k)]).reverse();
    return `${curve(top)}L${curve(bottom).slice(1)}Z`;
  });
};

const STREAMS = [stream(7), stream(19)];

export function StreamGraph() {
  const set = useTick(3400) % 2;
  return (
    <div className={c.ch} role="img" aria-label="A stream graph slowly changing shape">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        {STREAMS[set].map((d, k) => <path key={k} className={`${c.layer} ${c.morph}`} data-k={k} d={STREAMS[0][k]} style={{ d: `path("${d}")` }} />)}
      </svg>
    </div>
  );
}
