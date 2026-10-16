import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureSite } from 'hanoryx-components/core';
import 'hanoryx-components/styles';

import App from './App.jsx';
import { loadPage, warmPath } from './data/pages';
import { loadPageCatalog } from './data/pageCatalog';
import searchDocumentsUrl from './data/searchDocuments.generated.json?url';

// The library does not own this site's pages. Tell it where they are.
configureSite({
  loadPage,
  warmPage: warmPath,
  loadPageCatalog,
  loadSearchDocuments: () => fetch(searchDocumentsUrl).then((response) => {
    if (!response.ok) throw new Error(`Search index: HTTP ${response.status}`);
    return response.json();
  }),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
