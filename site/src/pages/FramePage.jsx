/* A recipe on a bare page: inside an <iframe> it gets a real viewport of the
   chosen width, so its media queries answer to that width, not the docs site's. */
import { useParams } from 'react-router-dom';
import { recipes } from '../recipes';

export default function FramePage() {
  const { slug } = useParams();
  const R = recipes[slug]?.default;
  if (!R) return <p>No recipe called {slug}.</p>;
  return <R />;
}
