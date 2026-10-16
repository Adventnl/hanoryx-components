import { useToggle } from '../../stage/hooks';
import c from './skeletons.module.css';

/* 15 */ export function BlurUp() {
  const [sharp, flip] = useToggle();
  return (
    <div className={c.blur}>
      <div data-sharp={sharp} role="img" aria-label={sharp ? 'Sharp picture' : 'Blurred preview'} />
      <button type="button" aria-pressed={sharp} onClick={flip}>{sharp ? 'Blur again' : 'Sharpen'}</button>
    </div>
  );
}
