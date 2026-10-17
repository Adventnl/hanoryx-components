/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Selected work, composed as portals. Two primary projects sit side by side as big panels; hover or focus one and it widens while the other gives way (flex-grow eases, nothing jumps), its art moves (plates fan out;",
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
      "name": "supportingLabel",
      "type": "string",
      "description": "Host-supplied supportingLabel; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"workPortals\",\n  \"anchor\": \"portfolio\",\n  \"railLabel\": \"Portfolio\",\n  \"scene\": \"dependency-graph\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Case studies\",\n  \"title\": \"Start with the two that lead.\",\n  \"intro\": \"Hover or focus a project to open it up. Each one leads to its own case study.\",\n  \"supportingLabel\": \"Supporting studies\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"workPortals\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
