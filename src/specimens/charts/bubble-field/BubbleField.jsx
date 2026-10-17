import c from "../charts.module.css";

/* 11 */ const BUBBLES = [[14, 62, 9, 5.2], [34, 30, 14, 6.4], [58, 66, 11, 4.8], [78, 28, 7, 5.6], [88, 62, 12, 6], [48, 14, 6, 4.4], [22, 16, 5, 5], [70, 84, 8, 5.8], [40, 80, 5, 4.6]];

export function BubbleField() {
  return (
    <div className={c.bubbles} role="img" aria-label="Bubbles drifting up and down">
      {BUBBLES.map(([x, y, s, d], i) => (
        <i key={i} data-red={i % 4 === 1} style={{ left: `${x}%`, top: `${y}%`, '--s': s, animationDuration: `${d}s`, animationDelay: `${-i * 0.7}s` }}>{s > 10 ? s : ''}</i>
      ))}
    </div>
  );
}
