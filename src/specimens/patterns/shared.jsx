import c from './patterns.module.css';

export const svg = (w, h, body) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${body}</svg>`)}")`;

export const line = (d, o = 0.3) => `<path d='${d}' fill='none' stroke='#fff' stroke-opacity='${o}' stroke-width='1'/>`;

export const F = 'var(--pf)';

export const cx = (...a) => a.filter(Boolean).join(' ');

export const TABLE = [
  ['Dot grid', { backgroundImage: `radial-gradient(${F} 1px, transparent 1.6px)`, backgroundSize: '14px 14px' }],
  ['Dot stagger', { backgroundImage: `radial-gradient(${F} 1.2px, transparent 1.8px), radial-gradient(${F} 1.2px, transparent 1.8px)`, backgroundSize: '16px 16px', backgroundPosition: '0 0, 8px 8px' }],
  ['Graph paper', { backgroundImage: `linear-gradient(${F} 1px, transparent 1px), linear-gradient(90deg, ${F} 1px, transparent 1px), linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`, backgroundSize: '12px 12px, 12px 12px, 60px 60px, 60px 60px' }],
  ['Blueprint', { backgroundColor: '#0b2a4a', backgroundImage: 'linear-gradient(rgba(120,180,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(120,180,255,.22) 1px, transparent 1px), linear-gradient(rgba(120,180,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(120,180,255,.5) 1px, transparent 1px)', backgroundSize: '10px 10px, 10px 10px, 50px 50px, 50px 50px' }],
  ['Iso lines', { backgroundImage: `repeating-linear-gradient(30deg, ${F} 0 1px, transparent 1px 14px), repeating-linear-gradient(150deg, ${F} 0 1px, transparent 1px 14px), repeating-linear-gradient(90deg, ${F} 0 1px, transparent 1px 12px)` }],
  ['Hatching', { backgroundImage: `repeating-linear-gradient(45deg, ${F} 0 1px, transparent 1px 7px)` }],
  ['Cross hatch', { backgroundImage: `repeating-linear-gradient(45deg, ${F} 0 1px, transparent 1px 8px), repeating-linear-gradient(-45deg, ${F} 0 1px, transparent 1px 8px)` }],
  ['Wide stripes', { backgroundImage: `repeating-linear-gradient(45deg, ${F} 0 6px, transparent 6px 14px)` }],
  ['Zigzag', { backgroundImage: `linear-gradient(135deg, ${F} 25%, transparent 25%), linear-gradient(225deg, ${F} 25%, transparent 25%), linear-gradient(315deg, ${F} 25%, transparent 25%), linear-gradient(45deg, ${F} 25%, transparent 25%)`, backgroundSize: '20px 20px', backgroundPosition: '-10px 0, -10px 0, 0 0, 0 0' }],
  ['Checker', { backgroundImage: `conic-gradient(${F} 25%, transparent 0 50%, ${F} 0 75%, transparent 0)`, backgroundSize: '20px 20px' }],
  ['Honeycomb', { backgroundImage: svg(28, 48.5, line('M14 0L28 8.08V24.25L14 32.33L0 24.25V8.08Z M14 32.33V48.5')), backgroundSize: '28px 48.5px' }],
  ['Bricks', { backgroundImage: svg(40, 20, line('M0 0H40M0 10H40M0 0V10M20 10V20', 0.32)), backgroundSize: '40px 20px' }],
  ['Fish scales', { backgroundImage: svg(24, 12, line('M0 12a12 12 0 0 1 24 0M-12 6a12 12 0 0 1 24 0M12 6a12 12 0 0 1 24 0', 0.3)), backgroundSize: '24px 12px' }],
  ['Basket weave', { backgroundImage: svg(16, 16, line('M1 4H7M9 12H15M4 1V7M12 9V15M9 4H15M1 12H7', 0.34)), backgroundSize: '16px 16px' }],
  ['Plus field', { backgroundImage: svg(20, 20, line('M10 7V13M7 10H13', 0.45)), backgroundSize: '20px 20px' }],
  ['Wave rows', { backgroundImage: svg(24, 12, line('M0 6q6-6 12 0t12 0', 0.4)), backgroundSize: '24px 12px' }],
  ['Ripple fans', { backgroundImage: svg(40, 20, line('M2 20a18 18 0 0 1 36 0M8 20a12 12 0 0 1 24 0M14 20a6 6 0 0 1 12 0M-18 10a18 18 0 0 1 36 0M-12 10a12 12 0 0 1 24 0M-6 10a6 6 0 0 1 12 0M22 10a18 18 0 0 1 36 0M28 10a12 12 0 0 1 24 0M34 10a6 6 0 0 1 12 0', 0.3)), backgroundSize: '40px 20px' }],
  ['Ring field', { backgroundImage: `repeating-radial-gradient(circle at 50% 50%, ${F} 0 1px, transparent 1px 9px)` }],
  ['Chain link', { backgroundImage: svg(20, 20, line('M10 0L20 10L10 20L0 10Z M10 5L15 10L10 15L5 10Z', 0.3)), backgroundSize: '20px 20px' }],
  ['Scan lines', { backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.14) 0 1px, transparent 1px 3px)' }],
  ['Pinstripe', { backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,.3) 0 1px, transparent 1px 10px)' }],
  ['Tartan', { backgroundColor: '#3a0d14', backgroundImage: 'repeating-linear-gradient(90deg, rgba(20,60,120,.55) 0 8px, transparent 8px 24px, rgba(255,255,255,.35) 24px 25px, transparent 25px 40px), repeating-linear-gradient(0deg, rgba(20,60,120,.55) 0 8px, transparent 8px 24px, rgba(255,255,255,.35) 24px 25px, transparent 25px 40px)' }],
  ['Polka mix', { backgroundImage: `radial-gradient(${F} 4px, transparent 4.5px), radial-gradient(${F} 1.5px, transparent 2px)`, backgroundSize: '28px 28px, 14px 14px', backgroundPosition: '0 0, 7px 7px' }],
  ['Lined sheet', { backgroundColor: '#efe7d2', backgroundImage: 'linear-gradient(90deg, transparent 22px, rgba(200,60,60,.5) 22px 23px, transparent 23px), repeating-linear-gradient(0deg, transparent 0 15px, rgba(60,100,200,.35) 15px 16px)' }],
  ['Harlequin', { backgroundImage: `linear-gradient(45deg, ${F} 25%, transparent 25% 75%, ${F} 75%), linear-gradient(45deg, ${F} 25%, transparent 25% 75%, ${F} 75%)`, backgroundSize: '24px 24px', backgroundPosition: '0 0, 12px 12px' }],
  ['Registration', { backgroundImage: svg(32, 32, '<g fill="none" stroke="#fff" stroke-opacity=".4"><circle cx="16" cy="16" r="5"/><path d="M16 6V26M6 16H26"/></g>'), backgroundSize: '32px 32px' }],
  ['Corner ticks', { backgroundImage: svg(28, 28, line('M2 8V2H8M20 2H26V8M26 20V26H20M8 26H2V20', 0.42)), backgroundSize: '28px 28px' }],
  ['Stitching', { backgroundImage: svg(16, 12, line('M1 6H9', 0.45)), backgroundSize: '16px 12px' }],
  ['Pegboard', { backgroundImage: 'radial-gradient(circle, rgba(0,0,0,.7) 2.6px, rgba(255,255,255,.22) 3px, transparent 3.6px)', backgroundSize: '16px 16px' }],
  ['Triangles', { backgroundImage: svg(24, 21, line('M0 21L12 0L24 21Z M-12 0L0 21M24 21L36 0', 0.3)), backgroundSize: '24px 21px' }],
];

export const mk = (label, style) => function Tile() { return <div className={c.sw} role="img" aria-label={`${label} pattern`} style={style} />; };

/* ---- sliders, pointer and clicks ---- */
export const Rail = ({ v, bind, label }) => <div className={c.rail} {...bind} aria-label={label}><u style={{ left: `${v * 100}%` }} /></div>;
