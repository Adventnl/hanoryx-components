import { useLive, useTick } from "../../../stage/hooks";
import { usePrefersReducedMotion } from "../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from "../terminal.module.css";

/* text that types itself while on screen, and just sits there otherwise */
function useTyped(text, ms = 90, hold = 14) {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const n = useTick(ms);
  if (reduced || !live) return text;
  return text.slice(0, n % (text.length + hold));
}

/* 02 */ export function TypedCommand() {
  const t = useTyped('npm run build --prod', 80, 16);
  return (
    <div className={c.win} role="img" aria-label="A command being typed: npm run build --prod">
      <p className={c.ln}><b className={c.prompt}>$</b> {t}<i className={c.caret} /></p>
    </div>
  );
}
