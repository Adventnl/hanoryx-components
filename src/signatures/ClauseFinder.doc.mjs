/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Plain-language clauses you can filter. Type to narrow, pick a topic, open a clause. The one-line gist sits under every title so the list can be read without opening anything.",
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
      "name": "topics",
      "type": "Array<string>",
      "description": "Host-supplied topics; see the complete working data example below."
    },
    {
      "name": "clauses",
      "type": "Array<{ id: string; meta: string; topic: string; title: string; gist: string; body: Array<string> }>",
      "description": "Host-supplied clauses; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"clauseFinder\",\n  \"anchor\": \"clauses\",\n  \"railLabel\": \"The clauses\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"The clauses\",\n  \"title\": \"Eight short clauses.\",\n  \"intro\": \"Each has a one-line gist you can read without opening anything.\",\n  \"topics\": [\n    \"All\",\n    \"Use\",\n    \"Content\",\n    \"Limits\"\n  ],\n  \"clauses\": [\n    {\n      \"id\": \"what\",\n      \"meta\": \"T.01\",\n      \"topic\": \"Use\",\n      \"title\": \"What this site is\",\n      \"gist\": \"Information about the company and its work.\",\n      \"body\": [\n        \"This website presents Hanoryx Systems and its work. It is provided for information, and it is not a service you sign up for.\",\n        \"The work is described in general terms. Some details are left out deliberately.\"\n      ]\n    },\n    {\n      \"id\": \"offer\",\n      \"meta\": \"T.02\",\n      \"topic\": \"Use\",\n      \"title\": \"Nothing here is an offer\",\n      \"gist\": \"Descriptions are not quotations or promises.\",\n      \"body\": \"Descriptions of work, capabilities and design models are not an offer, a quotation or a guarantee. Any work between a visitor and the company would be agreed separately, in writing.\"\n    },\n    {\n      \"id\": \"illustrations\",\n      \"meta\": \"T.03\",\n      \"topic\": \"Content\",\n      \"title\": \"Models and demos are illustrations\",\n      \"gist\": \"Diagrams, demos and sample records are not real systems.\",\n      \"body\": \"Interactive diagrams, demos and sample records on this site illustrate an approach. They are not real systems, real data or measurements, and nothing in them should be relied on as such.\"\n    },\n    {\n      \"id\": \"names\",\n      \"meta\": \"T.04\",\n      \"topic\": \"Content\",\n      \"title\": \"Names and marks\",\n      \"gist\": \"Names identify the company and its work.\",\n      \"body\": \"Hanoryx Systems, Hanoryx North, Musebase and YK Engine identify the company and its work. Other names mentioned belong to their owners.\"\n    },\n    {\n      \"id\": \"material\",\n      \"meta\": \"T.05\",\n      \"topic\": \"Content\",\n      \"title\": \"The site’s own material\",\n      \"gist\": \"The text, design and code are the company’s.\",\n      \"body\": \"The text, design and code of this site belong to Hanoryx Systems unless something says otherwise. If you would like to reuse any of it, ask first through the contact page.\"\n    },\n    {\n      \"id\": \"external\",\n      \"meta\": \"T.06\",\n      \"topic\": \"Limits\",\n      \"title\": \"Other services\",\n      \"gist\": \"Fonts come from a third party.\",\n      \"body\": \"The site loads its typefaces from Google Fonts. That service is outside the company’s control and has its own terms. The privacy page explains what this involves.\"\n    },\n    {\n      \"id\": \"accuracy\",\n      \"meta\": \"T.07\",\n      \"topic\": \"Limits\",\n      \"title\": \"Accuracy and availability\",\n      \"gist\": \"Provided as it is, and it may change.\",\n      \"body\": \"The site is provided as it is. Content may be out of date, may contain mistakes, and may change or disappear without notice. If you spot something wrong, please say so through the contact page.\"\n    },\n    {\n      \"id\": \"changes\",\n      \"meta\": \"T.08\",\n      \"topic\": \"Limits\",\n      \"title\": \"Changes to these terms\",\n      \"gist\": \"The version here is the current one.\",\n      \"body\": \"These terms may change. The version on this page is the current one.\"\n    }\n  ],\n  \"note\": \"A plain-language summary written for this site. It is not legal advice.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"clauseFinder\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
