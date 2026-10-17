import c from "../markup.module.css";

export function CalloutArrow() {
  return (
    <div className={c.fig} role="img" aria-label="A callout arrow pointing at the word one, labelled: this one">
      <p className={c.para}>Every dial reads normal, except <span className={c.target}>one<svg viewBox="0 0 60 36" aria-hidden="true"><path pathLength="1" d="M4 30C10 8 30 4 50 6" /><path pathLength="1" d="M44 1L52 6 45 13" /></svg><em>this one</em></span>.</p>
    </div>
  );
}
