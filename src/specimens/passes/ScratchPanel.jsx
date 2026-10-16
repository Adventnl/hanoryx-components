import { useEffect, useRef, useState } from 'react';
import c from './passes.module.css';

/* 3 */
const SCR_W = 288;

const SCR_H = 96;

function paintFoil(cv) {
  const g = cv?.getContext('2d');
  if (!g) return;
  g.globalCompositeOperation = 'source-over';
  const grad = g.createLinearGradient(0, 0, SCR_W, SCR_H);
  grad.addColorStop(0, '#7e818a');
  grad.addColorStop(0.45, '#dcdde2');
  grad.addColorStop(1, '#6f727b');
  g.fillStyle = grad;
  g.fillRect(0, 0, SCR_W, SCR_H);
  g.fillStyle = 'rgba(0,0,0,0.07)';
  for (let y = 0; y < SCR_H; y += 3) g.fillRect(0, y, SCR_W, 1);
  g.fillStyle = '#4b4e56';
  g.font = '600 12px "JetBrains Mono", monospace';
  g.textAlign = 'center';
  g.fillText('SCRATCH HERE', SCR_W / 2, SCR_H / 2 + 4);
}

export function ScratchPanel() {
  const cv = useRef(null);
  const down = useRef(false);
  const strokes = useRef(0);
  const [done, setDone] = useState(false);
  useEffect(() => { paintFoil(cv.current); }, []);
  const scratch = (e) => {
    const el = cv.current;
    const g = el.getContext('2d');
    if (!g) return;
    const r = el.getBoundingClientRect();
    g.globalCompositeOperation = 'destination-out';
    g.beginPath();
    g.arc(((e.clientX - r.left) / r.width) * SCR_W, ((e.clientY - r.top) / r.height) * SCR_H, 13, 0, Math.PI * 2);
    g.fill();
    strokes.current += 1;
    if (strokes.current % 5 === 0) {
      const px = g.getImageData(0, 0, SCR_W, SCR_H).data;
      let clear = 0;
      let all = 0;
      for (let i = 3; i < px.length; i += 148) { all += 1; if (px[i] === 0) clear += 1; }
      if (clear / all > 0.5) { g.clearRect(0, 0, SCR_W, SCR_H); setDone(true); }
    }
  };
  const reveal = () => { cv.current.getContext('2d')?.clearRect(0, 0, SCR_W, SCR_H); setDone(true); };
  const again = () => { paintFoil(cv.current); strokes.current = 0; setDone(false); };
  return (
    <div className={c.fig}>
      <div className={c.sp} data-done={done}>
        <span className={c.spPrize}>
          <span className={c.kp}>Prize</span>
          <b>Win 250</b>
          <i className={c.stars} aria-hidden="true"><u /><u /><u /></i>
        </span>
        <canvas
          ref={cv}
          className={c.spFoil}
          width={SCR_W}
          height={SCR_H}
          aria-label="Foil panel: scratch it with the pointer, or press the reveal button"
          onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); down.current = true; scratch(e); }}
          onPointerMove={(e) => { if (down.current) scratch(e); }}
          onPointerUp={() => { down.current = false; }}
          onPointerCancel={() => { down.current = false; }}
        />
      </div>
      <p className={c.row}>
        <button type="button" className={c.btn} onClick={reveal}>Reveal</button>
        <button type="button" className={c.btn} onClick={again}>New card</button>
      </p>
    </div>
  );
}
