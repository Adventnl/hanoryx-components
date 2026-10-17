export const docs = {
  "origin": "new",
  "summary": "The labelled search input inside CommandPalette.",
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
    "CommandPaletteList": {
      "origin": "new",
      "summary": "The command region with ArrowUp, ArrowDown, Home and End focus handling.",
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
    },
    "CommandPaletteItem": {
      "origin": "new",
      "summary": "A filtered command button that delegates selection to its palette.",
      "notes": [
        "New library API. Content and callbacks are supplied by the host; no network request is made by this component.",
        "Keep the searchable label or textValue a plain string even when rendering rich visual content."
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
    },
    "CommandPaletteGroup": {
      "origin": "new",
      "summary": "A named command group.",
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
    },
    "CommandPaletteFooter": {
      "origin": "new",
      "summary": "Supporting instructions or shortcuts for a command palette.",
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
    },
    "CommandPaletteEmpty": {
      "origin": "new",
      "summary": "A polite empty-results message; custom compositions can provide when explicitly.",
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
