import c from "../heroes.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visScreen}>
        <span className={c.visNav}><i /><s /><s /><s /></span>
        <h3>Build calm<br />systems.</h3>
        <p />
        <span className={c.visBtn} />
        <span className={c.visArt} />
      </div>
      <small>1 HEADLINE · 1 SHAPE · 1 BUTTON</small>
    </div>
  );
}
