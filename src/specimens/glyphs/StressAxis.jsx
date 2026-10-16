import { useId } from 'react';
import { useDrag } from '../../stage/hooks';
import c from './glyphs.module.css';
import { Track } from './shared';

export function StressAxis() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const id = `sa${useId().replace(/\W/g, '')}`;
  const ang = (v - 0.5) * 80;
  return (
    <div className={c.fig}>
      <svg className={c.stress} viewBox="0 0 100 100" role="img" aria-label={`An O whose stress axis is tilted ${Math.round(ang)} degrees`}>
        <defs>
          <mask id={id}>
            <rect width="100" height="100" fill="#fff" />
            <ellipse cx="50" cy="50" rx="19" ry="35" fill="#000" transform={`rotate(${ang.toFixed(1)} 50 50)`} />
          </mask>
        </defs>
        <ellipse cx="50" cy="50" rx="35" ry="45" fill="#fff" mask={`url(#${id})`} />
        <line x1="50" y1="2" x2="50" y2="98" className={c.axis} transform={`rotate(${ang.toFixed(1)} 50 50)`} />
      </svg>
      <Track bind={bind} v={v} label="Stress axis" text={`${Math.round(ang)} degrees`} />
    </div>
  );
}
