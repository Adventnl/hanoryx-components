/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A screen reader's-eye view of the page you are reading: its title and language, its headings as an outline, its landmarks, how many places the Tab key stops, and a few things that go wrong. Click a heading to go there.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"pageOutline\",\n  \"anchor\": \"outline\",\n  \"railLabel\": \"This page, as read aloud\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"This page, as read aloud\",\n  \"title\": \"What a screen reader meets here.\",\n  \"intro\": \"Every number below is read from the page you are looking at, right now: its headings as an outline, its landmarks, how many places the Tab key can stop and a handful of things that commonly go wrong.\",\n  \"note\": \"An automated read can find structure and missing names. It cannot tell whether a heading makes sense or whether a name is a good one. Only a person can.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"pageOutline\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
