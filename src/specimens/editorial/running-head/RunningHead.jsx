import { useCycle } from "../../../stage/hooks";
import c from "../editorial.module.css";

export function RunningHead() {
  const t = useCycle(3, 2200);
  const page = 14 + t;
  const verso = page % 2 === 0;
  return (
    <div className={c.fig} role="img" aria-label={`Page ${page} of a book, with its running head`}>
      <div key={page} className={c.rhead} data-verso={verso}>
        <span>{verso ? page : 'The Quiet Machine'}</span>
        <span>{verso ? 'The Quiet Machine' : page}</span>
      </div>
      <p className={c.note}>{verso ? 'verso · left page' : 'recto · right page'}</p>
    </div>
  );
}
