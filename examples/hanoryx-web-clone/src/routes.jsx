import { Suspense, useEffect } from 'react';
import { Navigate, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { NotFound, RouteFallback, TemplatePage } from 'hanoryx-components';
import { ShowcaseIndex, ShowcasePage, warmShowcase } from 'hanoryx-components/stage';
import { pageRouteKeys, redirects, routePath } from 'hanoryx-components/content/routeConfig';
import { warmPath } from './data/pages';

/* /projects/:id used to be a public repository profile. Only YK Engine is part
   of the public work now; everything else lands on Work. */
function ProjectRedirect() {
  const { id } = useParams();
  return <Navigate to={id === 'yk-engine' ? '/work/yk-engine' : '/work'} replace />;
}

/* Every page is a data file rendered by the library's TemplatePage; the showcase
   is the library's stage. AnimatePresence drives the page-to-page transition,
   Suspense covers the brief chunk-load window. */
export function AppRoutes() {
  const location = useLocation();

  // Fetch the destination on intent: hovering or focusing a link warms its page.
  useEffect(() => {
    const onIntent = (event) => {
      const link = event.target.closest?.('a[href^="/"]');
      if (link) {
        const path = link.getAttribute('href').split(/[?#]/)[0];
        warmPath(path);
        warmShowcase(path);
      }
    };
    document.addEventListener('pointerover', onIntent, { passive: true });
    document.addEventListener('focusin', onIntent);
    return () => {
      document.removeEventListener('pointerover', onIntent);
      document.removeEventListener('focusin', onIntent);
    };
  }, []);

  return (
    <Suspense fallback={<RouteFallback />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {pageRouteKeys.map((key) => (
            <Route key={key} path={routePath(key)} element={<TemplatePage routeKey={key} />} />
          ))}

          <Route path="/showcase" element={<ShowcaseIndex />} />
          <Route path="/showcase/:slug" element={<ShowcasePage />} />

          {redirects.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="/projects/:id" element={<ProjectRedirect />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default AppRoutes;
