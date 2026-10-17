import { useCycle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 37 */ export function RingDock() {
  const k = useCycle(4, 1800);
  return (
    <div className={c.ring} role="toolbar" aria-label="Dock with progress rings">
      {['home', 'mail', 'camera', 'gear'].map((n, i) => (
        <button key={n} type="button" aria-label={n} data-on={i === k}>
          <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" /><circle cx="20" cy="20" r="17" /></svg>
          <Ico n={n} />
        </button>
      ))}
    </div>
  );
}
