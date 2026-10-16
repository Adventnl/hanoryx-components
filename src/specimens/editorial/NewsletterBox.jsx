import { useState } from 'react';
import c from './editorial.module.css';

export function NewsletterBox() {
  const [mail, setMail] = useState('');
  const [sent, setSent] = useState(false);
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  return (
    <div className={c.fig}>
      <form className={c.news} onSubmit={(e) => { e.preventDefault(); if (ok) setSent(true); }}>
        <label htmlFor="ed-mail">One note a week, never more.</label>
        <div>
          <input id="ed-mail" type="email" value={mail} onChange={(e) => { setMail(e.target.value); setSent(false); }} placeholder="you@example.com" autoComplete="off" data-ok={ok} />
          <button type="submit" disabled={!ok}>{sent ? 'Subscribed' : 'Subscribe'}</button>
        </div>
      </form>
    </div>
  );
}
