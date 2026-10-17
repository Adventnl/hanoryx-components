/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Compose an internal platform. Switch modules on and off and the console re-flows around them (shared layout animation).",
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
      "name": "modules",
      "type": "Array<{ id: string; title: string; body: string; span: number }>",
      "description": "Host-supplied modules; see the complete working data example below."
    },
    {
      "name": "roles",
      "type": "Array<{ id: string; label: string }>",
      "description": "Host-supplied roles; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"consoleComposer\",\n  \"anchor\": \"compose\",\n  \"railLabel\": \"Compose a console\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Compose a console\",\n  \"title\": \"Four jobs for an internal platform.\",\n  \"intro\": \"Switch modules on and off and the console re-flows around them. Change the role, and notice what lock the Administration module takes.\",\n  \"modules\": [\n    {\n      \"id\": \"overview\",\n      \"title\": \"Overview\",\n      \"body\": \"Summarise the state an operator needs before acting, and when it was last refreshed.\",\n      \"span\": 6\n    },\n    {\n      \"id\": \"administration\",\n      \"title\": \"Administration\",\n      \"body\": \"Keep configuration and access changes apart from day-to-day workflow actions.\",\n      \"span\": 3,\n      \"adminOnly\": true\n    },\n    {\n      \"id\": \"control\",\n      \"title\": \"Control\",\n      \"body\": \"Put confirmation, authorisation and a way back around consequential actions.\",\n      \"span\": 3\n    },\n    {\n      \"id\": \"exceptions\",\n      \"title\": \"Exceptions\",\n      \"body\": \"Show what needs attention, why it matters and who can resolve it.\",\n      \"span\": 3\n    }\n  ],\n  \"roles\": [\n    {\n      \"id\": \"operator\",\n      \"label\": \"Operator\"\n    },\n    {\n      \"id\": \"admin\",\n      \"label\": \"Administrator\"\n    }\n  ],\n  \"note\": \"Shapes only. The right modules depend on the actual organisation, data and decisions involved.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"consoleComposer\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
