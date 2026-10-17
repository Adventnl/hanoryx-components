import c from "../gauges.module.css";

/* 10 */ const ODO = [0, 0, 3, 8, 1, 5];

export function Odometer() {
  return (
    <div className={c.odo} role="img" aria-label="Odometer counting up">
      {ODO.map((d, k) => (
        <i key={k} style={{ '--t': `${2 * 10 ** (5 - k)}s`, '--s': d }}>
          <b>{Array.from({ length: 11 }, (_, n) => <em key={n}>{n % 10}</em>)}</b>
        </i>
      ))}
      <small>km</small>
    </div>
  );
}
