/* ============================================================
   SITE SOURCES — where the library gets the data it does not own.

   The library ships components, not a website's content. A few of them need
   data that only the host app has: the page a route renders, a light catalogue
   of every page (titles and intros), and the full-text index the search reads.
   The app registers loaders once, at start-up:

     import { configureSite } from 'hanoryx-components/core';

     configureSite({
       loadPage: (key) => import(`./data/pages/${key}.js`).then((m) => m.default),
       loadPageCatalog: () => fetch('/pageCatalog.json').then((r) => r.json()),
       loadSearchDocuments: () => fetch('/searchDocuments.json').then((r) => r.json()),
     });

   The same call can replace what the navbar, footer and menus show:

       configureSite({
         company: { name: 'Acme', shortName: 'Acme', division: 'Acme Labs', email: 'hi@acme.test', status: 'Live' },
         navigation: { navGroups, pageRouteKeys, footerColumns, footerLegalRow, siteSections, redirects },
       });

   Anything left unregistered degrades quietly: pages resolve to null (the 404),
   catalogue-backed controls show their retry state, and search covers the menu.
   ============================================================ */

import { applyNavigation } from '../../content/routeConfig';
import { configureCompany } from '../../content/company';

const missing = (what) => () => Promise.reject(new Error(`No ${what} registered. Call configureSite({ ${what} }).`));

const sources = {
  loadPage: () => Promise.resolve(null),
  warmPage: () => {},
  loadPageCatalog: missing('loadPageCatalog'),
  loadSearchDocuments: missing('loadSearchDocuments'),
};

/** Register any of: loadPage(key), warmPage(pathname), loadPageCatalog(), loadSearchDocuments(), company, navigation. */
export function configureSite(partial = {}) {
  Object.keys(partial).forEach((k) => {
    if (k === 'company') { configureCompany(partial.company); return; }
    if (k === 'navigation') { applyNavigation(partial.navigation); return; }
    if (!(k in sources)) throw new Error(`configureSite: unknown source "${k}"`);
    if (typeof partial[k] === 'function') sources[k] = partial[k];
  });
}

export const loadPage = (key) => sources.loadPage(key);
export const warmPage = (pathname) => sources.warmPage(pathname);
export const fetchPageCatalog = () => sources.loadPageCatalog();
export const fetchSearchDocuments = () => sources.loadSearchDocuments();
