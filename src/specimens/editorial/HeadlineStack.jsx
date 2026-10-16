import { useHot } from '../../stage/chartKit';
import c from './editorial.module.css';

export function HeadlineStack() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.stack}>
        <span className={c.kick}>Essay</span>
        <span className={c.hed}>The long way round</span>
        <span className={c.deck}>A short note on belts, platforms and the people who wind them.</span>
      </span>
    </button>
  );
}
