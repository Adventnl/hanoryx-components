import { useLive, useTick } from "../../../stage/hooks";
import { usePrefersReducedMotion } from "../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from "../terminal.module.css";

const BOOT = ['Reached target Network', 'Started Journal Service', 'Mounted /data', 'Started Cron Daemon', 'Reached target Graphical'];

/* 25 */ export function BootLog() {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const n = useTick(550);
  const k = reduced || !live ? BOOT.length : 1 + (n % (BOOT.length + 2));
  return (
    <div className={c.win} role="img" aria-label="Boot messages appearing">
      {BOOT.slice(0, k).map((t) => <p key={t} className={c.ln}>[ <b className={c.ok}>OK</b> ] {t}</p>)}
    </div>
  );
}
