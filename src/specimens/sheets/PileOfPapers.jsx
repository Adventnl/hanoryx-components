import { useToggle } from '../../stage/hooks';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 30 */ export function PileOfPapers() {
  const [spread, set] = useToggle();
  return <Stage label="Pile of papers"><div className={c.papers} data-on={spread}>{[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ '--k': k }} />)}</div><button type="button" className={c.open} aria-pressed={spread} onClick={set}>{spread ? 'Stack' : 'Spread'}</button></Stage>;
}
