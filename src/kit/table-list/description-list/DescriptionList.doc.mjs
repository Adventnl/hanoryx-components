/* Documentation for DescriptionList. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "DescriptionList",
  "area": "kit",
  "family": "data",
  "summary": "Terms and what they mean, or labels and their values — the right element for a fact sheet. A real dl, so a screen reader pairs each term with its detail.",
  "props": [
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ term, detail } — detail may be any node."
    },
    {
      "name": "stacked",
      "type": "boolean",
      "default": "false",
      "description": "Put each detail under its term."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "On a phone every pair stacks."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<DescriptionList items={[{ term: 'Service', detail: 'Order intake' }, { term: 'Owner', detail: 'Commerce team' }]} />"
    }
  ]
};
