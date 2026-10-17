import c from "../cursors.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visField}>
        {Array.from({ length: 9 }, (_, k) => <i key={k} style={{ '--k': k }} />)}
        <b />
      </div>
      <small>1 CURSOR · 8 GHOSTS</small>
    </div>
  );
}
