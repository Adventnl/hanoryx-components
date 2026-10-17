import { useState } from 'react';
import c from "../gauges.module.css";

/* 33 */ const DISK = [['Apps', 0.24], ['Media', 0.31], ['Docs', 0.12], ['System', 0.15], ['Free', 0.18]];

export function DiskUsage() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.disk} data-hot={hot}>
      <div className={c.stack}>{DISK.map(([n, w], i) => <i key={n} style={{ '--w': w, '--k': i }} data-hot={hot === i} />)}</div>
      <ul>
        {DISK.map(([n, w], i) => (
          <li key={n}>
            <button type="button" onPointerEnter={() => setHot(i)} onPointerLeave={() => setHot(-1)} onFocus={() => setHot(i)} onBlur={() => setHot(-1)} onClick={() => setHot(i)}>
              <b style={{ '--k': i }} />{n}<em>{Math.round(w * 100)}%</em>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
