import { useDrag } from '../../stage/hooks';
import c from './studio.module.css';

/* 6 */ export function ChannelFader() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.7 });
  const db = v < 0.02 ? '−∞' : (20 * Math.log10(v / 0.75)).toFixed(1);
  return (
    <div className={c.fader}>
      <div {...bind} aria-label="Channel fader" aria-valuetext={`${db} dB`} style={{ ...bind.style, '--v': v }}>{Array.from({ length: 11 }, (_, k) => <u key={k} />)}<i /></div>
      <output>{db}<small>dB</small></output>
    </div>
  );
}
