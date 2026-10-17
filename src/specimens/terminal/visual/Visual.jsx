import c from "../terminal.module.css";

const LOG = [
  ['ok', 'resolve   142 packages'],
  ['ok', 'compile   src/app.jsx'],
  ['ok', 'compile   src/stage.jsx'],
  ['warn', 'warn      unused export "ease"'],
  ['ok', 'bundle    3 chunks'],
  ['ok', 'minify    -41%'],
  ['ok', 'emit      dist/index.html'],
  ['ok', 'emit      dist/app.js'],
  ['ok', 'check     0 errors'],
  ['ok', 'done      in 1.9s'],
];

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visBar}><i /><i /><i /><span>build — 80×24</span></div>
      <div className={c.visBody}>
        <p style={{ '--k': 0 }}><b className={c.prompt}>$</b> npm run build</p>
        {LOG.map(([k, t], i) => <p key={t} data-k={k} style={{ '--k': i + 1 }}>{t}</p>)}
        <p style={{ '--k': 11 }}><b className={c.prompt}>$</b><i className={c.caret} /></p>
      </div>
      <small>{LOG.length} LINES · 1 PROMPT</small>
    </div>
  );
}
