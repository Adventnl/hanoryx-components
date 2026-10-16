import { useToggle } from '../../stage/hooks';
import c from './studio.module.css';

/* 5 */ export function RecordDeck() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.vinyl} data-on={on} aria-pressed={on} aria-label="Turntable. Press to stop or start" onClick={flip}><i /><b /><s /></button>;
}
