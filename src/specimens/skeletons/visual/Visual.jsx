import c from "../skeletons.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visCard}>
        <i className={c.visPic} />
        <div className={c.visBody}>
          <b className={c.visH}><u>Quiet interfaces</u><s /></b>
          <p className={c.visP}><u>Made to be waited for, then forgotten.</u><s /></p>
          <p className={c.visP2}><u>Forty-two shapes</u><s /></p>
        </div>
      </div>
      <small>1 CARD · 3 STATES</small>
    </div>
  );
}
