import { useToggle } from '../../stage/hooks';
import c from './tilt.module.css';

export function DealCards() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A deck that deals out a row of cards" onClick={flip}>
      <span className={c.dealt} data-on={on}>{[0, 1, 2, 3].map((i) => <i key={i} style={{ '--i': i }}>{i + 1}</i>)}</span>
    </button>
  );
}
