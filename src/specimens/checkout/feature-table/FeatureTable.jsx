import c from "../checkout.module.css";
import { Co } from "../shared";

/* 05 */ export function FeatureTable() {
  const F = [['Projects', [1, 1, 1]], ['Export', [0, 1, 1]], ['SSO', [0, 0, 1]]];
  return (
    <Co label="Feature matrix" className={c.mx}>
      <div><span /><small>Solo</small><small>Team</small><small>Scale</small></div>
      {F.map(([t, r]) => <div key={t}><span>{t}</span>{r.map((x, k) => <i key={k} data-on={!!x}>{x ? '✓' : '–'}</i>)}</div>)}
    </Co>
  );
}
