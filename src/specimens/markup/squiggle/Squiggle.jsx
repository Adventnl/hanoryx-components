import c from "../markup.module.css";

export function Squiggle() {
  return (
    <div className={c.fig}>
      <p className={c.para}>Check <span className={c.squig}>the speling</span> of every <span className={c.squig}>platfrom</span> name.</p>
    </div>
  );
}
