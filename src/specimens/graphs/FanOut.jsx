import c from './graphs.module.css';

/* 27 */ export function FanOut() {
  return (
    <div className={c.fig} role="img" aria-label="One source fanning out to six listeners">
      <svg className={c.svg} viewBox="0 0 100 70" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => {
          const y = 8 + i * 11;
          return (
            <g key={i}>
              <path className={c.edge} d={`M22 35C50 35 50 ${y} 80 ${y}`} />
              <circle className={c.dot} r="1.6" style={{ offsetPath: `path("M22 35C50 35 50 ${y} 80 ${y}")`, animationDelay: `${i * 0.3}s` }} />
              <circle className={c.nd} cx="84" cy={y} r="3" />
            </g>
          );
        })}
        <circle className={c.core} cx="18" cy="35" r="5" />
      </svg>
    </div>
  );
}
