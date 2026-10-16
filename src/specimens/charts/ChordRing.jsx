import { useState } from 'react';
import c from './charts.module.css';
import { Legend, polar, sector } from './shared';

/* 24 */ const CHORD_EDGES = [[0, 2, 5], [0, 3, 3], [1, 4, 6], [2, 5, 4], [1, 3, 2], [4, 5, 3], [0, 1, 2]];

export function ChordRing() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.chord} data-hot={hot}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className={c.gr} cx="50" cy="50" r="40" />
        {CHORD_EDGES.map(([a, b, w], i) => {
          const [x1, y1] = polar(50, 50, 40, a * 60);
          const [x2, y2] = polar(50, 50, 40, b * 60);
          return <path key={i} className={c.chordEdge} data-hot={hot === a || hot === b} style={{ strokeWidth: w * 0.6 }} d={`M${x1} ${y1}Q50 50 ${x2} ${y2}`} />;
        })}
        {Array.from({ length: 6 }, (_, k) => <path key={k} className={c.chordNode} data-hot={hot === k} d={sector(50, 50, 41.5, 45, k * 60 - 8, k * 60 + 8)} />)}
      </svg>
      <Legend items={[['N1'], ['N2'], ['N3'], ['N4'], ['N5'], ['N6']]} hot={hot} setHot={setHot} />
    </div>
  );
}
