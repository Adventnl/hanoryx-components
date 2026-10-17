import c from "../popovers.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.ref}><span>ANCHOR</span></div>
      <div className={c.bubble}><b>Popover</b><span>placement turns with the page</span><i /></div>
      <small>1 ANCHOR · 12 PLACEMENTS</small>
    </div>
  );
}
