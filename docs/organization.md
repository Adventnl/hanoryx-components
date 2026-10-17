# Folders and component families

Browse `src/kit` for application controls. Its eleven categories are action, chat,
container, content, feedback, form-controls, layout, navigation, overlay,
table-list and utility. Open a family folder to find its components, styles and
usage docs together. Related parts stay together: the dropdown family includes
items, groups, checkboxes, radio choices, separators and submenus.

```text
src/kit/action/dropdown-menu/
  DropdownMenu.jsx
  DropdownMenu.doc.mjs
  DropdownMenu.module.css
  DropdownMenuItem.jsx
  DropdownMenuItem.doc.mjs
  DropdownMenuGroup.jsx
  DropdownMenuGroup.doc.mjs
  internal/
  index.js                    generated
```

Use either the familiar kit import or a focused family import:

```jsx
import {
  DropdownMenu, DropdownMenuItem, DropdownMenuSubmenu,
} from 'hanoryx-components/kit/action/dropdown-menu';

<DropdownMenu label="Actions">
  <DropdownMenuItem onSelect={save}>Save</DropdownMenuItem>
  <DropdownMenuSubmenu label="Export">
    <DropdownMenuItem onSelect={exportCsv}>CSV</DropdownMenuItem>
  </DropdownMenuSubmenu>
</DropdownMenu>
```

The docs sidebar expands each category into families and each family into all its
components and hooks. Existing component URLs retain their catalog IDs. An older
URL can therefore contain an earlier category name even though the component has
moved. Existing package and specimen-family imports retain their names.

Names such as `TextInput`/`TextField`, `CheckboxInput`/`Checkbox` and
`TreeList`/`Tree` share implementations. Their docs identify the aliases. Hooks are
listed as hooks, separately from visual components. See the generated
[complete catalog](COMPONENTS.md) for props, contracts and examples.

Signatures, closers, effects, site UI, page blocks, scene implementations and
specimens each have component folders. A specimen family keeps its shared CSS,
helpers and authored `catalog.js` at its root; each specimen has its own named
folder. `catalog.js` owns display order and interaction metadata. `index.js` is
generated. The 2,091 specimens are demonstrations; application controls belong in
the kit.

Keep a folder small enough to scan (roughly ten files is a guide). Split at a
component or family boundary. Do not create numbered buckets, duplicate a shared
stylesheet, or split a cohesive component merely to satisfy a count. Add new
pieces beside their family, author their `.doc.mjs`, then run:

```sh
npm run barrels
npm run docs:generate
npm run check
```

Charts provide SVG composition primitives. `VegaChart` is an adapter for a renderer
supplied by the app; it does not bundle Vega. Themes scope attributes and context;
the app supplies any alternative theme token overrides. This library follows the
Hanoryx design and does not promise Astryx API or visual compatibility.
