import c from "../terminal.module.css";
import { cx } from "../shared";

/* 08 */ export function StackTrace() {
  return (
    <div className={c.win}>
      <p className={cx(c.ln, c.err)}>TypeError: cannot read "map" of undefined</p>
      <p className={c.ln}><span className={c.dim}>  at</span> render <span className={c.dim}>(list.jsx:14)</span></p>
      <p className={c.ln}><span className={c.dim}>  at</span> mount <span className={c.dim}>(app.jsx:52)</span></p>
      <details className={c.hunk}>
        <summary>3 internal frames</summary>
        {['scheduler.run', 'reconcile', 'commit'].map((f) => <p key={f} className={c.ln}><span className={c.dim}>  at {f}</span></p>)}
      </details>
    </div>
  );
}
