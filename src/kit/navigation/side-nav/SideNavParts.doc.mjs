export const docs = {
  "origin": "new",
  "summary": "A natively collapsible navigation section containing list items.",
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
      "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {
    "SideNavHeading": {
      "origin": "new",
      "summary": "A level-three section heading for side navigation.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "SideNavItem": {
      "origin": "new",
      "summary": "A routed navigation list item with optional current-page state.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "SideNavCollapseButton": {
      "origin": "new",
      "summary": "A named navigation visibility toggle with aria-expanded and aria-controls.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "MobileNav": {
      "origin": "new",
      "summary": "A native disclosure that exposes a named navigation region.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "NavIcon": {
      "origin": "new",
      "summary": "Decorative content beside a navigation label.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
        }
      ],
      "sizing": {
        "rules": [
          "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
        ],
        "scope": "Contextual family example"
      }
    },
    "NavHeadingMenu": {
      "origin": "new",
      "summary": "A navigation heading that opens native disclosure content.",
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
          "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nexport default function NavigationExamples() {\n  const [tab, setTab] = useState('overview');\n  return <Kit.Stack><Kit.TopNav><Kit.TopNavHeading to=\"/\">Workspace</Kit.TopNavHeading><Kit.TopNavItem to=\"/a/kit\">Kit</Kit.TopNavItem><Kit.TopNavMenu label=\"Resources\"><Kit.TopNavItem to=\"/guides/getting-started\">Getting started</Kit.TopNavItem></Kit.TopNavMenu><Kit.TopNavMegaMenu label=\"Explore\"><Kit.TopNavMegaMenuItem title=\"Components\" to=\"/a/kit\">Reusable controls.</Kit.TopNavMegaMenuItem><Kit.TopNavMegaMenuFeaturedCard title=\"Build a page\" to=\"/guides/layout-recipes\" eyebrow=\"Featured\">Compose your interface.</Kit.TopNavMegaMenuFeaturedCard></Kit.TopNavMegaMenu></Kit.TopNav><Kit.MobileNav><Kit.SideNavSection title=\"Projects\"><Kit.SideNavItem to=\"/a/kit\">Browse projects</Kit.SideNavItem></Kit.SideNavSection></Kit.MobileNav><Kit.TabList label=\"Project views\" value={tab} onChange={setTab}><Kit.Tab value=\"overview\" id=\"family-overview-tab\" panelId=\"family-overview\">Overview</Kit.Tab><Kit.Tab value=\"activity\" id=\"family-activity-tab\" panelId=\"family-activity\">Activity</Kit.Tab></Kit.TabList><div id={`family-${tab}`} role=\"tabpanel\" aria-labelledby={`family-${tab}-tab`} tabIndex={0}>{tab === 'overview' ? 'Project overview' : 'Recent project activity'}</div><Kit.TabMenu tabs={[{ id: 'overview', label: 'Overview' }, { id: 'activity', label: 'Activity' }]} onChange={setTab} /></Kit.Stack>;\n}\n"
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
