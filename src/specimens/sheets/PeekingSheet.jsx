import { useToggle } from '../../stage/hooks';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 9 */ export function PeekingSheet() {
  const [on, set] = useToggle();
  return <Stage label="Peeking sheet"><div className={c.peek} data-on={on}><button type="button" aria-expanded={on} onClick={set}><u /><b>Now playing</b></button><div inert={!on || undefined}><p>Slow Static · Side B</p><span /></div></div></Stage>;
}
