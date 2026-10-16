/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The design tokens, read from the stylesheet this page is wearing. Search them, group them, see what each one is, copy it as var(--name). Nothing here is typed in by hand: change a token in the CSS and this page changes with it.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"tokenInspector\",\n  \"anchor\": \"tokens\",\n  \"railLabel\": \"The tokens\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 900,\n  \"eyebrow\": \"The tokens\",\n  \"title\": \"Read from the live stylesheet.\",\n  \"intro\": \"Search by name or value, filter by kind, and copy any token as var(--name). Each row shows what the token looks like.\",\n  \"note\": \"Computed values are shown as the browser resolves them. If a browser does not let a page read its own stylesheet, the list is empty and says so.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"tokenInspector\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
