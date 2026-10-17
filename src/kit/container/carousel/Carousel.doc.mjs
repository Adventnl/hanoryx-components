export const docs = {
  "origin": "new",
  "summary": "A manual sequence of slides with named previous and next controls and a position status.",
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
      "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContainerExamples() {\n  const [selected, setSelected] = useState(false);\n  const [opened, setOpened] = useState(false);\n  return <Kit.Stack><Kit.ClickableCard title=\"Project details\" onClick={() => setOpened(!opened)}>Open project information</Kit.ClickableCard>{opened && <p>The project has three active tasks.</p>}<Kit.SelectableCard title=\"Include project\" checked={selected} onChange={setSelected}>Include this project in the export.</Kit.SelectableCard><Kit.Carousel label=\"Project stages\"><Kit.Card title=\"Discover\">Understand the problem.</Kit.Card><Kit.Card title=\"Build\">Make the solution.</Kit.Card><Kit.Card title=\"Review\">Check the outcome.</Kit.Card></Kit.Carousel><Kit.CollapsibleGroup><Kit.Collapsible title=\"Delivery details\">Ships from your application.</Kit.Collapsible></Kit.CollapsibleGroup></Kit.Stack>;\n}\n"
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
