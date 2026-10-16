import c from './keypads.module.css';

const LEGENDS = [...'QWERTYUIASDFGHJKZXCVBNM1234567890,./;\'[]-='];

export function Visual() {
  return (
    <div className={c.board} aria-hidden="true">
      {LEGENDS.slice(0, 40).map((t, k) => <i key={k} style={{ '--k': k }}>{t}</i>)}
    </div>
  );
}
