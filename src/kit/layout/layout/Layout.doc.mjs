export const docs = {
  "origin": "new",
  "summary": "A wrapping layout frame for full-width headers and footers, content and side panels.",
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
      "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {
    "LayoutHeader": {
      "origin": "new",
      "summary": "A full-width layout header.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "LayoutContent": {
      "origin": "new",
      "summary": "The flexible content region in a layout.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "LayoutFooter": {
      "origin": "new",
      "summary": "A full-width layout footer.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "LayoutPanel": {
      "origin": "new",
      "summary": "A named, bounded side panel.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "FormLayout": {
      "origin": "new",
      "summary": "A semantic form with consistent vertical field spacing.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "GridSpan": {
      "origin": "new",
      "summary": "A grid cell spanning a positive number of parent columns.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "ScrollableArea": {
      "origin": "new",
      "summary": "A named, keyboard-focusable overflow region with an optional height cap.",
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
          "code": "import * as Kit from 'hanoryx-components/kit';\n\nexport default function LayoutExamples() {\n  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer=\"Workspace footer\"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label=\"Project context\">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label=\"Activity\" maxHeight=\"12rem\"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;\n}\n"
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
