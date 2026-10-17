import c from "../wipes.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visBox}>
        <section><b>A</b><span>Before</span></section>
        <section><b>B</b><span>After</span><i /></section>
      </div>
      <small>2 PANELS · 1 EDGE</small>
    </div>
  );
}
