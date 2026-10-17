import c from "../kinetic.module.css";

const ALPHA = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export function Visual() {
  return (
    <div className={c.giant} aria-hidden="true">
      {ALPHA.map((ch, k) => <span key={ch} className={c.letter} style={{ '--k': k }}><i>{ch}</i><i>{ch}</i></span>)}
      <p className={c.tag}>A <u /> Z</p>
    </div>
  );
}
