import { useTick, useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 21 */ export function MiniPlayer() {
  const [on, flip] = useToggle(true);
  const t = useTick(900);
  return (
    <div className={c.mini}>
      <i aria-hidden="true" data-spin={on} />
      <div><b>Slow Static</b><span>Side B · 3:41</span><u aria-hidden="true"><s style={{ width: `${on ? 12 + ((t * 7) % 80) : 36}%` }} /></u></div>
      <button type="button" aria-label={on ? 'Pause' : 'Play'} aria-pressed={on} onClick={flip}><Ico n={on ? 'pause' : 'play'} /></button>
    </div>
  );
}
