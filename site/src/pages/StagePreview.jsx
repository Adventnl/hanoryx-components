/* A specimen family on its scroll stage, full-page — what /showcase/<slug> is on the site.
   ?stage=<name> tries the same specimens on another stage. */
import { Link } from 'react-router-dom';
import { ShowcasePage } from 'hanoryx-components/stage';

export default function StagePreview() {
  return (
    <>
      <Link to="/" style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 100001, font: '500 0.65rem var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.6rem 0.9rem', background: '#000', border: '1px solid var(--c-line-strong)', color: 'var(--c-white)' }}>← Back to docs</Link>
      <ShowcasePage />
    </>
  );
}
