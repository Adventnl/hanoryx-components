import { pad2, rng, useTick } from '../../stage/hooks';
import c from './terminal.module.css';
import { cx } from './shared';

const LV = ['INFO', 'INFO', 'INFO', 'WARN', 'INFO', 'ERROR', 'DEBUG', 'INFO'];

const MSG = ['listening on :8080', 'GET /health 200 2ms', 'cache warmed (412 keys)', 'slow query 840ms', 'job 9f2a done', 'upstream timeout', 'tick 1000', 'POST /login 204 11ms'];

const logLine = (n) => { const r = rng(n * 7 + 3); const k = Math.floor(r() * MSG.length); return { id: n, t: `12:04:${pad2((n * 3) % 60)}`, lv: LV[k], msg: MSG[k] }; };

/* 05 */ export function LogTail() {
  const n = useTick(900);
  const rows = Array.from({ length: 5 }, (_, k) => logLine(n + k));
  return (
    <div className={cx(c.win, c.tail)} role="img" aria-label="A log scrolling by">
      {rows.map((r) => <p key={r.id} className={c.ln} data-lv={r.lv}><span className={c.dim}>{r.t}</span> <b>{r.lv}</b> {r.msg}</p>)}
    </div>
  );
}
