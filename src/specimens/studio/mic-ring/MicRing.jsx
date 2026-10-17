import { Ico } from "../../../stage/components/icons/icons";
import c from "../studio.module.css";
import { useLevels } from "../shared";

/* 39 */ export function MicRing() {
  const [l] = useLevels(1, 100);
  return <div className={c.mic} role="img" aria-label="Microphone level" style={{ '--l': l }}><i /><i /><Ico n="mic" /></div>;
}
