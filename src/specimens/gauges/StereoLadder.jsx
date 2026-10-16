import c from './gauges.module.css';

/* 26 */ export function StereoLadder() {
  return (
    <div className={c.stereo} role="img" aria-label="Stereo level ladder">
      {['L', 'R'].map((ch, k) => (
        <div key={ch} className={c.col} style={{ animationDuration: k ? '3.1s' : '2.6s', animationDelay: k ? '-1.2s' : '0s' }}>
          {Array.from({ length: 16 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
          <em>{ch}</em>
        </div>
      ))}
      <ol><li>0</li><li>-6</li><li>-12</li><li>-24</li></ol>
    </div>
  );
}
