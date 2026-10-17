import c from "../studio.module.css";

/* 27 */ export function DelayTaps() {
  return <div className={c.delay} role="img" aria-label="Delay taps fading away">{[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ '--k': k }} />)}</div>;
}
