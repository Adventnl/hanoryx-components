import { useLive, useTick } from "../../../stage/hooks";
import { usePrefersReducedMotion } from "../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* typed text that loops while on screen, and just sits there otherwise */
function useTyped(text, ms = 110, hold = 12) {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const n = useTick(ms);
  if (reduced || !live) return text;
  return text.slice(0, n % (text.length + hold));
}

/* 12 */ export function TypedOpening() {
  const t = useTyped('We make things that work.');
  return <Sc label="Typewriter hero" className={c.cen} role="img"><h3 className={c.type}>{t}<i /></h3></Sc>;
}
