import c from "../glow.module.css";

export function Bokeh() {
  return (
    <div className={c.fig} role="img" aria-label="Soft out-of-focus lights drifting behind a card">
      <div className={`${c.card} ${c.bokeh}`}>
        {Array.from({ length: 9 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
        <b>Bokeh</b>
      </div>
    </div>
  );
}
