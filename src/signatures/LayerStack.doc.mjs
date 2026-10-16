/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An exploded view of a layered system. Three plates start stacked and part as you scroll through the section (one ScrollTrigger writes --p, CSS does the rest); hover or focus a plate to lift it clear and read what it holds.",
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
      "name": "layers",
      "type": "Array<{ id: string; code: string; title: string; body: string; glyph: string }>",
      "description": "Host-supplied layers; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"layerStack\",\n  \"anchor\": \"build\",\n  \"railLabel\": \"How we build\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"Architecture model\",\n  \"title\": \"One environment. Many roles. Clear boundaries.\",\n  \"intro\": \"Scroll to part the layers. Hover or focus a plate to lift it and read what it holds.\",\n  \"layers\": [\n    {\n      \"id\": \"a-01\",\n      \"code\": \"L3\",\n      \"title\": \"Interface surfaces\",\n      \"body\": \"Role-scoped views, dashboards, and portals.\",\n      \"glyph\": \"terminal\"\n    },\n    {\n      \"id\": \"a-02\",\n      \"code\": \"L2\",\n      \"title\": \"Workflow layer\",\n      \"body\": \"State, automation, scheduling, and coordination.\",\n      \"glyph\": \"loop\"\n    },\n    {\n      \"id\": \"a-03\",\n      \"code\": \"L1\",\n      \"title\": \"Data core\",\n      \"body\": \"Records and relationships under a defined access model.\",\n      \"glyph\": \"database\"\n    }\n  ],\n  \"note\": \"A model for how we think about operational software. It illustrates an approach, not a deployed system.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"layerStack\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
