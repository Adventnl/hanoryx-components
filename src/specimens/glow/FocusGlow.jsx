import c from './glow.module.css';

export function FocusGlow() {
  return (
    <div className={c.fig}>
      <div className={`${c.card} ${c.focus}`}>
        <b>Focus</b>
        <button type="button" className={c.btn}>Tab to me</button>
      </div>
    </div>
  );
}
