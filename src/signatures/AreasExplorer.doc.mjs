/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Areas of work as a row of strips. The strip you point at (or focus, or tap) opens while its neighbours fold to a vertical label; on a phone the same set becomes a stack that opens downward.",
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
      "name": "areas",
      "type": "Array<{ id: string; code: string; title: string; glyph: string; summary: string; thinks: Array<string>; links: Array<object> }>",
      "description": "Host-supplied areas; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"areasExplorer\",\n  \"anchor\": \"areas\",\n  \"railLabel\": \"Areas of work\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"Areas of work\",\n  \"title\": \"Where the work happens.\",\n  \"intro\": \"Point at a strip, or press an arrow key on one. Each is a kind of work the company does today.\",\n  \"areas\": [\n    {\n      \"id\": \"interfaces\",\n      \"code\": \"AREA.01\",\n      \"title\": \"Interfaces\",\n      \"glyph\": \"layers\",\n      \"summary\": \"Screens that resolve intent in a single read: layout, interaction, motion and the small details between them.\",\n      \"thinks\": [\n        \"Layout and hierarchy that stay legible at any size\",\n        \"Interaction that responds to a person instead of just reacting\",\n        \"Motion that explains state and never gets in the way\"\n      ],\n      \"links\": [\n        {\n          \"label\": \"Interface lab\",\n          \"to\": \"/north/interface-lab\"\n        },\n        {\n          \"label\": \"Motion systems\",\n          \"to\": \"/north/motion-systems\"\n        }\n      ]\n    },\n    {\n      \"id\": \"systems\",\n      \"code\": \"AREA.02\",\n      \"title\": \"Systems & platforms\",\n      \"glyph\": \"stack\",\n      \"summary\": \"The structure under the surface: services, data models, roles and the boundaries between them.\",\n      \"thinks\": [\n        \"Where each record lives, and who owns it\",\n        \"What every role may reach, enforced at the boundary\",\n        \"How a change is made, reviewed and traced\"\n      ],\n      \"links\": [\n        {\n          \"label\": \"Systems\",\n          \"to\": \"/systems\"\n        },\n        {\n          \"label\": \"Musebase\",\n          \"to\": \"/work/musebase\"\n        }\n      ]\n    },\n    {\n      \"id\": \"data\",\n      \"code\": \"AREA.03\",\n      \"title\": \"Data at scale\",\n      \"glyph\": \"database\",\n      \"summary\": \"Internal systems designed for very large data sets, where browsing and searching have to stay comfortable as the data grows.\",\n      \"thinks\": [\n        \"Views that stay honest as the volume of data grows\",\n        \"Search and filtering that people can reason about\",\n        \"Making a very large collection feel manageable\"\n      ],\n      \"links\": [\n        {\n          \"label\": \"Internal CRM\",\n          \"to\": \"/work/internal-crm\"\n        },\n        {\n          \"label\": \"Data interfaces\",\n          \"to\": \"/systems/data-interfaces\"\n        }\n      ]\n    },\n    {\n      \"id\": \"engines\",\n      \"code\": \"AREA.04\",\n      \"title\": \"Engines & graphics\",\n      \"glyph\": \"engine\",\n      \"summary\": \"Work on a proprietary 2D engine: rendering, an editor, a standalone player and export tooling.\",\n      \"thinks\": [\n        \"A render loop that stays steady\",\n        \"Editor tools people can learn quickly\",\n        \"A player and exports that match what the editor shows\"\n      ],\n      \"links\": [\n        {\n          \"label\": \"YK Engine\",\n          \"to\": \"/work/yk-engine\"\n        }\n      ]\n    },\n    {\n      \"id\": \"automation\",\n      \"code\": \"AREA.05\",\n      \"title\": \"Automation & tooling\",\n      \"glyph\": \"loop\",\n      \"summary\": \"Internal tooling that removes manual drag: automation, build tooling and the checks that keep releases calm.\",\n      \"thinks\": [\n        \"Workflows that run without hand-holding\",\n        \"Tooling that developers actually want to use\",\n        \"Checks that catch problems before release\"\n      ],\n      \"links\": [\n        {\n          \"label\": \"Automation\",\n          \"to\": \"/systems/automation\"\n        },\n        {\n          \"label\": \"Tooling\",\n          \"to\": \"/north/tooling\"\n        }\n      ]\n    }\n  ],\n  \"note\": \"These are the areas the work covers. They are not a list of open positions, and none is implied.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"areasExplorer\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
