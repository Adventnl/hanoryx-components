import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 9 */ export function PushLatch() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.latch} aria-pressed={on} aria-label="Push latch" onClick={flip}><i /></button>;
}
