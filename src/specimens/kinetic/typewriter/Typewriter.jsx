import { useTick } from "../../../stage/hooks";
import c from "../kinetic.module.css";

/* 4 */ const LINES = ['Type with intent.', 'Delete with care.', 'Begin again.'];

const CYCLE = LINES.map((l) => l.length * 2 + 22);

const CYCLE_SUM = CYCLE.reduce((a, b) => a + b, 0);

export function Typewriter() {
  const t = useTick(75);
  let k = t % CYCLE_SUM;
  let line = 0;
  while (k >= CYCLE[line]) { k -= CYCLE[line]; line += 1; }
  const len = LINES[line].length;
  const n = k < len ? k : k < len + 16 ? len : Math.max(0, len - (k - len - 16));
  return (
    <div className={c.fig} role="img" aria-label="A line of text typing and deleting itself">
      <p className={c.type}>{LINES[line].slice(0, n)}<i /></p>
    </div>
  );
}
