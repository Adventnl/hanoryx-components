import { rng, useTick } from '../../stage/hooks';
import c from './terminal.module.css';

/* 24 */ export function PingTrace() {
  const n = useTick(600);
  const v = (k) => 14 + rng(k * 31 + 9)() * 30;
  const win = Array.from({ length: 14 }, (_, k) => v(n + k));
  return (
    <div className={c.win} role="img" aria-label="Ping times">
      <p className={c.ln}>64 bytes from 10.0.0.1 <span className={c.dim}>time=</span><b className={c.ok}>{win[13].toFixed(1)} ms</b></p>
      <div className={c.spark}>{win.map((x, k) => <i key={n + k} style={{ height: `${x * 2}%` }} data-hi={x > 38} />)}</div>
    </div>
  );
}
