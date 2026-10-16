import { usePoint } from '../../stage/chartKit';
import c from './glyphs.module.css';

export function LongShadow() {
  const [p, bind] = usePoint();
  const a = p ? Math.atan2(p.y - 50, p.x - 50) : Math.PI / 4;
  const shadow = Array.from({ length: 30 }, (_, i) => `${(Math.cos(a) * (i + 1) * 1.2).toFixed(1)}px ${(Math.sin(a) * (i + 1) * 1.2).toFixed(1)}px 0 rgba(255, 51, 51, ${(0.85 - i * 0.027).toFixed(2)})`).join(',');
  return (
    <div className={c.fig}>
      <div {...bind} className={c.lsBox} aria-label="A long shadow that points away from the pointer">
        <span className={c.ls} style={{ textShadow: shadow }}>Long</span>
      </div>
    </div>
  );
}
