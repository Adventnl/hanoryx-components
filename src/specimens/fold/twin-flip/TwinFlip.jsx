import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";
import { PN } from "../shared";

export function TwinFlip() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Two cards that flip one after the other" {...bind}>
      <span className={`${c.stage} ${c.twins}`}>
        {[0, 1].map((k) => <span key={k} className={`${c.flip} ${c.y} ${c.small}`} style={{ '--i': k }}><i><b>{PN[k]}</b></i><i className={c.bk}><b>{PN[k + 2]}</b></i></span>)}
      </span>
    </button>
  );
}
