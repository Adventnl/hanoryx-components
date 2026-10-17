import { useScan } from "../../../stage/chartKit";
import c from "../markup.module.css";

const DIFF = [[' ', 'const belt = new Belt();'], ['-', 'belt.speed = 3;'], ['+', 'belt.speed = 5;'], [' ', 'belt.start();'], ['-', 'await wait(900);'], ['+', 'await wait(400);']];

export function LineDiff() {
  const [i, bind] = useScan(DIFF.length, { axis: 'y', label: (k) => `line ${k + 1}: ${DIFF[k][1]}` });
  return (
    <div className={c.fig}>
      <ol {...bind} className={c.diff} aria-label="A line diff; move along it to focus a line">
        {DIFF.map(([k, t], r) => <li key={r} data-k={k} data-on={r === i}><i>{r + 1}</i><b>{k}</b><code>{t}</code></li>)}
      </ol>
    </div>
  );
}
