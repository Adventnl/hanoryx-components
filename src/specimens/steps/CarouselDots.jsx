import { useCycle } from '../../stage/hooks';
import c from './steps.module.css';

/* 14 */ export function CarouselDots() {
  const k = useCycle(5, 1800);
  return <div className={c.cdots} role="img" aria-label={`Slide ${k + 1} of 5`}>{[0, 1, 2, 3, 4].map((i) => <i key={i} data-on={i === k} />)}</div>;
}
