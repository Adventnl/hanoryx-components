import { useToggle } from "../../../stage/hooks";
import c from "../skeletons.module.css";
import { sk } from "../shared";

/* 13 */ export function SkeletonToContent() {
  const [on, flip] = useToggle();
  return (
    <div className={c.reveal}>
      <div className={c.revealBox} data-on={on}>
        <div aria-hidden={on}>{sk('100%', '0.9rem')}{sk('70%')}{sk('90%')}</div>
        <p aria-hidden={!on}><b>Quiet interfaces</b>Waited for, then forgotten.</p>
      </div>
      <button type="button" aria-pressed={on} onClick={flip}>{on ? 'Show skeleton' : 'Load content'}</button>
    </div>
  );
}
