import c from "../loaders.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ '--k': k }}><b /></i>)}
      <s />
      <small>5 RINGS · 1 CORE</small>
    </div>
  );
}
