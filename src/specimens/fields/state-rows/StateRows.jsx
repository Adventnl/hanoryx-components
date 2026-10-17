import c from "../fields.module.css";

/* 39 */ export function StateRows() {
  return (
    <div className={c.states}>
      {[['bad', 'Required', 'error'], ['ok', 'Looks good', 'ok'], ['warn', 'Check the format', 'warn']].map(([k, m, s]) => (
        <label key={k} data-s={s}><input defaultValue={k === 'ok' ? 'valid' : ''} placeholder={m === 'Required' ? 'name' : 'value'} aria-label={`${s} state`} aria-invalid={s === 'error'} /><span>{m}</span></label>
      ))}
    </div>
  );
}
