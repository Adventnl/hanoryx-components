import { useToggle } from '../../stage/hooks';
import c from './studio.module.css';

/* 3 */ export function ReelToReel() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.reels} data-on={on} aria-pressed={on} aria-label="Tape reels. Press to stop or start" onClick={flip}><i /><i /><b /></button>;
}
