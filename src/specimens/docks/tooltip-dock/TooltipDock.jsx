import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 17 */ export function TooltipDock() {
  const names = ['Inbox', 'Tasks', 'Notes', 'Files'];
  const icons = ['mail', 'check', 'pen', 'folder'];
  return (
    <div className={c.tips} role="toolbar" aria-label="Dock with labels">
      {icons.map((n, k) => <button key={n} type="button" aria-label={names[k]} data-tip={names[k]}><Ico n={n} /></button>)}
    </div>
  );
}
