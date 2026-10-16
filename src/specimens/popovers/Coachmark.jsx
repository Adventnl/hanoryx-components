import { useToggle } from '../../stage/hooks';
import c from './popovers.module.css';

/* 9 */ export function Coachmark() {
  const [on, flip] = useToggle(true);
  return (
    <div className={c.coach}>
      <button type="button" className={c.hot} aria-label="Hotspot" aria-expanded={on} onClick={flip}><i /></button>
      {on && <aside role="note"><b>New</b>Tap here to start a draft.<button type="button" onClick={flip}>Got it</button></aside>}
    </div>
  );
}
