import { useEffect, useState } from 'react';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 7 */ export function UploadToast() {
  const [p, setP] = useState(-1);
  useEffect(() => {
    if (p < 0 || p >= 100) return undefined;
    const id = setTimeout(() => setP((v) => Math.min(100, v + 7)), 120);
    return () => clearTimeout(id);
  }, [p]);
  return (
    <div className={c.stage}>
      <Fire onClick={() => setP(0)}>Upload</Fire>
      {p >= 0 && <div role="status" className={c.toast}><span>{p < 100 ? `Uploading… ${p}%` : 'Upload complete'}</span><u aria-hidden="true"><s style={{ width: `${p}%` }} /></u></div>}
    </div>
  );
}
