export const docs = {
  "origin": "new",
  "summary": "A modal dialog anchored to the bottom edge, retaining focus trapping and restoration.",
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
      "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function OverlayExamples() {\n  const [overlay, setOverlay] = useState('');\n  const [result, setResult] = useState('');\n  const [notice, setNotice] = useState(true);\n  const close = () => setOverlay('');\n  return <Kit.Stack><Kit.ButtonGroup>{['Commands', 'Bottom sheet', 'Image viewer'].map(label => <Kit.Button key={label} magnetic={false} onClick={() => setOverlay(label)}>{label}</Kit.Button>)}</Kit.ButtonGroup><Kit.CommandPalette open={overlay === 'Commands'} onClose={close} items={[{ id: 'new', label: 'New project', onSelect: () => setResult('Project created') }, { id: 'export', label: 'Export project', onSelect: () => setResult('Project exported') }, { id: 'disabled', label: 'Unavailable command', disabled: true }]} /><Kit.BottomSheetSwitcher title=\"Project details\" open={overlay === 'Bottom sheet'} onClose={close} sheets={[{ id: 'details', label: 'Details', content: 'This project is ready for review.' }, { id: 'history', label: 'History', content: 'Created today.' }]} /><Kit.Lightbox open={overlay === 'Image viewer'} onClose={close} images={[]} />{notice && <Kit.Toast title=\"Draft saved\" onDismiss={() => setNotice(false)}>Changes are available on this device.</Kit.Toast>}<output aria-live=\"polite\">{result}</output></Kit.Stack>;\n}\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {
    "BottomSheetSwitcher": {
      "origin": "new",
      "summary": "A bottom sheet containing tabbed panels supplied as sheets.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function OverlayExamples() {\n  const [overlay, setOverlay] = useState('');\n  const [result, setResult] = useState('');\n  const [notice, setNotice] = useState(true);\n  const close = () => setOverlay('');\n  return <Kit.Stack><Kit.ButtonGroup>{['Commands', 'Bottom sheet', 'Image viewer'].map(label => <Kit.Button key={label} magnetic={false} onClick={() => setOverlay(label)}>{label}</Kit.Button>)}</Kit.ButtonGroup><Kit.CommandPalette open={overlay === 'Commands'} onClose={close} items={[{ id: 'new', label: 'New project', onSelect: () => setResult('Project created') }, { id: 'export', label: 'Export project', onSelect: () => setResult('Project exported') }, { id: 'disabled', label: 'Unavailable command', disabled: true }]} /><Kit.BottomSheetSwitcher title=\"Project details\" open={overlay === 'Bottom sheet'} onClose={close} sheets={[{ id: 'details', label: 'Details', content: 'This project is ready for review.' }, { id: 'history', label: 'History', content: 'Created today.' }]} /><Kit.Lightbox open={overlay === 'Image viewer'} onClose={close} images={[]} />{notice && <Kit.Toast title=\"Draft saved\" onDismiss={() => setNotice(false)}>Changes are available on this device.</Kit.Toast>}<output aria-live=\"polite\">{result}</output></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    }
  }
};
