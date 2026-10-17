export const docs = {
  "origin": "new",
  "summary": "A responsive SVG plotting surface with a title, description, caption and optional legend.",
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
    "ChartAxis": {
      "origin": "new",
      "summary": "An SVG axis with explicitly positioned, labelled ticks.",
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
    "ChartGrid": {
      "origin": "new",
      "summary": "Decorative SVG grid lines using supplied horizontal and vertical positions.",
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
    "ChartLegend": {
      "origin": "new",
      "summary": "A textual series legend paired with decorative swatches.",
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
    "ChartSwatch": {
      "origin": "new",
      "summary": "A token-coloured series marker. Supply a label if used without adjacent text.",
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
    "ChartTooltip": {
      "origin": "new",
      "summary": "A textual chart-value output. The host owns the active datum.",
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
