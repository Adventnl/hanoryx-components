import c from "../gauges.module.css";

/* 30 */ export function OrbitMeter() {
  return (
    <div className={c.orbit} role="img" aria-label="Orbit meter">
      <i /><u />
      <b className={c.num} />
    </div>
  );
}
