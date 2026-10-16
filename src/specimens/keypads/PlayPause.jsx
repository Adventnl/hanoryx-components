import { useToggle } from '../../stage/hooks';
import c from './keypads.module.css';

/* 27 */ export function PlayPause() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.play} aria-pressed={on} aria-label={on ? 'Pause' : 'Play'} onClick={flip}><svg viewBox="0 0 24 24" aria-hidden="true">{on ? <path d="M7 5v14M17 5v14" /> : <path d="M8 5l11 7-11 7Z" />}</svg></button>;
}
