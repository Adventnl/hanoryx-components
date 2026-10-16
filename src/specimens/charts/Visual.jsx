import c from './charts.module.css';
import { f1 } from './shared';

/* ---- the plotter ---- */
const SAMPLES = 121;

const traceA = (t) => 50 + 28 * Math.sin(t * Math.PI * 6) + 10 * Math.sin(t * Math.PI * 14 + Math.PI / 3);

const traceB = (t) => 50 + 22 * Math.cos(t * Math.PI * 4) + 12 * Math.sin(t * Math.PI * 10 + Math.PI / 9);

const trace = (fn) => Array.from({ length: SAMPLES }, (_, k) => `${k ? 'L' : 'M'}${f1(fn(k / (SAMPLES - 1)))} ${f1((k / (SAMPLES - 1)) * 100)}`).join('');

const PLOT_A = trace(traceA);

const PLOT_B = trace(traceB);

const PLOT_FILL = `M0 0${PLOT_A.replace('M', 'L')}L0 100Z`;

export function Visual() {
  return (
    <div className={c.plot} aria-hidden="true">
      <ol className={c.axisTop}><li>0</li><li>25</li><li>50</li><li>75</li><li>100</li></ol>
      <ol className={c.axisLeft}>{[0, 20, 40, 60, 80, 100].map((n) => <li key={n}>T+{String(n).padStart(3, '0')}</li>)}</ol>
      <div className={c.field}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className={c.fillA} d={PLOT_FILL} />
          <path className={c.lineB} d={PLOT_B} />
          <path className={c.lineA} d={PLOT_A} />
        </svg>
        <i className={c.cross} />
        <b className={c.dotB}><u className={c.vb} /></b>
        <b className={c.dotA}><u className={c.va} /></b>
        <p className={c.tmark}><span className={c.vt} /></p>
      </div>
    </div>
  );
}
