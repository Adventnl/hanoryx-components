import { useState } from 'react';
import c from './gauges.module.css';

export const pt = (cx, cy, r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [+(cx + Math.sin(a) * r).toFixed(2), +(cy - Math.cos(a) * r).toFixed(2)];
};

export const arc = (cx, cy, r, from, to) => {
  const [x1, y1] = pt(cx, cy, r, from);
  const [x2, y2] = pt(cx, cy, r, to);
  return `M${x1} ${y1}A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${x2} ${y2}`;
};

/* tick marks (and optional numerals) around the pivot at 50,50 */
export function Ticks({ n, from, to, r, len = 3, major = 0, majorLen = 6, labels, labelR, closed = false }) {
  const out = [];
  const last = closed ? n - 1 : n;
  for (let i = 0; i <= last; i += 1) {
    const deg = from + ((to - from) * i) / n;
    const big = major > 0 && i % major === 0;
    const [x1, y1] = pt(50, 50, r, deg);
    const [x2, y2] = pt(50, 50, r - (big ? majorLen : len), deg);
    out.push(<line key={i} className={big ? c.major : undefined} x1={x1} y1={y1} x2={x2} y2={y2} />);
    if (big && labels) {
      const [tx, ty] = pt(50, 50, labelR ?? r - majorLen - 4, deg);
      out.push(<text key={`t${i}`} x={tx} y={ty} textAnchor="middle" dominantBaseline="central">{labels[i / major]}</text>);
    }
  }
  return <g className={c.ticks}>{out}</g>;
}

/* a button that wants to be hovered: hover for a mouse, a tap for touch, Enter for a keyboard */
export function useHot() {
  const [hot, setHot] = useState(false);
  const bind = {
    onPointerEnter: (e) => { if (e.pointerType === 'mouse') setHot(true); },
    onPointerLeave: (e) => { if (e.pointerType === 'mouse') setHot(false); },
    onPointerDown: (e) => { if (e.pointerType !== 'mouse') setHot((h) => !h); },
    onClick: (e) => { if (e.detail === 0) setHot((h) => !h); },
    onBlur: () => setHot(false),
  };
  return [hot, bind];
}
