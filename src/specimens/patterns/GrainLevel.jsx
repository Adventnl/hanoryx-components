import { useDrag } from '../../stage/hooks';
import c from './patterns.module.css';
import { Rail } from './shared';

/* 42 */ export function GrainLevel() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  return (
    <div className={c.sw} style={{ background: '#2a2c34' }}>
      <svg className={c.grain} style={{ opacity: v }} aria-hidden="true"><filter id="ptGrain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#ptGrain)" /></svg>
      <Rail v={v} bind={bind} label="Grain amount" />
    </div>
  );
}
