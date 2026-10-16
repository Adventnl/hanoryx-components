/* The full-text index the search reads, fetched only when search opens. The app
   registers where it comes from (see core/site/sources.js). */
import { fetchSearchDocuments } from '../../core/site/sources';

let cached = null;

export function getSearchDocuments() {
  if (!cached) {
    cached = fetchSearchDocuments().catch((error) => {
      cached = null;
      throw error;
    });
  }
  return cached;
}
