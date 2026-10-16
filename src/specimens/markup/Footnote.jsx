import { useToggle } from '../../stage/hooks';
import c from './markup.module.css';

export function Footnote() {
  const [on, flip] = useToggle(true);
  return (
    <div className={c.fig}>
      <p className={c.para}>The belt keeps moving<button type="button" className={c.sup} aria-expanded={on} aria-label="Footnote 1" onClick={flip}>1</button> all night.</p>
      <p className={c.foot} data-on={on}><sup>1</sup> Nobody asked it to, and nobody can find the switch.</p>
    </div>
  );
}
