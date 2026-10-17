import c from "../faders.module.css";

export function Visual() {
  return (
    <div className={c.desk} aria-hidden="true">
      {Array.from({ length: 8 }, (_, k) => (
        <div key={k} className={c.lane} style={{ '--k': k }}>
          <i className={c.cap} />
          <b className={c.led} />
          <span>{k + 1}</span>
        </div>
      ))}
    </div>
  );
}
