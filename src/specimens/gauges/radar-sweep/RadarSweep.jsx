import c from "../gauges.module.css";

/* 36 */ const BLIPS = [[28, 0.62], [112, 0.4], [196, 0.78], [301, 0.5], [340, 0.3]];

export function RadarSweep() {
  return (
    <div className={c.radar} role="img" aria-label="Radar sweep with fading echoes">
      {BLIPS.map(([a, r]) => <i key={a} style={{ '--a': a, '--r': r }} />)}
    </div>
  );
}
