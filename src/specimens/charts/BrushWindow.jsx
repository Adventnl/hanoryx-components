import { useDrag } from '../../stage/hooks';
import c from './charts.module.css';
import { curve, pts, series, smooth3 } from './shared';

/* 37 */ const BR_D = curve(pts(smooth3(smooth3(smooth3(series(60, 141, 0.05, 1)))), 100, 40, 3));

const BRUSH = 0.25;

export function BrushWindow() {
  const [v, bind] = useDrag({ init: 0.4 });
  const start = v * (1 - BRUSH);
  return (
    <div className={c.brush}>
      <div className={c.main}>
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
          <g style={{ transform: `scaleX(${1 / BRUSH}) translateX(${-start * 100}px)` }}><path className={`${c.ln} ${c.red} ${c.nonScaling}`} d={BR_D} /></g>
        </svg>
      </div>
      <div className={c.over} {...bind} aria-label="Brush window, drag to move" style={{ ...bind.style, '--s': start, '--w': BRUSH }}>
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path className={`${c.ln} ${c.nonScaling}`} d={BR_D} /></svg>
        <i />
      </div>
    </div>
  );
}
