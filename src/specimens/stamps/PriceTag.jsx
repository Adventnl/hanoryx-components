import c from './stamps.module.css';

/* 16 */ export function PriceTag() {
  return (
    <div className={c.tagWrap} role="img" aria-label="A price tag on a string">
      <div className={c.tag}><i /><b>$24</b><small>SALE</small></div>
    </div>
  );
}
