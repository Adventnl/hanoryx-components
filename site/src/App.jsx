import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useManifest } from './data';
import Layout from './Layout';

const Home = lazy(() => import('./pages/Home'));
const Guide = lazy(() => import('./pages/Guide'));
const AreaPage = lazy(() => import('./pages/AreaPage'));
const ComponentPage = lazy(() => import('./pages/ComponentPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const RawPage = lazy(() => import('./pages/RawPage'));
const ShellPreview = lazy(() => import('./pages/ShellPreview'));
const StagePreview = lazy(() => import('./pages/StagePreview'));
const RecipePage = lazy(() => import('./pages/RecipePage'));
const FramePage = lazy(() => import('./pages/FramePage'));

function Loading() {
  return <div className="sx-loading" role="status">Loading…</div>;
}

export default function App() {
  const { data, error } = useManifest();
  const { pathname } = useLocation();

  // Bare routes have no docs chrome: /raw is for measuring and screenshots,
  // /preview is a whole site (or a whole stage) to look at full-bleed.
  if (pathname.startsWith('/raw/') || pathname.startsWith('/preview/') || pathname.startsWith('/frame/')) {
    return data ? (
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/raw/*" element={<RawPage data={data} />} />
          <Route path="/frame/:slug" element={<FramePage />} />
          <Route path="/preview/shell" element={<ShellPreview />} />
          <Route path="/preview/stage/:slug" element={<StagePreview />} />
        </Routes>
      </Suspense>
    ) : <Loading />;
  }
  if (error) return <div className="sx-loading" role="alert">Could not load the catalogue: {String(error.message)}</div>;
  if (!data) return <Loading />;

  return (
    <Layout data={data}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/guides/:slug" element={<Guide />} />
          <Route path="/a/:area" element={<AreaPage data={data} />} />
          <Route path="/a/:area/:family" element={<AreaPage data={data} />} />
          <Route path="/c/*" element={<ComponentPage data={data} />} />
          <Route path="/recipes/:slug" element={<RecipePage />} />
          <Route path="/search" element={<SearchPage data={data} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
