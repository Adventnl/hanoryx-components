/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The company chronology as something you move through. Drag the playhead (or press ← → Home End on it, or click a stop or a row) and the stage beneath glides from phase to phase; \"Play through\" walks the whole sequence.",
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
      "name": "phases",
      "type": "Array<{ id: string; code: string; title: string; headline: string; body: string; glyph: string; status: string }>",
      "description": "Host-supplied phases; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"chronologyScrubber\",\n  \"anchor\": \"phases\",\n  \"railLabel\": \"Phases\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 820,\n  \"eyebrow\": \"Move through it\",\n  \"title\": \"Six phases of work.\",\n  \"intro\": \"Drag the playhead, press the arrow keys on it, pick a row, or play the whole sequence through.\",\n  \"phases\": [\n    {\n      \"id\": \"foundations\",\n      \"code\": \"PHASE.01\",\n      \"title\": \"Foundations\",\n      \"headline\": \"Structure first.\",\n      \"body\": \"Online systems begin beneath the surface: the data model, the boundaries and the roles. The interface comes after the foundations are settled.\",\n      \"glyph\": \"stack\",\n      \"status\": \"Dates not published\"\n    },\n    {\n      \"id\": \"coordination\",\n      \"code\": \"PHASE.02\",\n      \"title\": \"Coordination\",\n      \"headline\": \"Musebase.\",\n      \"body\": \"An advanced coordination application that brings people, time and information into one shared environment.\",\n      \"glyph\": \"layers\",\n      \"to\": \"/work/musebase\",\n      \"status\": \"Dates not published\"\n    },\n    {\n      \"id\": \"customer-experience\",\n      \"code\": \"PHASE.03\",\n      \"title\": \"Customer experience\",\n      \"headline\": \"A product for customers.\",\n      \"body\": \"A customer-facing product shaped around the shopping and transaction experience, from first look to confirmation.\",\n      \"glyph\": \"cart\",\n      \"to\": \"/work/customer-product\",\n      \"status\": \"Dates not published\"\n    },\n    {\n      \"id\": \"data-at-scale\",\n      \"code\": \"PHASE.04\",\n      \"title\": \"Data at scale\",\n      \"headline\": \"An internal data system.\",\n      \"body\": \"An internal CRM and data system designed for very large data sets — kept internal, and kept quiet.\",\n      \"glyph\": \"database\",\n      \"to\": \"/work/internal-crm\",\n      \"status\": \"Dates not published\"\n    },\n    {\n      \"id\": \"engine\",\n      \"code\": \"PHASE.05\",\n      \"title\": \"Engine\",\n      \"headline\": \"YK Engine.\",\n      \"body\": \"A proprietary 2D engine with an editor, a standalone player and export tooling.\",\n      \"glyph\": \"engine\",\n      \"to\": \"/work/yk-engine\",\n      \"status\": \"Dates not published\"\n    },\n    {\n      \"id\": \"now\",\n      \"code\": \"PHASE.06\",\n      \"title\": \"Now\",\n      \"headline\": \"Live.\",\n      \"body\": \"The company, its work and this site are live. New phases are added here as they are ready to be told.\",\n      \"glyph\": \"pulse\",\n      \"status\": \"Live\",\n      \"live\": true\n    }\n  ],\n  \"note\": \"The spacing shows order, not time. No dates are published, so none are implied.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"chronologyScrubber\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
