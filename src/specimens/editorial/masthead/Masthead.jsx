import c from "../editorial.module.css";

/* ---------- 04 page furniture ---------- */

export function Masthead() {
  return (
    <div className={c.fig} role="img" aria-label="A newspaper masthead: The Daily Belt, volume four">
      <div className={c.mast}>
        <p className={c.mastTop}><span>Vol. IV</span><span>Est. never</span><span>Free</span></p>
        <p className={c.mastName}>The Daily Belt</p>
        <p className={c.mastRule}><i /></p>
      </div>
    </div>
  );
}
