import c from './glyphs.module.css';

export function OutlinePass() {
  return (
    <div className={c.fig} role="img" aria-label="The word trace, outlined and then filled">
      <svg className={c.pass} viewBox="0 0 120 52" aria-hidden="true"><text x="60" y="40" textAnchor="middle">Trace</text></svg>
    </div>
  );
}
