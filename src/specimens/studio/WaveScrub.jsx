import { useDrag } from '../../stage/hooks';
import c from './studio.module.css';
import { WAVE } from './shared';

/* 11 */ export function WaveScrub() {
  const [v, bind] = useDrag({ init: 0.38 });
  return (
    <div className={c.wave} {...bind} aria-label="Waveform playhead" aria-valuetext={`${(v * 3.6).toFixed(1)} seconds`} style={{ ...bind.style, '--v': v }}>
      {WAVE.map((h, k) => <u key={k} data-past={k / WAVE.length < v} style={{ height: `${h * 100}%` }} />)}
      <i />
    </div>
  );
}
