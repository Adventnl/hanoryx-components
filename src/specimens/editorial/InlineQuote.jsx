import { useHot } from '../../stage/chartKit';
import c from './editorial.module.css';

export function InlineQuote() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.para}>As the sign said, <span className={c.inq}>“mind the gap between the train and the platform”</span>, and everyone did.</span>
    </button>
  );
}
