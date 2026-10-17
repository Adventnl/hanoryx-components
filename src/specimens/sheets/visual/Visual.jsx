import c from "../sheets.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.stack}>
        {['SCRIM', 'PANE 04', 'PANE 03', 'PANE 02', 'PANE 01'].map((t, k) => <section key={t} style={{ '--k': k }}><b>{t}</b><i /></section>)}
      </div>
      <small>5 LAYERS · 1 AXIS</small>
    </div>
  );
}
