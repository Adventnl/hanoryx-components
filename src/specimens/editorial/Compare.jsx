import { useDrag } from '../../stage/hooks';
import c from './editorial.module.css';

export function Compare() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.compare} aria-label="Before and after; drag the divider" aria-valuetext={`${Math.round(v * 100)} percent after`} style={{ ...bind.style, '--v': v }}>
        <span className={`${c.layer} ${c.art2}`}><i>After</i></span>
        <span className={`${c.layer} ${c.before} ${c.art1}`}><i>Before</i></span>
        <b className={c.handleC} />
      </div>
    </div>
  );
}
