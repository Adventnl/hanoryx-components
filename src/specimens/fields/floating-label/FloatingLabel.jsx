import c from "../fields.module.css";

/* 1 */ export function FloatingLabel() {
  return <label className={c.float}><input placeholder=" " /><span>Email address</span></label>;
}
