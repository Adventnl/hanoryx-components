import { useCycle } from "../../../stage/hooks";
import c from "../handset.module.css";
import { Phone, cx } from "../shared";

/* 41 */ export function LoadToContent() {
  const n = useCycle(6, 1100);
  const loaded = n >= 3;
  return (
    <Phone label="Loading then content">
      <div className={c.row}><span className={cx(c.skel, loaded && c.gone)} style={{ width: '45%' }} /><b className={c.h} style={{ opacity: loaded ? 1 : 0 }}>Reports</b></div>
      {[0, 1, 2].map((k) => <div key={k} className={cx(c.sk, loaded && c.loaded)}><i /><u className={c.line} /></div>)}
      <span className={c.p}>{loaded ? 'Loaded' : 'Loading…'}</span>
    </Phone>
  );
}
