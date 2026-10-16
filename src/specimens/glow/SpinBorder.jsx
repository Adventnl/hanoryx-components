import c from './glow.module.css';

export function SpinBorder() {
  return (
    <div className={c.fig} role="img" aria-label="A card whose gradient border turns">
      <div className={`${c.card} ${c.spin}`}><b>Spin</b><span>the border turns</span></div>
    </div>
  );
}
