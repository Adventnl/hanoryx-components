import c from "../toasts.module.css";

/* 22 */ export function SystemBar() {
  return (
    <div role="alert" className={`${c.banner} ${c.sys}`}><i aria-hidden="true" /><span>Degraded: search is slow. We are on it.</span></div>
  );
}
