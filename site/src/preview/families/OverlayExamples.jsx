import { useState } from 'react';
import * as Kit from 'hanoryx-components/kit';

export default function OverlayExamples() {
  const [overlay, setOverlay] = useState('');
  const [result, setResult] = useState('');
  const [notice, setNotice] = useState(true);
  const close = () => setOverlay('');
  return <Kit.Stack><Kit.ButtonGroup>{['Commands', 'Bottom sheet', 'Image viewer'].map(label => <Kit.Button key={label} magnetic={false} onClick={() => setOverlay(label)}>{label}</Kit.Button>)}</Kit.ButtonGroup><Kit.CommandPalette open={overlay === 'Commands'} onClose={close} items={[{ id: 'new', label: 'New project', onSelect: () => setResult('Project created') }, { id: 'export', label: 'Export project', onSelect: () => setResult('Project exported') }, { id: 'disabled', label: 'Unavailable command', disabled: true }]} /><Kit.BottomSheetSwitcher title="Project details" open={overlay === 'Bottom sheet'} onClose={close} sheets={[{ id: 'details', label: 'Details', content: 'This project is ready for review.' }, { id: 'history', label: 'History', content: 'Created today.' }]} /><Kit.Lightbox open={overlay === 'Image viewer'} onClose={close} images={[]} />{notice && <Kit.Toast title="Draft saved" onDismiss={() => setNotice(false)}>Changes are available on this device.</Kit.Toast>}<output aria-live="polite">{result}</output></Kit.Stack>;
}
