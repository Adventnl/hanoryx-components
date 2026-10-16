import c from './glow.module.css';

export function GradientBorder() {
  return (
    <div className={c.fig} role="img" aria-label="A card with a gradient border and a soft glow behind it">
      <div className={c.wrap}>
        <i className={c.backGlow} />
        <div className={`${c.card} ${c.gb}`}><b>Gradient</b><span>border and bloom</span></div>
      </div>
    </div>
  );
}
