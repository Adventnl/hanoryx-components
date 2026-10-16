import c from './glyphs.module.css';

const LAYERS = Array.from({ length: 14 }, (_, i) => i);

export function Extrude() {
  return (
    <div className={c.fig} role="img" aria-label="Extruded letters turning on the spot">
      <div className={c.extBox}>
        <div className={c.ext}>
          {LAYERS.map((i) => <span key={i} style={{ '--i': i }} aria-hidden="true">3D</span>)}
        </div>
      </div>
    </div>
  );
}
