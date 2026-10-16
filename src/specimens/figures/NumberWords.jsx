import { useState } from 'react';
import c from './figures.module.css';

/* 28 */ const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const below100 = (n) => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : ''));

const below1000 = (n) => (n < 100 ? below100(n) : `${ONES[Math.floor(n / 100)]} hundred${n % 100 ? ` ${below100(n % 100)}` : ''}`);

const words = (n) => {
  if (n === 0) return 'zero';
  const out = [];
  [[1e9, 'billion'], [1e6, 'million'], [1e3, 'thousand'], [1, '']].forEach(([v, name]) => {
    const part = Math.floor(n / v) % 1000;
    if (part) out.push(`${below1000(part)}${name ? ` ${name}` : ''}`);
  });
  return out.join(' ');
};

export function NumberWords() {
  const [text, setText] = useState('1234567');
  const n = Number(text) || 0;
  return (
    <div className={c.fig}>
      <input className={c.input} inputMode="numeric" value={text} maxLength={12} aria-label="A whole number to spell out" onChange={(e) => setText(e.target.value.replace(/\D/g, ''))} />
      <p className={c.words}>{words(n)}</p>
    </div>
  );
}
