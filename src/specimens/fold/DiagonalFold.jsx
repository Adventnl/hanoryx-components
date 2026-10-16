import { useToggle } from '../../stage/hooks';
import c from './fold.module.css';

export function DiagonalFold() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A card with a corner folded across the diagonal" onClick={flip}>
      <span className={c.dg} data-on={on}>
        <i className={c.dgBase}><b>Corner</b></i>
        <i className={c.dgFold} />
      </span>
    </button>
  );
}
