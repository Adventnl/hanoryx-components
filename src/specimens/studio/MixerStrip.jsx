import { useDrag, useToggle } from '../../stage/hooks';
import c from './studio.module.css';
import { useLevels } from './shared';

/* 9 */ export function MixerStrip() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.72 });
  const [l] = useLevels(1, 130);
  const [mute, flip] = useToggle();
  return (
    <div className={c.strip} data-mute={mute}>
      <span className={c.sMeter} role="img" aria-label="Level"><i style={{ height: `${(mute ? 0.02 : l * v) * 100}%` }} /></span>
      <div className={c.sFader} {...bind} aria-label="Strip fader" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v }}><i /></div>
      <button type="button" aria-pressed={mute} onClick={flip}>M</button>
      <b>CH 1</b>
    </div>
  );
}
