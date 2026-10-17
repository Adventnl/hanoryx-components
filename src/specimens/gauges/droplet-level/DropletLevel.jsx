import { useId } from 'react';
import c from "../gauges.module.css";

/* 17 */ const DROP = 'M30 4C30 4 8 30 8 50a22 22 0 0 0 44 0C52 30 30 4 30 4Z';

export function DropletLevel() {
  const id = `drop${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.drop} role="img" aria-label="A droplet filling and draining">
      <svg viewBox="0 0 60 80">
        <defs><clipPath id={id}><path d={DROP} /></clipPath></defs>
        <g clipPath={`url(#${id})`}>
          <g className={c.level}>
            <path className={c.wave} d="M-30 0q7.5-5 15 0t15 0 15 0 15 0 15 0 15 0 15 0 15 0V90H-30Z" />
          </g>
        </g>
        <path className={c.rim} d={DROP} />
      </svg>
      <b className={c.num} />
    </div>
  );
}
