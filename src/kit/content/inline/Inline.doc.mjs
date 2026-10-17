export const docs = {
  "origin": "new",
  "summary": "Inline code in the monospace voice.",
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
      "code": "import { Info } from 'lucide-react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContentExamples() {\n  return <Kit.Stack><Kit.Cluster><Kit.Avatar name=\"Ari Example\" /><Kit.AvatarGroupOverflow count={3} /><Kit.AvatarStatusDot /><Kit.Icon icon={Info} label=\"Information\" /><Kit.Code>const ready = true;</Kit.Code><Kit.Kbd>⌘ K</Kit.Kbd><Kit.Token>Project</Kit.Token></Kit.Cluster><Kit.Citation href=\"https://astryx.atmeta.com\">Design reference</Kit.Citation><Kit.Timestamp dateTime=\"2026-10-17T09:30:00+13:00\" options={{ dateStyle: 'medium', timeZone: 'Pacific/Auckland' }} /><Kit.Timer seconds={125} /><Kit.Thumbnail alt=\"Project artwork placeholder\" /><Kit.Indicator label=\"Ready\" /><Kit.Item title=\"Project\" description=\"Ready for review\" /><Kit.Markdown>{'# Project notes\\n\\nSafe **Markdown** with `inline code`.\\n\\n- Keyboard controls\\n- Named actions'}</Kit.Markdown><Kit.Chart title=\"Weekly runs\" description=\"Monday 20 runs, Tuesday 40 runs, Wednesday 60 runs.\" legend={<Kit.ChartLegend items={[{ label: 'Runs', tone: 'accent' }]} />}><Kit.ChartGrid x={50} y={20} width={500} height={230} horizontal={[0, 115, 230]} /><Kit.ChartAxis x={50} y={250} length={500} ticks={[{ value: 'Mon', position: 50 }, { value: 'Tue', position: 250 }, { value: 'Wed', position: 450 }]} /><path d=\"M100 210 L300 140 L500 50\" fill=\"none\" stroke=\"var(--c-red)\" strokeWidth={3} /></Kit.Chart><Kit.ChartTooltip>Wednesday: 60 runs</Kit.ChartTooltip></Kit.Stack>;\n}\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {
    "Kbd": {
      "origin": "new",
      "summary": "A keyboard key or shortcut using the semantic kbd element.",
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
          "code": "import { Info } from 'lucide-react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContentExamples() {\n  return <Kit.Stack><Kit.Cluster><Kit.Avatar name=\"Ari Example\" /><Kit.AvatarGroupOverflow count={3} /><Kit.AvatarStatusDot /><Kit.Icon icon={Info} label=\"Information\" /><Kit.Code>const ready = true;</Kit.Code><Kit.Kbd>⌘ K</Kit.Kbd><Kit.Token>Project</Kit.Token></Kit.Cluster><Kit.Citation href=\"https://astryx.atmeta.com\">Design reference</Kit.Citation><Kit.Timestamp dateTime=\"2026-10-17T09:30:00+13:00\" options={{ dateStyle: 'medium', timeZone: 'Pacific/Auckland' }} /><Kit.Timer seconds={125} /><Kit.Thumbnail alt=\"Project artwork placeholder\" /><Kit.Indicator label=\"Ready\" /><Kit.Item title=\"Project\" description=\"Ready for review\" /><Kit.Markdown>{'# Project notes\\n\\nSafe **Markdown** with `inline code`.\\n\\n- Keyboard controls\\n- Named actions'}</Kit.Markdown><Kit.Chart title=\"Weekly runs\" description=\"Monday 20 runs, Tuesday 40 runs, Wednesday 60 runs.\" legend={<Kit.ChartLegend items={[{ label: 'Runs', tone: 'accent' }]} />}><Kit.ChartGrid x={50} y={20} width={500} height={230} horizontal={[0, 115, 230]} /><Kit.ChartAxis x={50} y={250} length={500} ticks={[{ value: 'Mon', position: 50 }, { value: 'Tue', position: 250 }, { value: 'Wed', position: 450 }]} /><path d=\"M100 210 L300 140 L500 50\" fill=\"none\" stroke=\"var(--c-red)\" strokeWidth={3} /></Kit.Chart><Kit.ChartTooltip>Wednesday: 60 runs</Kit.ChartTooltip></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "Citation": {
      "origin": "new",
      "summary": "An attribution that can link to its source.",
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
          "code": "import { Info } from 'lucide-react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContentExamples() {\n  return <Kit.Stack><Kit.Cluster><Kit.Avatar name=\"Ari Example\" /><Kit.AvatarGroupOverflow count={3} /><Kit.AvatarStatusDot /><Kit.Icon icon={Info} label=\"Information\" /><Kit.Code>const ready = true;</Kit.Code><Kit.Kbd>⌘ K</Kit.Kbd><Kit.Token>Project</Kit.Token></Kit.Cluster><Kit.Citation href=\"https://astryx.atmeta.com\">Design reference</Kit.Citation><Kit.Timestamp dateTime=\"2026-10-17T09:30:00+13:00\" options={{ dateStyle: 'medium', timeZone: 'Pacific/Auckland' }} /><Kit.Timer seconds={125} /><Kit.Thumbnail alt=\"Project artwork placeholder\" /><Kit.Indicator label=\"Ready\" /><Kit.Item title=\"Project\" description=\"Ready for review\" /><Kit.Markdown>{'# Project notes\\n\\nSafe **Markdown** with `inline code`.\\n\\n- Keyboard controls\\n- Named actions'}</Kit.Markdown><Kit.Chart title=\"Weekly runs\" description=\"Monday 20 runs, Tuesday 40 runs, Wednesday 60 runs.\" legend={<Kit.ChartLegend items={[{ label: 'Runs', tone: 'accent' }]} />}><Kit.ChartGrid x={50} y={20} width={500} height={230} horizontal={[0, 115, 230]} /><Kit.ChartAxis x={50} y={250} length={500} ticks={[{ value: 'Mon', position: 50 }, { value: 'Tue', position: 250 }, { value: 'Wed', position: 450 }]} /><path d=\"M100 210 L300 140 L500 50\" fill=\"none\" stroke=\"var(--c-red)\" strokeWidth={3} /></Kit.Chart><Kit.ChartTooltip>Wednesday: 60 runs</Kit.ChartTooltip></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "Token": {
      "origin": "new",
      "summary": "A compact labelled token with an optional named remove button.",
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
          "code": "import { Info } from 'lucide-react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContentExamples() {\n  return <Kit.Stack><Kit.Cluster><Kit.Avatar name=\"Ari Example\" /><Kit.AvatarGroupOverflow count={3} /><Kit.AvatarStatusDot /><Kit.Icon icon={Info} label=\"Information\" /><Kit.Code>const ready = true;</Kit.Code><Kit.Kbd>⌘ K</Kit.Kbd><Kit.Token>Project</Kit.Token></Kit.Cluster><Kit.Citation href=\"https://astryx.atmeta.com\">Design reference</Kit.Citation><Kit.Timestamp dateTime=\"2026-10-17T09:30:00+13:00\" options={{ dateStyle: 'medium', timeZone: 'Pacific/Auckland' }} /><Kit.Timer seconds={125} /><Kit.Thumbnail alt=\"Project artwork placeholder\" /><Kit.Indicator label=\"Ready\" /><Kit.Item title=\"Project\" description=\"Ready for review\" /><Kit.Markdown>{'# Project notes\\n\\nSafe **Markdown** with `inline code`.\\n\\n- Keyboard controls\\n- Named actions'}</Kit.Markdown><Kit.Chart title=\"Weekly runs\" description=\"Monday 20 runs, Tuesday 40 runs, Wednesday 60 runs.\" legend={<Kit.ChartLegend items={[{ label: 'Runs', tone: 'accent' }]} />}><Kit.ChartGrid x={50} y={20} width={500} height={230} horizontal={[0, 115, 230]} /><Kit.ChartAxis x={50} y={250} length={500} ticks={[{ value: 'Mon', position: 50 }, { value: 'Tue', position: 250 }, { value: 'Wed', position: 450 }]} /><path d=\"M100 210 L300 140 L500 50\" fill=\"none\" stroke=\"var(--c-red)\" strokeWidth={3} /></Kit.Chart><Kit.ChartTooltip>Wednesday: 60 runs</Kit.ChartTooltip></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "Icon": {
      "origin": "new",
      "summary": "A supplied SVG component, decorative unless an accessible label is provided.",
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
          "code": "import { Info } from 'lucide-react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContentExamples() {\n  return <Kit.Stack><Kit.Cluster><Kit.Avatar name=\"Ari Example\" /><Kit.AvatarGroupOverflow count={3} /><Kit.AvatarStatusDot /><Kit.Icon icon={Info} label=\"Information\" /><Kit.Code>const ready = true;</Kit.Code><Kit.Kbd>⌘ K</Kit.Kbd><Kit.Token>Project</Kit.Token></Kit.Cluster><Kit.Citation href=\"https://astryx.atmeta.com\">Design reference</Kit.Citation><Kit.Timestamp dateTime=\"2026-10-17T09:30:00+13:00\" options={{ dateStyle: 'medium', timeZone: 'Pacific/Auckland' }} /><Kit.Timer seconds={125} /><Kit.Thumbnail alt=\"Project artwork placeholder\" /><Kit.Indicator label=\"Ready\" /><Kit.Item title=\"Project\" description=\"Ready for review\" /><Kit.Markdown>{'# Project notes\\n\\nSafe **Markdown** with `inline code`.\\n\\n- Keyboard controls\\n- Named actions'}</Kit.Markdown><Kit.Chart title=\"Weekly runs\" description=\"Monday 20 runs, Tuesday 40 runs, Wednesday 60 runs.\" legend={<Kit.ChartLegend items={[{ label: 'Runs', tone: 'accent' }]} />}><Kit.ChartGrid x={50} y={20} width={500} height={230} horizontal={[0, 115, 230]} /><Kit.ChartAxis x={50} y={250} length={500} ticks={[{ value: 'Mon', position: 50 }, { value: 'Tue', position: 250 }, { value: 'Wed', position: 450 }]} /><path d=\"M100 210 L300 140 L500 50\" fill=\"none\" stroke=\"var(--c-red)\" strokeWidth={3} /></Kit.Chart><Kit.ChartTooltip>Wednesday: 60 runs</Kit.ChartTooltip></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "Thumbnail": {
      "origin": "new",
      "summary": "A reserved image ratio using an app-supplied image or a visible placeholder.",
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
          "code": "import { Info } from 'lucide-react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function ContentExamples() {\n  return <Kit.Stack><Kit.Cluster><Kit.Avatar name=\"Ari Example\" /><Kit.AvatarGroupOverflow count={3} /><Kit.AvatarStatusDot /><Kit.Icon icon={Info} label=\"Information\" /><Kit.Code>const ready = true;</Kit.Code><Kit.Kbd>⌘ K</Kit.Kbd><Kit.Token>Project</Kit.Token></Kit.Cluster><Kit.Citation href=\"https://astryx.atmeta.com\">Design reference</Kit.Citation><Kit.Timestamp dateTime=\"2026-10-17T09:30:00+13:00\" options={{ dateStyle: 'medium', timeZone: 'Pacific/Auckland' }} /><Kit.Timer seconds={125} /><Kit.Thumbnail alt=\"Project artwork placeholder\" /><Kit.Indicator label=\"Ready\" /><Kit.Item title=\"Project\" description=\"Ready for review\" /><Kit.Markdown>{'# Project notes\\n\\nSafe **Markdown** with `inline code`.\\n\\n- Keyboard controls\\n- Named actions'}</Kit.Markdown><Kit.Chart title=\"Weekly runs\" description=\"Monday 20 runs, Tuesday 40 runs, Wednesday 60 runs.\" legend={<Kit.ChartLegend items={[{ label: 'Runs', tone: 'accent' }]} />}><Kit.ChartGrid x={50} y={20} width={500} height={230} horizontal={[0, 115, 230]} /><Kit.ChartAxis x={50} y={250} length={500} ticks={[{ value: 'Mon', position: 50 }, { value: 'Tue', position: 250 }, { value: 'Wed', position: 450 }]} /><path d=\"M100 210 L300 140 L500 50\" fill=\"none\" stroke=\"var(--c-red)\" strokeWidth={3} /></Kit.Chart><Kit.ChartTooltip>Wednesday: 60 runs</Kit.ChartTooltip></Kit.Stack>;\n}\n"
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
