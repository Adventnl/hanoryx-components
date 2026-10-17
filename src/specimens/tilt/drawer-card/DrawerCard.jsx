import { useToggle } from "../../../stage/hooks";
import c from "../tilt.module.css";

export function DrawerCard() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-expanded={on} aria-label="A card with a drawer" onClick={flip}>
      <span className={c.drawerBox} data-on={on}>
        <i className={c.drawer}><b>Drawer</b></i>
        <i className={c.shell}><b>Card</b><span>pull for more</span></i>
      </span>
    </button>
  );
}
