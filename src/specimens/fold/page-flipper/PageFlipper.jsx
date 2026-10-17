import c from "../fold.module.css";

export function PageFlipper() {
  return (
    <div className={c.fig} role="img" aria-label="A book turning its pages one after another">
      <div className={c.stage}>
        <div className={c.flipper}>{[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ '--k': k }}><b>{k + 1}</b></i>)}</div>
      </div>
    </div>
  );
}
