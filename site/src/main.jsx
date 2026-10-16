import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HanoryxProvider, configureSite } from 'hanoryx-components';
import 'hanoryx-components/styles';
import './site.css';
import App from './App';
import { loadSamplePage } from './preview/sample-page';

// The docs site has no pages of its own: nothing to load, nothing to index.
configureSite({ loadPage: loadSamplePage });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <HanoryxProvider smoothScroll={false} audio={false} experience={false}>
        <App />
      </HanoryxProvider>
    </HashRouter>
  </StrictMode>
);
