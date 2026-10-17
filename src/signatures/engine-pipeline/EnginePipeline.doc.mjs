/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A left-to-right flow of stages. Pick one (click, tap, or ← →) and a token glides along the line to it — the line fills behind it — while the panel below cross-slides to that stage's description.",
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
      "name": "stages",
      "type": "Array<{ id: string; label: string; glyph: string; title: string; body: string; points: Array<string> }>",
      "description": "Host-supplied stages; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"enginePipeline\",\n  \"anchor\": \"pipeline\",\n  \"railLabel\": \"Pipeline\",\n  \"scene\": \"build-pipeline\",\n  \"minHeight\": 520,\n  \"eyebrow\": \"Pipeline\",\n  \"title\": \"From scene to player.\",\n  \"intro\": \"Pick a stage. The token follows.\",\n  \"stages\": [\n    {\n      \"id\": \"author\",\n      \"label\": \"Author\",\n      \"glyph\": \"node\",\n      \"title\": \"Author a scene\",\n      \"body\": \"A project is built from entities and the components that describe them.\",\n      \"points\": [\n        \"Entities\",\n        \"Components\",\n        \"Scenes\"\n      ]\n    },\n    {\n      \"id\": \"editor\",\n      \"label\": \"Editor\",\n      \"glyph\": \"terminal\",\n      \"title\": \"Work in the editor\",\n      \"body\": \"The editor provides scene hierarchy, inspector, debugging and profiling surfaces.\",\n      \"points\": [\n        \"Hierarchy\",\n        \"Inspector\",\n        \"Debugging\",\n        \"Profiling\"\n      ]\n    },\n    {\n      \"id\": \"shared\",\n      \"label\": \"Shared data\",\n      \"glyph\": \"database\",\n      \"title\": \"One set of data\",\n      \"body\": \"Entity and component data can run in both the editor and the standalone player — the same project, not a copy.\",\n      \"points\": [\n        \"Same data\",\n        \"Editor and player\"\n      ]\n    },\n    {\n      \"id\": \"player\",\n      \"label\": \"Player\",\n      \"glyph\": \"engine\",\n      \"title\": \"Run it in the player\",\n      \"body\": \"The standalone player runs a project without the editor around it.\",\n      \"points\": [\n        \"Standalone\",\n        \"Runtime\"\n      ]\n    },\n    {\n      \"id\": \"export\",\n      \"label\": \"Export\",\n      \"glyph\": \"stack\",\n      \"title\": \"Export a project\",\n      \"body\": \"Project export tooling is part of the toolset, so a project can leave the editor.\",\n      \"points\": [\n        \"Export tooling\"\n      ]\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"enginePipeline\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
