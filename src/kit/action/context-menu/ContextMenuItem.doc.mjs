export const docs = {
  "origin": "new",
  "summary": "An action within ContextMenu, sharing dropdown selection and focus behavior.",
  "notes": [
    "New library API. Content and callbacks are supplied by the host; no network request is made by this component."
  ],
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Move through native controls. Enter or Space activates buttons and disclosure triggers."
    }
  ],
  "examples": [
    {
      "title": "Family composition",
      "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ActionExamples() {\n  const [checked, setChecked] = useState(false);\n  const [density, setDensity] = useState('comfortable');\n  const [result, setResult] = useState('Choose an action');\n  return <Kit.Stack>\n    <Kit.ButtonGroup label=\"Document actions\"><Kit.Button magnetic={false} onClick={() => setResult('Saved')}>Save</Kit.Button><Kit.IconButton label=\"More document actions\" onClick={() => setResult('More actions selected')} /><Kit.ToggleButton onChange={value => setResult(value ? 'Pinned' : 'Unpinned')}>Pin</Kit.ToggleButton></Kit.ButtonGroup>\n    <Kit.DropdownMenu label=\"Document menu\"><Kit.DropdownMenuGroup label=\"Actions\"><Kit.DropdownMenuItem onSelect={() => setResult('Duplicated')}>Duplicate</Kit.DropdownMenuItem><Kit.DropdownMenuItem disabled>Unavailable action</Kit.DropdownMenuItem></Kit.DropdownMenuGroup><Kit.DropdownMenuDivider />\n      <Kit.DropdownMenuCheckboxItem checked={checked} onChange={setChecked}>Show archived</Kit.DropdownMenuCheckboxItem><Kit.DropdownMenuRadioGroup label=\"Density\" value={density} onChange={setDensity}><Kit.DropdownMenuRadioItem value=\"comfortable\">Comfortable</Kit.DropdownMenuRadioItem><Kit.DropdownMenuRadioItem value=\"compact\">Compact</Kit.DropdownMenuRadioItem></Kit.DropdownMenuRadioGroup>\n      <Kit.DropdownMenuSubmenu label=\"Export\"><Kit.DropdownMenuItem onSelect={() => setResult('Exported CSV')}>CSV</Kit.DropdownMenuItem><Kit.DropdownMenuItem onSelect={() => setResult('Exported JSON')}>JSON</Kit.DropdownMenuItem></Kit.DropdownMenuSubmenu>\n    </Kit.DropdownMenu>\n    <Kit.MoreMenu items={[{ label: 'Copy link', onSelect: () => setResult('Link copied') }]} />\n    <Kit.ContextMenu items={[{ label: 'Inspect', onSelect: () => setResult('Inspected') }]}><p>Right-click here, or use Context actions.</p></Kit.ContextMenu>\n    <Kit.SegmentedControl label=\"View\" defaultValue=\"list\"><Kit.SegmentedControlItem value=\"list\">List</Kit.SegmentedControlItem><Kit.SegmentedControlItem value=\"grid\">Grid</Kit.SegmentedControlItem></Kit.SegmentedControl>\n    <Kit.ToggleButtonGroup label=\"Formatting\" options={[{ value: 'bold', label: 'Bold' }, { value: 'italic', label: 'Italic' }]} />\n    <Kit.Link to=\"/a/kit\">Browse the kit</Kit.Link><output aria-live=\"polite\">{result}; archived {checked ? 'shown' : 'hidden'}; {density}</output>\n  </Kit.Stack>;\n}\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {}
};
