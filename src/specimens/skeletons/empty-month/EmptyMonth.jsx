import c from "../skeletons.module.css";

/* 29 */ export function EmptyMonth() {
  return <div className={c.cal} role="img" aria-label="An empty month">{Array.from({ length: 21 }, (_, k) => <i key={k} data-hot={k === 9} />)}</div>;
}
