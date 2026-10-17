import { usePointer } from "../../../stage/pointerVars";
import c from "../cockpit.module.css";

/* 19 */ export function TurnCoordinator() {
  const [ref, bind] = usePointer();
  return (
    <div ref={ref} className={c.turn} role="application" aria-label="Turn coordinator. Move the pointer here, or use the arrow keys." tabIndex={0} {...bind}>
      <svg viewBox="0 0 100 70" aria-hidden="true"><g className={c.bank}><path d="M18 36h64M50 36V26M36 36l-8-6M64 36l8-6" /><circle cx="50" cy="36" r="3.4" /></g><path d="M14 56h72" className={c.race} /></svg>
      <i />
    </div>
  );
}
