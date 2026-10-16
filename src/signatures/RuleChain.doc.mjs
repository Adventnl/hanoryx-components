/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A rule you can assemble and run. Choose a trigger, a condition and an action, decide whether the condition holds, then run it: a pulse travels WHEN → IF → THEN → LOG and the record appends a line for every run — including the runs where…",
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
      "name": "triggers",
      "type": "Array<{ id: string; label: string }>",
      "description": "Host-supplied triggers; see the complete working data example below."
    },
    {
      "name": "conditions",
      "type": "Array<{ id: string; label: string }>",
      "description": "Host-supplied conditions; see the complete working data example below."
    },
    {
      "name": "actions",
      "type": "Array<{ id: string; label: string }>",
      "description": "Host-supplied actions; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"ruleChain\",\n  \"anchor\": \"rule\",\n  \"railLabel\": \"Build a rule\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"Build a rule\",\n  \"title\": \"How a rule resolves.\",\n  \"intro\": \"Choose a trigger, a guard and an action, decide whether the condition holds, then run it. Even when the rule stops, the run is recorded.\",\n  \"triggers\": [\n    {\n      \"id\": \"event\",\n      \"label\": \"An event arrives\"\n    },\n    {\n      \"id\": \"schedule\",\n      \"label\": \"A schedule fires\"\n    },\n    {\n      \"id\": \"state\",\n      \"label\": \"A state changes\"\n    }\n  ],\n  \"conditions\": [\n    {\n      \"id\": \"threshold\",\n      \"label\": \"A threshold is crossed\"\n    },\n    {\n      \"id\": \"role\",\n      \"label\": \"The right role is involved\"\n    },\n    {\n      \"id\": \"window\",\n      \"label\": \"It is inside the time window\"\n    }\n  ],\n  \"actions\": [\n    {\n      \"id\": \"notify\",\n      \"label\": \"Notify the owner\"\n    },\n    {\n      \"id\": \"assign\",\n      \"label\": \"Assign the next step\"\n    },\n    {\n      \"id\": \"update\",\n      \"label\": \"Update the record\"\n    }\n  ],\n  \"note\": \"A model of a rule engine. Nothing real is triggered, and the log lives only on this page.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"ruleChain\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
