/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "SurfaceCompare is an extracted page composition.",
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
      "name": "groups",
      "type": "Array<{ id: string; label: string; note: string }>",
      "description": "Host-supplied groups; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"surfaceCompare\",\n  \"anchor\": \"structure\",\n  \"railLabel\": \"How we think\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"How we think\",\n  \"title\": \"Structure first. Surface second.\",\n  \"intro\": \"Drag the handle to peel the surface away. Most of a system’s quality lives in what the screen does not show.\",\n  \"groups\": [\n    {\n      \"id\": \"access\",\n      \"label\": \"Access\",\n      \"note\": \"Who is acting, and what each role may reach.\"\n    },\n    {\n      \"id\": \"data\",\n      \"label\": \"Data\",\n      \"note\": \"Where each record lives, and where it may be read.\"\n    },\n    {\n      \"id\": \"change\",\n      \"label\": \"Change\",\n      \"note\": \"How an action is made, reviewed and traced.\"\n    }\n  ],\n  \"note\": \"An abstract screen drawn for this page. It illustrates an approach and is not a screenshot of any product.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"surfaceCompare\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
