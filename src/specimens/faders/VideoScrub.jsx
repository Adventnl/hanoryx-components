import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 22 */ export function VideoScrub() {
  const [v, bind] = useDrag({ init: 0.35 });
  const t = Math.round(v * 204);
  return (
    <div className={c.video}>
      <div className={c.frames} {...bind} aria-label="Video scrubber" style={{ ...bind.style, '--v': v }}>
        {Array.from({ length: 10 }, (_, i) => <b key={i} style={{ '--g': 0.1 + ((i * 37) % 10) / 14 }} />)}<i />
      </div>
      <output>{Math.floor(t / 60)}:{String(t % 60).padStart(2, '0')} / 3:24</output>
    </div>
  );
}
