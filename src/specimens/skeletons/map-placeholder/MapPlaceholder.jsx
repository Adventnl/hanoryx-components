import { Ico } from "../../../stage/components/icons/icons";
import c from "../skeletons.module.css";
import { Shell } from "../shared";

/* 35 */ export function MapPlaceholder() {
  return <Shell className={c.mapSk} label="Loading map"><i aria-hidden="true" /><Ico n="pin" /></Shell>;
}
