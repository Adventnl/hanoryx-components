import { useToggle } from '../../stage/hooks';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 38 */ export function ExpandingPlayer() {
  const [big, set] = useToggle();
  return <Stage label="Expanding player"><div className={c.player} data-big={big}><button type="button" aria-expanded={big} aria-label={big ? 'Collapse player' : 'Expand player'} onClick={set}><i /><span><b>Slow Static</b><small>Side B</small></span></button><div inert={!big || undefined}><u /><p>Lyrics, queue and the rest.</p></div></div></Stage>;
}
