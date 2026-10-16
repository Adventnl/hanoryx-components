import c from './charts.module.css';
import { f1, useScan } from './shared';

/* 17 */ const BOX = [[18, 30, 42, 58, 78], [26, 38, 50, 64, 82], [10, 24, 36, 50, 70], [30, 44, 56, 70, 90], [20, 34, 48, 60, 74]];

const by = (v) => f1(48 - (v / 100) * 44);

export function BoxAndWhisker() {
  const [i, bind] = useScan(5, { label: (k) => `Group ${k + 1}, median ${BOX[k][2]}` });
  return (
    <div className={c.ch} {...bind} aria-label="Box and whisker, move across the groups">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 48H98" />
        {BOX.map(([lo, q1, md, q3, hi], k) => {
          const x = 10 + k * 20;
          return (
            <g key={k} className={c.box} data-hot={k === i}>
              <line x1={x} x2={x} y1={by(hi)} y2={by(lo)} />
              <rect x={x - 6} width="12" y={by(q3)} height={f1(by(q1) - by(q3))} />
              <line className={c.med} x1={x - 6} x2={x + 6} y1={by(md)} y2={by(md)} />
            </g>
          );
        })}
      </svg>
      <output className={c.out}>{i < 0 ? 'Move across the groups' : <>Group {i + 1} · median <b>{BOX[i][2]}</b></>}</output>
    </div>
  );
}
