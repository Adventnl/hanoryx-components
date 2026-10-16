/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "\"Each stage gates the next.\" Walk a system from intent to release: the runner can only pass a gate once everything that gate asks has been ticked. Passing a gate glides the runner to the next stage; the last one releases.",
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
      "type": "Array<{ id: string; title: string; glyph: string; body: string; gates: Array<string> }>",
      "description": "Host-supplied stages; see the complete working data example below."
    },
    {
      "name": "doneTitle",
      "type": "string",
      "description": "Host-supplied doneTitle; see the complete working data example below."
    },
    {
      "name": "doneBody",
      "type": "string",
      "description": "Host-supplied doneBody; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"gateWalk\",\n  \"anchor\": \"gates\",\n  \"railLabel\": \"Walk the gates\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Build pipeline\",\n  \"title\": \"Each stage gates the next.\",\n  \"intro\": \"A linear, instrumented path from intent to release. Tick what each gate asks for; only then does the runner move on.\",\n  \"stages\": [\n    {\n      \"id\": \"design\",\n      \"title\": \"Design\",\n      \"glyph\": \"compass\",\n      \"body\": \"Roles, states and constraints are mapped before code, and the boundaries are committed to the design before building begins.\",\n      \"gates\": [\n        \"Roles, states and constraints are written down\",\n        \"Data ownership and boundaries are agreed\",\n        \"The interface boundary is settled before building\"\n      ]\n    },\n    {\n      \"id\": \"implement\",\n      \"title\": \"Implement\",\n      \"glyph\": \"cube\",\n      \"body\": \"Components are built against the agreed boundaries, so the surface stays narrow while the internals stay replaceable.\",\n      \"gates\": [\n        \"Components are built against the agreed boundaries\",\n        \"Code is typed, scoped and reviewed\",\n        \"Internals can be replaced without touching the surface\"\n      ]\n    },\n    {\n      \"id\": \"harden\",\n      \"title\": \"Harden\",\n      \"glyph\": \"shield\",\n      \"body\": \"Failure modes are exercised, dependencies are pinned and the path to release is made reversible.\",\n      \"gates\": [\n        \"Failure modes have been exercised\",\n        \"Dependencies are pinned\",\n        \"A release can be reversed, and what cannot is flagged\"\n      ]\n    },\n    {\n      \"id\": \"observe\",\n      \"title\": \"Observe\",\n      \"glyph\": \"lens\",\n      \"body\": \"The signals needed to understand behaviour ship with the system, so the operator sees signal rather than noise.\",\n      \"gates\": [\n        \"The signals that matter are defined before release\",\n        \"Telemetry ships with the system\",\n        \"The operator sees signal, not noise\"\n      ]\n    }\n  ],\n  \"doneTitle\": \"Released — and observed.\",\n  \"doneBody\": \"Nothing reached release unchecked, and nothing runs without reporting back.\",\n  \"note\": \"A way of working shown as a small game. It is not a certification and not a record of any real release.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"gateWalk\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
