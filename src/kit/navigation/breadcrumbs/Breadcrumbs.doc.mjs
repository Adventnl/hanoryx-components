/* Documentation for Breadcrumbs. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Breadcrumbs",
  "area": "kit",
  "family": "navigation",
  "summary": "Where you are, as a trail back up. The last item is the current page and is not a link.",
  "props": [
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ label, to? }. The last is the current page."
    },
    {
      "name": "label",
      "type": "string",
      "default": "\"Breadcrumb\"",
      "description": "The nav landmark’s name; change it when two trails share a page."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Through each link in the trail."
    }
  ],
  "notes": [
    "An ordered list inside a nav, with aria-current on the last item; the separators are drawn by CSS and not read out."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Breadcrumbs items={[{ label: 'Resources', to: '/resources' }, { label: 'Glossary' }]} />"
    }
  ]
};
