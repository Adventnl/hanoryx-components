import c from './glyphs.module.css';

export function DoubleOutline() {
  return (
    <div className={c.fig} role="img" aria-label="The word echo, wrapped in two outlines">
      <svg className={c.dbl} viewBox="0 0 120 56" aria-hidden="true">
        <text className={c.dblA} x="60" y="42" textAnchor="middle">Echo</text>
        <text className={c.dblB} x="60" y="42" textAnchor="middle">Echo</text>
        <text className={c.dblC} x="60" y="42" textAnchor="middle">Echo</text>
      </svg>
    </div>
  );
}
