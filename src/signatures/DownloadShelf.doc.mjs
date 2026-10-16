/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Twelve documents assembled in the browser. The page-list download reads a generated catalog of page titles; the other files use data already loaded.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"downloadShelf\",\n  \"anchor\": \"shelf\",\n  \"railLabel\": \"The shelf\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 800,\n  \"eyebrow\": \"The shelf\",\n  \"title\": \"Preview it, then keep it.\",\n  \"intro\": \"Press Preview to see the first lines of any document before you save it. Press Download and your browser saves the file.\",\n  \"note\": \"Templates are starting points written for this site. They are general, not legal or professional advice, and they are meant to be changed.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"downloadShelf\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
