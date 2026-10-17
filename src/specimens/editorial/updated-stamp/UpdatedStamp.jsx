import { useTick } from "../../../stage/hooks";
import c from "../editorial.module.css";

export function UpdatedStamp() {
  const t = useTick(1500);
  const m = 2 + t;
  return (
    <div className={c.fig} role="img" aria-label={`Updated ${m} minutes ago`}>
      <p className={c.stamp}><i className="sc-led" /> Updated <b key={m}>{m}</b> min ago</p>
    </div>
  );
}
