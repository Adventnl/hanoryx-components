import { useTick } from "../../../stage/hooks";
import c from "../archive.module.css";

/* 36 */ export function RetentionBar() {
  const n = useTick(1100);
  const left = 5 - (n % 6);
  return (
    <div className={c.ret} role="img" aria-label={`${left} years of retention left`}>
      <div>{Array.from({ length: 7 }, (_, k) => <i key={k} data-on={k < 7 - left} />)}</div>
      <small>{left > 0 ? `${left} years to keep` : 'ready to destroy'}</small>
    </div>
  );
}
