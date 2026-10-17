import { useTick } from "../../../stage/hooks";
import c from "../markup.module.css";

const THREAD = [['A', 'Why is it still moving?'], ['B', 'Nobody asked it to stop.'], ['A', 'Then who wound it?']];

export function CommentThread() {
  const t = useTick(1600);
  const n = [1, 2, 3, 3, 3][t % 5];
  const run = Math.floor(t / 5);
  return (
    <div className={c.fig} role="img" aria-label="A comment thread growing under a highlighted phrase">
      <p className={c.para}>The belt <mark className={c.marker2}>keeps moving</mark> all night.</p>
      <ol className={c.thread}>
        {THREAD.slice(0, n).map(([who, said], k) => <li key={`${run}-${k}`}><b>{who}</b>{said}</li>)}
      </ol>
    </div>
  );
}
