import c from './kinetic.module.css';

/* 31 */ export function MirrorRipple() {
  return (
    <div className={c.fig} role="img" aria-label="Mirror, reflected in water">
      <div className={c.mirror}><b>MIRROR</b><b aria-hidden="true">MIRROR</b></div>
    </div>
  );
}
