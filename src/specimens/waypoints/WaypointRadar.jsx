import c from './waypoints.module.css';

/* 25 */ export function WaypointRadar() {
  const blips = [[30, 24], [70, 40], [44, 70], [20, 62]];
  return (
    <div className={c.radar} role="img" aria-label="Radar with four waypoints">
      <i aria-hidden="true" />
      {blips.map(([x, y], k) => <b key={k} style={{ left: `${x}%`, top: `${y}%`, '--k': k }} aria-hidden="true" />)}
    </div>
  );
}
