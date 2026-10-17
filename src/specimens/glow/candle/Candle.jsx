import c from "../glow.module.css";

export function Candle() {
  return (
    <div className={c.fig} role="img" aria-label="A candle flame flickering">
      <div className={c.candle}><i className={c.halo2} /><i className={c.flame} /><i className={c.wick} /><i className={c.wax} /></div>
    </div>
  );
}
