import c from './lenses.module.css';
import { Area, Scene } from './shared';

/* 3 */ export function ZoomSidePane() {
  return (
    <Area label="Zoom with a side pane" className={c.side}>
      <Scene className={c.fill} /><i className={c.box} />
      <div className={c.pane}><div><Scene /></div></div>
    </Area>
  );
}
