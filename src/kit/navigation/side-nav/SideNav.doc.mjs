/* Documentation for SideNav. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SideNav",
  "area": "kit",
  "family": "navigation",
  "summary": "A vertical navigation in groups that fold. A folded group is out of the tab order and the reading order, not only out of sight.",
  "props": [
    {
      "name": "groups",
      "type": "array",
      "default": "[]",
      "description": "{ label, items: [{ label, to, badge? }], open? }."
    },
    {
      "name": "current",
      "type": "string",
      "description": "The `to` of the page you are on; it gets aria-current."
    },
    {
      "name": "label",
      "type": "string",
      "default": "\"Section navigation\"",
      "description": "The nav landmark’s name."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "Open or close a group."
    },
    {
      "key": "Tab",
      "does": "Through the group buttons and the links of open groups."
    }
  ],
  "notes": [
    "Group headings are real headings holding a button, so a screen reader can list them.",
    "The first group starts open unless you say otherwise."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<SideNav current={pathname} groups={[{ label: 'Reliability', open: true, items: [{ label: 'Runbooks', to: '/insights/runbooks' }] }]} />"
    }
  ]
};
