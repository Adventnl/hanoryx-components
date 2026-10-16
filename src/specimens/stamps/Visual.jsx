import c from './stamps.module.css';

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visPaper}>
        <i /><i /><i /><i />
        <span className={c.visTapeL} />
        <span className={c.visTapeR} />
        <b className={c.visStamp}>APPROVED</b>
        <span className={c.visRing} />
      </div>
      <small>1 STAMP · 2 STRIPS OF TAPE</small>
    </div>
  );
}
