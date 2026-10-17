import { useEffect, useRef, useState } from 'react';
import c from "../keypads.module.css";

/* 30 */ export function UploadRing() {
  const [p, setP] = useState(0);
  const timer = useRef(0);
  useEffect(() => {
    const t = timer;
    return () => window.clearInterval(t.current);
  }, []);
  const go = () => {
    window.clearInterval(timer.current);
    setP(0);
    timer.current = window.setInterval(() => setP((v) => { if (v >= 100) { window.clearInterval(timer.current); return 100; } return v + 4; }), 60);
  };
  return <button type="button" className={c.upload} style={{ '--p': p }} onClick={go}><span>{p === 0 ? 'Upload' : p >= 100 ? 'Done' : `${p}%`}</span></button>;
}
