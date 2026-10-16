import { fetchPageCatalog } from './sources';

let cached = null;

/** Lightweight title, intro and reading metadata for every page, from the registered source. */
export function loadPageCatalog() {
  if (!cached) {
    cached = fetchPageCatalog().catch((error) => {
      cached = null;
      throw error;
    });
  }
  return cached;
}
