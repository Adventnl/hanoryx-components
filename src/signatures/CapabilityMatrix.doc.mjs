/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "What an operational system is usually made of, and which kind of system tends to need what. A reference, drawn as a grid: a judgement from experience, not a statement about any one project.",
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
      "type": "Array<{ id: string; name: string; to: string }>",
      "description": "Host-supplied areas; see the complete working data example below."
    },
    {
      "name": "capabilities",
      "type": "Array<{ id: string; name: string; blurb: string; uses: { ops: number; commerce: number; auto: number; internal: number; data: number; portal: number; research: number } }>",
      "description": "Host-supplied capabilities; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"capabilityMatrix\",\n  \"anchor\": \"grid\",\n  \"railLabel\": \"The grid\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The grid\",\n  \"title\": \"Twelve capabilities, seven kinds of system.\",\n  \"intro\": \"Choose a capability to see where it turns up, or a kind of system (a column heading) to see what it usually needs.\",\n  \"areas\": [\n    {\n      \"id\": \"ops\",\n      \"name\": \"Operational management\",\n      \"to\": \"/systems/operational-management\"\n    },\n    {\n      \"id\": \"commerce\",\n      \"name\": \"Commerce infrastructure\",\n      \"to\": \"/systems/commerce-infrastructure\"\n    },\n    {\n      \"id\": \"auto\",\n      \"name\": \"Automation\",\n      \"to\": \"/systems/automation\"\n    },\n    {\n      \"id\": \"internal\",\n      \"name\": \"Internal platforms\",\n      \"to\": \"/systems/internal-platforms\"\n    },\n    {\n      \"id\": \"data\",\n      \"name\": \"Data interfaces\",\n      \"to\": \"/systems/data-interfaces\"\n    },\n    {\n      \"id\": \"portal\",\n      \"name\": \"Client portals\",\n      \"to\": \"/systems/client-portals\"\n    },\n    {\n      \"id\": \"research\",\n      \"name\": \"Research systems\",\n      \"to\": \"/systems/research-systems\"\n    }\n  ],\n  \"capabilities\": [\n    {\n      \"id\": \"roles\",\n      \"name\": \"Roles and access\",\n      \"blurb\": \"Who may see and do what, decided on the server for every request, with the rules written down.\",\n      \"uses\": {\n        \"ops\": 2,\n        \"commerce\": 2,\n        \"auto\": 1,\n        \"internal\": 2,\n        \"data\": 2,\n        \"portal\": 2,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"audit\",\n      \"name\": \"Audit trail\",\n      \"blurb\": \"A record of who did what, to which record and why, kept so that it can be checked later.\",\n      \"uses\": {\n        \"ops\": 2,\n        \"commerce\": 2,\n        \"auto\": 2,\n        \"internal\": 2,\n        \"data\": 1,\n        \"portal\": 2,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"schedule\",\n      \"name\": \"Scheduling and due dates\",\n      \"blurb\": \"Things that must happen at a time, and the reminders and overdue states around them.\",\n      \"uses\": {\n        \"ops\": 2,\n        \"commerce\": 1,\n        \"auto\": 2,\n        \"internal\": 1,\n        \"data\": 0,\n        \"portal\": 1,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"workflow\",\n      \"name\": \"Workflow and state\",\n      \"blurb\": \"Records that move through named steps under rules, with only the allowed moves available.\",\n      \"uses\": {\n        \"ops\": 2,\n        \"commerce\": 2,\n        \"auto\": 2,\n        \"internal\": 1,\n        \"data\": 0,\n        \"portal\": 1,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"notify\",\n      \"name\": \"Notifications\",\n      \"blurb\": \"Telling the right person, at the right moment, without telling everyone about everything.\",\n      \"uses\": {\n        \"ops\": 2,\n        \"commerce\": 2,\n        \"auto\": 2,\n        \"internal\": 1,\n        \"data\": 0,\n        \"portal\": 2,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"dash\",\n      \"name\": \"Dashboards and reports\",\n      \"blurb\": \"Reading the state of things at a glance, with a way to follow a number back to its source.\",\n      \"uses\": {\n        \"ops\": 1,\n        \"commerce\": 1,\n        \"auto\": 1,\n        \"internal\": 2,\n        \"data\": 2,\n        \"portal\": 1,\n        \"research\": 1\n      }\n    },\n    {\n      \"id\": \"search\",\n      \"name\": \"Search and filters\",\n      \"blurb\": \"Finding one thing among many, quickly, in the words people actually use.\",\n      \"uses\": {\n        \"ops\": 1,\n        \"commerce\": 2,\n        \"auto\": 0,\n        \"internal\": 2,\n        \"data\": 2,\n        \"portal\": 1,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"io\",\n      \"name\": \"Import and export\",\n      \"blurb\": \"Getting data in and out as files, because someone always needs a spreadsheet.\",\n      \"uses\": {\n        \"ops\": 1,\n        \"commerce\": 2,\n        \"auto\": 1,\n        \"internal\": 2,\n        \"data\": 2,\n        \"portal\": 1,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"api\",\n      \"name\": \"Integrations and APIs\",\n      \"blurb\": \"Talking to other systems in a way that survives their changes and their bad days.\",\n      \"uses\": {\n        \"ops\": 1,\n        \"commerce\": 2,\n        \"auto\": 2,\n        \"internal\": 1,\n        \"data\": 2,\n        \"portal\": 2,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"pay\",\n      \"name\": \"Payments\",\n      \"blurb\": \"Taking money, refunding it, and reconciling what happened with what was recorded.\",\n      \"uses\": {\n        \"ops\": 0,\n        \"commerce\": 2,\n        \"auto\": 0,\n        \"internal\": 0,\n        \"data\": 0,\n        \"portal\": 1,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"scale\",\n      \"name\": \"Handling large data\",\n      \"blurb\": \"Working over very many records without slowing to a crawl: indexes, paging, windows.\",\n      \"uses\": {\n        \"ops\": 0,\n        \"commerce\": 1,\n        \"auto\": 1,\n        \"internal\": 2,\n        \"data\": 2,\n        \"portal\": 0,\n        \"research\": 0\n      }\n    },\n    {\n      \"id\": \"motion\",\n      \"name\": \"Motion and visual feedback\",\n      \"blurb\": \"Showing change as it happens, in a way that explains the state of things.\",\n      \"uses\": {\n        \"ops\": 1,\n        \"commerce\": 1,\n        \"auto\": 0,\n        \"internal\": 1,\n        \"data\": 1,\n        \"portal\": 1,\n        \"research\": 2\n      }\n    }\n  ],\n  \"note\": \"A judgement from experience, not a statement about any particular project. The dots say how often a capability turns up in that kind of system, not what any one system contains.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"capabilityMatrix\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
