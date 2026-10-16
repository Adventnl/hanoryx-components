import c from './waves.module.css';

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.rings} />
      <small>2 SOURCES · 1 PATTERN</small>
    </div>
  );
}
