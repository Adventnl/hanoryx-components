import { useDrag } from '../../stage/hooks';
import c from './glyphs.module.css';
import { Track } from './shared';

export function TypeScale() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const r = 1.125 + v * 0.493;
  return (
    <div className={c.fig}>
      <ol className={c.scaleList} aria-label={`A type scale at ratio ${r.toFixed(3)}`}>
        {[3, 2, 1, 0].map((k) => <li key={k} style={{ fontSize: `${(0.8 * r ** k).toFixed(2)}rem` }}>Aa</li>)}
      </ol>
      <Track bind={bind} v={v} label="Scale ratio" text={r.toFixed(3)} />
      <span className={c.note}>ratio {r.toFixed(3)}</span>
    </div>
  );
}
