export const docs = {
  "origin": "new",
  "summary": "A semantic ordered or unordered list with consistent item spacing.",
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
      "code": "import * as Kit from 'hanoryx-components/kit';\nexport default function ListExamples() { return <Kit.Stack><Kit.List label=\"Projects\"><Kit.ListItem>Project Alpha</Kit.ListItem><Kit.ListItem>Project Beta</Kit.ListItem></Kit.List><dl><Kit.MetadataListItem term=\"Status\">Ready</Kit.MetadataListItem></dl><Kit.OverflowList max={2}>{['Alpha', 'Beta', 'Gamma', 'Delta'].map(name => <Kit.ListItem key={name}>{name}</Kit.ListItem>)}</Kit.OverflowList></Kit.Stack>; }\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {
    "ListItem": {
      "origin": "new",
      "summary": "An item in List.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\nexport default function ListExamples() { return <Kit.Stack><Kit.List label=\"Projects\"><Kit.ListItem>Project Alpha</Kit.ListItem><Kit.ListItem>Project Beta</Kit.ListItem></Kit.List><dl><Kit.MetadataListItem term=\"Status\">Ready</Kit.MetadataListItem></dl><Kit.OverflowList max={2}>{['Alpha', 'Beta', 'Gamma', 'Delta'].map(name => <Kit.ListItem key={name}>{name}</Kit.ListItem>)}</Kit.OverflowList></Kit.Stack>; }\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "MetadataListItem": {
      "origin": "new",
      "summary": "A term and detail pair for a description list.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\nexport default function ListExamples() { return <Kit.Stack><Kit.List label=\"Projects\"><Kit.ListItem>Project Alpha</Kit.ListItem><Kit.ListItem>Project Beta</Kit.ListItem></Kit.List><dl><Kit.MetadataListItem term=\"Status\">Ready</Kit.MetadataListItem></dl><Kit.OverflowList max={2}>{['Alpha', 'Beta', 'Gamma', 'Delta'].map(name => <Kit.ListItem key={name}>{name}</Kit.ListItem>)}</Kit.OverflowList></Kit.Stack>; }\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "OverflowList": {
      "origin": "new",
      "summary": "A list whose excess items remain reachable through a native disclosure.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\nexport default function ListExamples() { return <Kit.Stack><Kit.List label=\"Projects\"><Kit.ListItem>Project Alpha</Kit.ListItem><Kit.ListItem>Project Beta</Kit.ListItem></Kit.List><dl><Kit.MetadataListItem term=\"Status\">Ready</Kit.MetadataListItem></dl><Kit.OverflowList max={2}>{['Alpha', 'Beta', 'Gamma', 'Delta'].map(name => <Kit.ListItem key={name}>{name}</Kit.ListItem>)}</Kit.OverflowList></Kit.Stack>; }\n"
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
