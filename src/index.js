/* hanoryx-components — the public entry.

   Everything a Hanoryx site is made of, by area. Import from here, or from an
   area (`hanoryx-components/kit`) to keep the module graph small:

     core         hooks, providers, motion engine, utilities, site sources
     kit          application components, parts and hooks in eleven categories
     fx           the foreground toolkit (tilt, spotlight, odometer, …)
     ui           the site's own buttons, pills and panels
     reveal       entrance profiles and kinetic text
     scenes       the Canvas scene host and the 67-scene library
     page         hero, page blocks and the data-driven page template
     shell        site frame: navbar, footer, search, shortcuts, cursor, transitions
     signatures   page-specific interactive compositions   (namespace Signatures)
     closers      page endings                             (namespace Closers)
     specimens    2,091 stand-alone components in 50 families (namespace Specimens)
     stage        the scroll stages that present specimens

   Styles: `import 'hanoryx-components/styles'` once, at the app root.
*/
export * from './core';
export * from './kit';
export * from './fx';
export * from './ui';
export * from './reveal';
export * from './scenes';
export * from './page';
export * from './shell';
// Preserve the site's existing root export; the kit's disclosure nav is available from /kit.
export { MobileNav, CommandPalette } from './shell';
export * as Signatures from './signatures';
export * as Closers from './closers';
export * as Specimens from './specimens';
export * as Stage from './stage';
