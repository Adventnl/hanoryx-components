import { useDrag } from '../../stage/hooks';
import c from './lenses.module.css';
import { Scene } from './shared';

/* 19 */ export function OnionSkin() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={`${c.area} ${c.onion}`} style={{ '--v': v }}>
      <Scene className={c.fill} /><Scene className={`${c.fill} ${c.mono} ${c.fade}`} />
      <i {...bind} aria-label="Blend" aria-valuetext={`${Math.round(v * 100)} percent`} style={bind.style}><b /></i>
    </div>
  );
}
