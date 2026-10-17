import c from "../terminal.module.css";

/* 07 */ export function DiffHunks() {
  return (
    <div className={c.win}>
      {[['@@ -12,4 +12,5 @@ nav.js', [[' ', 'const open = false;'], ['-', 'const speed = 300;'], ['+', 'const speed = 180;'], ['+', 'const ease = "out";']]], ['@@ -40,3 +41,3 @@ stage.js', [[' ', 'render();'], ['-', 'pin(1);'], ['+', 'pin(2);']]]].map(([h, ls]) => (
        <details key={h} open className={c.hunk}>
          <summary>{h}</summary>
          {ls.map(([s, t], i) => <p key={i} className={c.ln} data-d={s}><span>{s}</span>{t}</p>)}
        </details>
      ))}
    </div>
  );
}
