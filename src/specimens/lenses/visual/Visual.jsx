import c from "../lenses.module.css";

export function Visual() {
  const text = 'Every great interface is a small act of attention, repeated until it feels like care.';
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visPage}>
        <p>{text}</p>
        <div className={c.visLens}><div><p>{text}</p></div></div>
        <i />
      </div>
      <small>1 LENS · 1 PAGE</small>
    </div>
  );
}
