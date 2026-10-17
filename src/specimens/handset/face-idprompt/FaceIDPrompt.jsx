import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 07 */ export function FaceIDPrompt() {
  const [ok, setOk] = useState(false);
  return (
    <Phone label="Biometric prompt" className={c.center}>
      <button type="button" className={c.finger} data-ok={ok} aria-pressed={ok} aria-label="Fingerprint sensor" onClick={() => setOk((v) => !v)}><i /><i /><i /><Ico n={ok ? 'check' : 'user'} /></button>
      <b className={c.h}>{ok ? 'Verified' : 'Touch to unlock'}</b>
    </Phone>
  );
}
