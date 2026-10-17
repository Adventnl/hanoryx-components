import c from "../skeletons.module.css";

/* 18 */ export function InboxZero() {
  return (
    <div className={c.empty}>
      <i className={c.tray} aria-hidden="true" /><b>Inbox zero</b><p>Everything has been dealt with.</p>
    </div>
  );
}
