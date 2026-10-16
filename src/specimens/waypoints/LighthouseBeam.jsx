import { useCycle } from '../../stage/hooks';
import c from './waypoints.module.css';

/* 34 */ export function LighthouseBeam() {
  const k = useCycle(6, 1000);
  return (
    <div className={c.light} role="img" aria-label="Lighthouse beam sweeping six markers">
      <i aria-hidden="true" />
      {Array.from({ length: 6 }, (_, i) => <b key={i} data-on={i === k} style={{ '--a': i * 60 }} aria-hidden="true" />)}
    </div>
  );
}
