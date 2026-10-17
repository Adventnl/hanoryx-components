export const docs = {
  "origin": "new",
  "summary": "A sequence item with its completed, current or upcoming state written as text.",
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
  "subcomponents": {}
};
