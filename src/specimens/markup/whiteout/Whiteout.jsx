import { useId } from 'react';
import { useToggle } from "../../../stage/hooks";
import c from "../markup.module.css";

export function Whiteout() {
  const id = `blot${useId().replace(/\W/g, '')}`;
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <svg className={c.defs} width="0" height="0" aria-hidden="true" focusable="false">
        <filter id={id} x="-15%" y="-40%" width="130%" height="180%"><feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="2" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="10" /></filter>
      </svg>
      <span className={c.para}>My account number is <span className={c.blotWrap}>0000 1234 5678<i className={c.blot} data-on={on} style={{ filter: `url(#${id})` }} /></span>, said no one.</span>
    </button>
  );
}
