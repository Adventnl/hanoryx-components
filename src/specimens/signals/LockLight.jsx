import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './signals.module.css';

/* 20 */ export function LockLight() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.lock} aria-pressed={on} aria-label={on ? 'Locked' : 'Unlocked'} onClick={flip}><Ico n="lock" /><i /><span>{on ? 'Locked' : 'Open'}</span></button>;
}
