import c from './glow.module.css';

export function GlowButton() {
  return (
    <div className={c.fig}>
      <button type="button" className={c.gbtn}><span>Glow</span></button>
    </div>
  );
}
