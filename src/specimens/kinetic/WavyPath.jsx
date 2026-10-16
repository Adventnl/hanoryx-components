import { useId } from 'react';
import c from './kinetic.module.css';

/* 18 */ const WAVE_D = (() => {
  let d = 'M-60 40';
  for (let k = 0; k < 8; k += 1) d += `q15-24 30 0t30 0`;
  return d;
})();

export function WavyPath() {
  const id = `wp${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig} role="img" aria-label="Text riding a wave">
      <svg className={c.waveSvg} viewBox="0 0 160 80" aria-hidden="true">
        <defs><path id={id} d={WAVE_D} /></defs>
        <g className={c.ride}><text><textPath href={`#${id}`}>on the crest of a long wave on the crest of a long wave on the crest</textPath></text></g>
      </svg>
    </div>
  );
}
