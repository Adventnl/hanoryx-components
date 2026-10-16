import c from './tabs.module.css';

const WORDS = ['Overview', 'Detail', 'History', 'Notes', 'Export'];

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visStrip}>
        {WORDS.map((w, k) => <span key={w} style={{ '--k': k }}>{w}</span>)}
        <i />
      </div>
      <div className={c.visPanels}>
        {WORDS.map((w, k) => <b key={w} style={{ '--k': k }}>{w}</b>)}
      </div>
      <div className={c.visRule}><i /></div>
      <small>5 TABS · 1 INDICATOR</small>
    </div>
  );
}
