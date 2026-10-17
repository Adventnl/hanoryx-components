import c from "../skeletons.module.css";
import { Shell } from "../shared";

/* 9 */ export function GalleryGrid() {
  return <Shell className={c.gallery} label="Loading gallery">{Array.from({ length: 6 }, (_, k) => <i key={k} className={c.sk} style={{ animationDelay: `${k * 0.1}s` }} />)}</Shell>;
}
