import { useToggle } from '../../stage/hooks';
import c from './studio.module.css';

/* 4 */ export function CassetteDeck() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.cassette} data-on={on} aria-pressed={on} aria-label="Cassette. Press to stop or start" onClick={flip}><span><i /><i /></span><u /></button>;
}
