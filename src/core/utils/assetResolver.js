/* ============================================================
   ASSET RESOLVER — single source for static assets.

   `brandLogo` is the Hanoryx mark that ships with the library
   (src/assets/hanoryx-mark.jpg). The two optional assets — the intro track and
   a partner logo — are not shipped; register them from the app:

     import { configureAssets } from 'hanoryx-components/core';
     configureAssets({ musicSrc: '/intro.mp3', musebaseLogo: '/musebase.jpg' });

   Until then `musicSrc` is null (the audio control reports "unavailable")
   and `hasMusebaseLogo` is false (the plate falls back to a text mark).
   ============================================================ */

import brandMark from '../../assets/hanoryx-mark.jpg';

export const brandLogo = brandMark;

/* Live bindings: importers read the current value after configureAssets() runs. */
export let musicSrc = null;
export let musebaseLogo = null;
export let hasMusebaseLogo = false;

export function configureAssets({ musicSrc: music, musebaseLogo: partner } = {}) {
  if (music !== undefined) musicSrc = music || null;
  if (partner !== undefined) {
    musebaseLogo = partner || null;
    hasMusebaseLogo = Boolean(partner);
  }
}
