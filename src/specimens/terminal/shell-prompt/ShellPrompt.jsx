import c from "../terminal.module.css";

/* 01 */ export function ShellPrompt() {
  return (
    <div className={c.win}>
      <p className={c.ln}><b className={c.user}>ada@hanoryx</b><span className={c.dim}>:</span><b className={c.path}>~/work</b><span className={c.dim}>$</span><i className={c.caret} /></p>
    </div>
  );
}
