import c from "../skeletons.module.css";

/* 20 */ export function LostPage() {
  return <div className={c.lost}><b>404</b><p>This page wandered off.</p><a href="#lost" onClick={(e) => e.preventDefault()}>Back to the start</a></div>;
}
