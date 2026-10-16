import c from './fields.module.css';

/* 3 */ export function OneTimeCode() {
  const next = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(-1);
    e.target.value = v;
    if (v) e.target.nextElementSibling?.focus();
  };
  const back = (e) => { if (e.key === 'Backspace' && !e.target.value) e.target.previousElementSibling?.focus(); };
  return (
    <div className={c.otp} role="group" aria-label="One-time code">
      {Array.from({ length: 6 }, (_, i) => <input key={i} inputMode="numeric" maxLength={2} aria-label={`Digit ${i + 1}`} onChange={next} onKeyDown={back} />)}
    </div>
  );
}
