/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "ViewShift is an extracted page composition.",
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
      "name": "records",
      "type": "Array<{ id: string; name: string; state: string; time: string; by: string }>",
      "description": "Host-supplied records; see the complete working data example below."
    },
    {
      "name": "states",
      "type": "Array<{ id: string; label: string }>",
      "description": "Host-supplied states; see the complete working data example below."
    },
    {
      "name": "views",
      "type": "Array<{ id: string; label: string; note: string }>",
      "description": "Host-supplied views; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"viewShift\",\n  \"anchor\": \"surfaces\",\n  \"railLabel\": \"One record, four surfaces\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 720,\n  \"eyebrow\": \"One record set, four surfaces\",\n  \"title\": \"Make the record answerable.\",\n  \"intro\": \"The same eight records, shown as a status list, a log, a report and a query. Switch surfaces and follow a single record across.\",\n  \"states\": [\n    {\n      \"id\": \"queued\",\n      \"label\": \"Queued\"\n    },\n    {\n      \"id\": \"active\",\n      \"label\": \"Active\"\n    },\n    {\n      \"id\": \"review\",\n      \"label\": \"In review\"\n    },\n    {\n      \"id\": \"done\",\n      \"label\": \"Done\"\n    }\n  ],\n  \"records\": [\n    {\n      \"id\": \"r1\",\n      \"name\": \"Record 0001\",\n      \"state\": \"done\",\n      \"time\": \"09:02\",\n      \"by\": \"coordinator\"\n    },\n    {\n      \"id\": \"r2\",\n      \"name\": \"Record 0002\",\n      \"state\": \"active\",\n      \"time\": \"09:11\",\n      \"by\": \"operator\"\n    },\n    {\n      \"id\": \"r3\",\n      \"name\": \"Record 0003\",\n      \"state\": \"review\",\n      \"time\": \"09:18\",\n      \"by\": \"reviewer\"\n    },\n    {\n      \"id\": \"r4\",\n      \"name\": \"Record 0004\",\n      \"state\": \"queued\",\n      \"time\": \"09:24\",\n      \"by\": \"system\"\n    },\n    {\n      \"id\": \"r5\",\n      \"name\": \"Record 0005\",\n      \"state\": \"active\",\n      \"time\": \"09:31\",\n      \"by\": \"operator\"\n    },\n    {\n      \"id\": \"r6\",\n      \"name\": \"Record 0006\",\n      \"state\": \"done\",\n      \"time\": \"09:37\",\n      \"by\": \"coordinator\"\n    },\n    {\n      \"id\": \"r7\",\n      \"name\": \"Record 0007\",\n      \"state\": \"review\",\n      \"time\": \"09:44\",\n      \"by\": \"reviewer\"\n    },\n    {\n      \"id\": \"r8\",\n      \"name\": \"Record 0008\",\n      \"state\": \"active\",\n      \"time\": \"09:52\",\n      \"by\": \"operator\"\n    }\n  ],\n  \"views\": [\n    {\n      \"id\": \"status\",\n      \"label\": \"Status\",\n      \"note\": \"Where each record sits and what state it is in, so the underlying record is easy to inspect.\"\n    },\n    {\n      \"id\": \"logs\",\n      \"label\": \"Logs\",\n      \"note\": \"The events people need to investigate, each with an actor and a time.\"\n    },\n    {\n      \"id\": \"reporting\",\n      \"label\": \"Reporting\",\n      \"note\": \"Records aggregated for a decision. A real report would also show the data window and when it was refreshed.\"\n    },\n    {\n      \"id\": \"query\",\n      \"label\": \"Query\",\n      \"note\": \"A lookup shaped by intent. In a real system, permission checks run before any result is returned.\"\n    }\n  ],\n  \"note\": \"The records are synthetic. They illustrate surface types and make no claim about any real data or system.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"viewShift\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
