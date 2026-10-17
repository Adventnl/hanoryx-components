import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";

export function SplitOpen() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A card that splits open down the middle" {...bind}>
      <span className={c.stage}>
        <span className={c.split}>
          <i className={c.core}><b>Open</b></i>
          <i className={c.halfL} /><i className={c.halfR} />
        </span>
      </span>
    </button>
  );
}
