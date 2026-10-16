import c from './tilt.module.css';

const LAYERS = ['base', 'grid', 'trace', 'chip', 'fins', 'pane'];

const TRACES = 'M10 30H40V60H70M10 50H25V80H60M90 20V45H60M90 90H70V70M30 90V70H45';

export function Visual() {
  return (
    <div className={c.iso} aria-hidden="true">
      <div className={c.scene}>
        {LAYERS.map((l, i) => (
          <div key={l} className={`${c.layer} ${c[l]}`} style={{ '--i': i }}>
            {l === 'trace' ? <svg viewBox="0 0 100 100"><path d={TRACES} /></svg> : null}
            {l === 'chip' ? <b>H</b> : null}
            {l === 'fins' ? [0, 1, 2, 3, 4, 5].map((k) => <i key={k} />) : null}
          </div>
        ))}
      </div>
      <p className={c.isoTag}><i className="sc-led" /> Exploded view</p>
    </div>
  );
}
