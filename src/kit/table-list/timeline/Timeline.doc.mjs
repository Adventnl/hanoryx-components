/* Documentation for Timeline. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Timeline",
  "area": "kit",
  "family": "data",
  "summary": "Things in the order they happen, down a line. It is an ordered list, so the order is announced. This site’s own timeline is told in undated phases — pass words, not dates, unless you have them.",
  "props": [
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ when?, title, body?, done? }."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Items marked done get a filled marker."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Timeline items={[{ when: 'Phase one', title: 'Shape', body: 'Work out the problem.', done: true }, { when: 'Phase two', title: 'Build' }]} />"
    }
  ]
};
