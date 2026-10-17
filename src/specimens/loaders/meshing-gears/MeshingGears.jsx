import c from "../loaders.module.css";
import { status } from "../shared";

/* 18 */ export function MeshingGears() {
  return (
    <svg className={c.gears} viewBox="0 0 80 50" {...status('Loading')}>
      <g className={c.g1}><circle cx="26" cy="25" r="12" /><path d="M26 9v6M26 35v6M10 25h6M36 25h6M14.7 13.7l4.2 4.2M33.1 32.1l4.2 4.2M14.7 36.3l4.2-4.2M33.1 17.9l4.2-4.2" /></g>
      <g className={c.g2}><circle cx="54" cy="25" r="9" /><path d="M54 13v4M54 33v4M42 25h4M62 25h4M45.5 16.5l2.8 2.8M59.7 30.7l2.8 2.8M45.5 33.5l2.8-2.8M59.7 19.3l2.8-2.8" /></g>
    </svg>
  );
}
