import { useState } from 'react';
import * as Kit from 'hanoryx-components/kit';

export default function ActionExamples() {
  const [checked, setChecked] = useState(false);
  const [density, setDensity] = useState('comfortable');
  const [result, setResult] = useState('Choose an action');
  return <Kit.Stack>
    <Kit.ButtonGroup label="Document actions"><Kit.Button magnetic={false} onClick={() => setResult('Saved')}>Save</Kit.Button><Kit.IconButton label="More document actions" onClick={() => setResult('More actions selected')} /><Kit.ToggleButton onChange={value => setResult(value ? 'Pinned' : 'Unpinned')}>Pin</Kit.ToggleButton></Kit.ButtonGroup>
    <Kit.DropdownMenu label="Document menu"><Kit.DropdownMenuGroup label="Actions"><Kit.DropdownMenuItem onSelect={() => setResult('Duplicated')}>Duplicate</Kit.DropdownMenuItem><Kit.DropdownMenuItem disabled>Unavailable action</Kit.DropdownMenuItem></Kit.DropdownMenuGroup><Kit.DropdownMenuDivider />
      <Kit.DropdownMenuCheckboxItem checked={checked} onChange={setChecked}>Show archived</Kit.DropdownMenuCheckboxItem><Kit.DropdownMenuRadioGroup label="Density" value={density} onChange={setDensity}><Kit.DropdownMenuRadioItem value="comfortable">Comfortable</Kit.DropdownMenuRadioItem><Kit.DropdownMenuRadioItem value="compact">Compact</Kit.DropdownMenuRadioItem></Kit.DropdownMenuRadioGroup>
      <Kit.DropdownMenuSubmenu label="Export"><Kit.DropdownMenuItem onSelect={() => setResult('Exported CSV')}>CSV</Kit.DropdownMenuItem><Kit.DropdownMenuItem onSelect={() => setResult('Exported JSON')}>JSON</Kit.DropdownMenuItem></Kit.DropdownMenuSubmenu>
    </Kit.DropdownMenu>
    <Kit.MoreMenu items={[{ label: 'Copy link', onSelect: () => setResult('Link copied') }]} />
    <Kit.ContextMenu items={[{ label: 'Inspect', onSelect: () => setResult('Inspected') }]}><p>Right-click here, or use Context actions.</p></Kit.ContextMenu>
    <Kit.SegmentedControl label="View" defaultValue="list"><Kit.SegmentedControlItem value="list">List</Kit.SegmentedControlItem><Kit.SegmentedControlItem value="grid">Grid</Kit.SegmentedControlItem></Kit.SegmentedControl>
    <Kit.ToggleButtonGroup label="Formatting" options={[{ value: 'bold', label: 'Bold' }, { value: 'italic', label: 'Italic' }]} />
    <Kit.Link to="/a/kit">Browse the kit</Kit.Link><output aria-live="polite">{result}; archived {checked ? 'shown' : 'hidden'}; {density}</output>
  </Kit.Stack>;
}
