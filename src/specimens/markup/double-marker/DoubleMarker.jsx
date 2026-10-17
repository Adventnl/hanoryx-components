import c from "../markup.module.css";

export function DoubleMarker() {
  return (
    <div className={c.fig}>
      <p className={c.para}>Two pens: <mark className={c.pen1}>one pass over the line</mark> and <mark className={c.pen2}>another over the first</mark>.</p>
    </div>
  );
}
