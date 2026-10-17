import { useId } from 'react';
import { usePoint } from "../../../stage/chartKit";
import c from "../glyphs.module.css";

export function Knockout() {
  const [p, bind] = usePoint();
  const id = `ko${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.fig}>
      <div {...bind} className={c.ko} aria-label="Letters knocked out of a block; move over it to move the light" style={{ ...bind.style, '--lx': `${p ? p.x : 30}%`, '--ly': `${p ? p.y : 40}%` }}>
        <svg viewBox="0 0 120 56" aria-hidden="true">
          <defs><mask id={id}><rect width="120" height="56" fill="#fff" /><text x="60" y="42" textAnchor="middle" fill="#000">OUT</text></mask></defs>
          <rect width="120" height="56" fill="#0a0b0d" mask={`url(#${id})`} />
        </svg>
      </div>
    </div>
  );
}
