import { HanoryxProvider, SiteShell } from 'hanoryx-components';
import { AppRoutes } from './routes';

/* The whole site: the library's providers and shell around this app's routes.
   Everything visible is a component from hanoryx-components; what is written
   here is only which page goes at which address. */
export default function App() {
  return (
    <HanoryxProvider>
      <SiteShell>
        <AppRoutes />
      </SiteShell>
    </HanoryxProvider>
  );
}
