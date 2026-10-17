import c from "../passes.module.css";
import { BC, Barcode } from "../shared";

/* 6 */
export function LaserScan() {
  return (
    <div className={c.ls}>
      <span className={c.kp}>Scan me</span>
      <span className={c.lsCode}>
        <Barcode code={BC.a} className={c.lsDim} />
        <Barcode code={BC.a} className={c.lsHot} />
        <i className={c.lsBeam} />
      </span>
      <span className={c.lsOut}>4 006381 333931</span>
    </div>
  );
}
