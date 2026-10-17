import c from "../beams.module.css";

export function Visual() {
  const pads = [18, 40, 62, 84];
  return (
    <div className={c.vis} aria-hidden="true">
      <svg viewBox="0 0 60 100" preserveAspectRatio="xMidYMid meet">
        <path d="M30 2V14L14 22V40L30 50V64L46 72V98" className={c.visBase} />
        <path d="M30 2V14L14 22V40L30 50V64L46 72V98" pathLength="100" className={c.visLit} />
        {pads.map((y, k) => <circle key={y} cx={[14, 30, 46, 46][k]} cy={y} r="3" className={c.visPad} style={{ '--at': (k + 1) / 5 }} />)}
      </svg>
      <small>1 TRACE · 4 PADS</small>
    </div>
  );
}
