/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "How the engine is organised, as an interactive blueprint. Pick a part on the left; the matching block on the diagram lights and the panel explains it. The only external link on the whole site lives here — to the YK Engine repository.",
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
      "name": "parts",
      "type": "Array<{ id: string; name: string; glyph: string; line: string; detail: string; folders: Array<string> }>",
      "description": "Host-supplied parts; see the complete working data example below."
    },
    {
      "name": "repoUrl",
      "type": "string",
      "description": "Host-supplied repoUrl; see the complete working data example below."
    },
    {
      "name": "repoLabel",
      "type": "string",
      "description": "Host-supplied repoLabel; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"engineAnatomy\",\n  \"anchor\": \"anatomy\",\n  \"railLabel\": \"Anatomy\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 520,\n  \"eyebrow\": \"Anatomy\",\n  \"title\": \"How the engine is organised.\",\n  \"intro\": \"Pick a part; its block lights on the board.\",\n  \"repoUrl\": \"https://github.com/Adventnl/YK-Engine\",\n  \"repoLabel\": \"YK Engine on GitHub\",\n  \"parts\": [\n    {\n      \"id\": \"editor\",\n      \"name\": \"Editor\",\n      \"glyph\": \"terminal\",\n      \"line\": \"Where projects are authored\",\n      \"detail\": \"The editor provides scene hierarchy, inspector, debugging and profiling surfaces.\",\n      \"folders\": [\n        \"editor/\"\n      ]\n    },\n    {\n      \"id\": \"player\",\n      \"name\": \"Player\",\n      \"glyph\": \"engine\",\n      \"line\": \"Where projects run\",\n      \"detail\": \"A standalone player runs the same entity and component data as the editor.\",\n      \"folders\": [\n        \"player/\"\n      ]\n    },\n    {\n      \"id\": \"core\",\n      \"name\": \"Engine core\",\n      \"glyph\": \"cube\",\n      \"line\": \"The shared engine code\",\n      \"detail\": \"Engine headers and sources, written in C++20.\",\n      \"folders\": [\n        \"include/\",\n        \"src/\"\n      ]\n    },\n    {\n      \"id\": \"tooling\",\n      \"name\": \"Tooling\",\n      \"glyph\": \"ruler\",\n      \"line\": \"Build, scripts, export\",\n      \"detail\": \"Build configuration, scripts and the project export tools.\",\n      \"folders\": [\n        \"cmake/\",\n        \"scripts/\",\n        \"tools/\",\n        \"packaging/\"\n      ]\n    },\n    {\n      \"id\": \"demos\",\n      \"name\": \"Demos\",\n      \"glyph\": \"compass\",\n      \"line\": \"Two data-only demos\",\n      \"detail\": \"Two data-only demos exercise reusable engine systems.\",\n      \"folders\": [\n        \"YK-DemoGame/\",\n        \"YK-ExplorationDemo/\"\n      ]\n    },\n    {\n      \"id\": \"quality\",\n      \"name\": \"Tests & docs\",\n      \"glyph\": \"doc\",\n      \"line\": \"Verification and notes\",\n      \"detail\": \"Tests and documentation sit alongside the engine, with third-party code and its licences kept separate.\",\n      \"folders\": [\n        \"tests/\",\n        \"docs/\",\n        \"third_party/\",\n        \"LICENSES/\"\n      ]\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"engineAnatomy\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
