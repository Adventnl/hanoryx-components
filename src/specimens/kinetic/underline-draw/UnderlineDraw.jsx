import c from "../kinetic.module.css";

/* 22 */ export function UnderlineDraw() {
  return (
    <div className={c.fig}>
      <p className={c.unders}>
        {['grow', 'centre', 'marker'].map((w) => <button key={w} type="button" data-u={w}>{w}</button>)}
      </p>
    </div>
  );
}
