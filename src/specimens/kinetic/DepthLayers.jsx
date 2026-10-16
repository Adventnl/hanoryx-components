import { usePoint } from '../../stage/chartKit';
import c from './kinetic.module.css';

/* 34 */ export function DepthLayers() {
  const [p, bind] = usePoint();
  const dx = p ? (p.x - 50) / 50 : 0;
  const dy = p ? (p.y - 50) / 50 : 0;
  return (
    <div className={c.fig}>
      <div className={c.depth} {...bind} aria-label="Depth layers, move over it to shift the layers" style={{ ...bind.style, '--dx': dx, '--dy': dy }}>
        {[4, 3, 2, 1, 0].map((z) => <b key={z} style={{ '--z': z }} aria-hidden={z !== 0}>DEPTH</b>)}
      </div>
    </div>
  );
}
