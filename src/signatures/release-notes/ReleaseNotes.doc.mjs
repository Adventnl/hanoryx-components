/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The site's history, told in chapters, newest first. The site is not versioned and nothing on it is derived from repository dates, so the chapters carry no dates: they are in the order things happened. Filter by what kind of change.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"releaseNotes\",\n  \"anchor\": \"notes\",\n  \"railLabel\": \"The notes\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 800,\n  \"eyebrow\": \"The notes\",\n  \"title\": \"Chapter by chapter.\",\n  \"intro\": \"Open a chapter to read what it did. Filter by the kind of change to see only what was added, only what was changed, or only what was fixed.\",\n  \"note\": \"The site is not versioned like a product, and nothing on it is derived from repository or deployment dates. Chapters are in the order they happened, and carry no dates.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"releaseNotes\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
