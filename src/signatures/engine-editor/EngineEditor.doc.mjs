/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "EngineEditor is an extracted page composition.",
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
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"engineEditor\",\n  \"anchor\": \"editor\",\n  \"railLabel\": \"Editor & player\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Editor and player\",\n  \"title\": \"Author it. Then run it.\",\n  \"intro\": \"A miniature of the idea: select and drag entities in the editor, then switch to the player and the same data simply runs. This is an illustration, not the engine.\",\n  \"caption\": \"The profiler graph shows real frame times measured from this demo in your browser.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"engineEditor\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
