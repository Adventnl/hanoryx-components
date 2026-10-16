import c from './markup.module.css';

export function SelectionStyle() {
  return (
    <div className={c.fig} role="img" aria-label="Text being selected and released, with a handle at each end">
      <p className={c.selLine}><span className={c.sel}>Select a few words, then let go.</span></p>
    </div>
  );
}
