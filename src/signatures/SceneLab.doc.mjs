/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A viewer for the site's own Canvas scenes. Choose a study from the list (or with ↑ ↓), change its density, and flip \"Still frame\" to see the single frame a visitor with reduced motion gets.",
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
      "name": "experiments",
      "type": "Array<{ id: string; name: string; purpose: string }>",
      "description": "Host-supplied experiments; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"sceneLab\",\n  \"anchor\": \"scenes\",\n  \"railLabel\": \"Scene catalogue\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Scene catalogue\",\n  \"title\": \"Study the field.\",\n  \"intro\": \"Scenes share the site’s scheduler and quality budget. Reduced-motion settings show a still frame — switch it on to see it.\",\n  \"experiments\": [\n    {\n      \"id\": \"flow-field\",\n      \"name\": \"Flow field\",\n      \"purpose\": \"Vector motion as a continuous field.\"\n    },\n    {\n      \"id\": \"network-constellation\",\n      \"name\": \"Network constellation\",\n      \"purpose\": \"Relationships drawn as linked nodes.\"\n    },\n    {\n      \"id\": \"wave-interference\",\n      \"name\": \"Wave interference\",\n      \"purpose\": \"Overlapping frequencies create a changing surface.\"\n    },\n    {\n      \"id\": \"topographic-lines\",\n      \"name\": \"Topographic lines\",\n      \"purpose\": \"Contour structure with slow spatial movement.\"\n    },\n    {\n      \"id\": \"dependency-graph\",\n      \"name\": \"Dependency graph\",\n      \"purpose\": \"Architecture expressed through connections.\"\n    },\n    {\n      \"id\": \"signal-spectrum-field\",\n      \"name\": \"Signal spectrum\",\n      \"purpose\": \"A field that responds to the shared audio bridge.\"\n    }\n  ],\n  \"note\": \"Each scene runs on a single canvas, drawn at about thirty frames a second.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"sceneLab\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
