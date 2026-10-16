import { useDrag } from '../../stage/hooks';
import c from './gauges.module.css';

/* 18 */ export function ThermalStrip() {
  const [v, bind, set] = useDrag({ init: 0.35 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    set((e.clientX - r.left) / r.width);
  };
  return (
    <div className={c.thermal} {...bind} onPointerMove={move} aria-label="Temperature strip, move along it to read" style={{ ...bind.style, '--v': v }}>
      <i />
      <b><em>{Math.round(-10 + v * 50)}°</em></b>
      <ol><li>-10</li><li>10</li><li>30</li><li>40</li></ol>
    </div>
  );
}
