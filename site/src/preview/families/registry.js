import ActionExamples from './ActionExamples';
import ContainerExamples from './ContainerExamples';
import ContentExamples from './ContentExamples';
import FormExamples from './FormExamples';
import LayoutExamples from './LayoutExamples';
import NavigationExamples from './NavigationExamples';
import OverlayExamples from './OverlayExamples';
import ListExamples from './ListExamples';
import UtilityExamples, { VegaExample } from './UtilityExamples';

const entries = [
  [ActionExamples, ['button', 'dropdown-menu', 'more-menu', 'context-menu', 'link', 'segmented']],
  [ContainerExamples, ['card', 'carousel', 'disclosure']],
  [ContentExamples, ['inline', 'time', 'avatar', 'markdown', 'indicator', 'chart']],
  [FormExamples, ['selector', 'power-search', 'field', 'checkbox']],
  [LayoutExamples, ['app-shell', 'layout']],
  [NavigationExamples, ['top-nav', 'side-nav', 'tabs', 'breadcrumbs', 'stepper']],
  [OverlayExamples, ['bottom-sheet', 'command-palette', 'lightbox', 'overlay', 'toast']],
  [ListExamples, ['list']],
  [UtilityExamples, ['internationalization', 'theme', 'link-provider']],
  [VegaExample, ['vega-chart']],
];
export const familyDemos = Object.fromEntries(entries.flatMap(([Component, names]) => names.map(name => [name, Component])));
