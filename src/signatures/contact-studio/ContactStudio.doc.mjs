/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The contact page's one composition. Choose what the message is about, write it (a starter line can be dropped in for you), watch the envelope fill in, then either open it in your own mail app or copy the address.",
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
      "name": "types",
      "type": "Array<{ id: string; code: string; title: string; body: string; glyph: string; subject: string; starters: Array<string> }>",
      "description": "Host-supplied types; see the complete working data example below."
    },
    {
      "name": "email",
      "type": "string",
      "description": "Host-supplied email; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"contactStudio\",\n  \"anchor\": \"compose\",\n  \"railLabel\": \"Compose\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Compose a message\",\n  \"title\": \"Start with what it is about.\",\n  \"intro\": \"Nothing is sent from this page: it prepares a message for your own mail app, and you decide whether to send it.\",\n  \"email\": \"contact@hanoryx.com\",\n  \"types\": [\n    {\n      \"id\": \"systems\",\n      \"code\": \"INQ.01\",\n      \"title\": \"Systems & platforms\",\n      \"body\": \"Operational management layers, internal platforms and digital operating environments.\",\n      \"glyph\": \"stack\",\n      \"subject\": \"Systems & platforms\",\n      \"starters\": [\n        \"We run an operation that needs…\",\n        \"We are replacing a set of tools with…\",\n        \"The hardest part is…\"\n      ]\n    },\n    {\n      \"id\": \"interface\",\n      \"code\": \"INQ.02\",\n      \"title\": \"Interface engineering\",\n      \"body\": \"Interface systems, dashboards, client-facing portals and interaction design.\",\n      \"glyph\": \"layers\",\n      \"subject\": \"Interface engineering\",\n      \"starters\": [\n        \"The people who will use this are…\",\n        \"The screen that matters most is…\",\n        \"Right now it feels…\"\n      ]\n    },\n    {\n      \"id\": \"automation\",\n      \"code\": \"INQ.03\",\n      \"title\": \"Automation & tooling\",\n      \"body\": \"Workflow orchestration, internal tooling and operational automation.\",\n      \"glyph\": \"loop\",\n      \"subject\": \"Automation & tooling\",\n      \"starters\": [\n        \"A task we repeat every…\",\n        \"It goes wrong when…\",\n        \"The people involved are…\"\n      ]\n    },\n    {\n      \"id\": \"research\",\n      \"code\": \"INQ.04\",\n      \"title\": \"Research collaboration\",\n      \"body\": \"Experimental online systems and early-stage interface programs.\",\n      \"glyph\": \"lens\",\n      \"subject\": \"Research collaboration\",\n      \"starters\": [\n        \"The question we want to explore is…\",\n        \"What we have so far is…\"\n      ]\n    },\n    {\n      \"id\": \"careers\",\n      \"code\": \"INQ.05\",\n      \"title\": \"Careers\",\n      \"body\": \"Introduce yourself. No roles are listed, and introductions are welcome.\",\n      \"glyph\": \"people\",\n      \"subject\": \"Introduction\",\n      \"starters\": [\n        \"I build…\",\n        \"The area closest to my work is…\",\n        \"Something I made that I am proud of:\"\n      ]\n    },\n    {\n      \"id\": \"feedback\",\n      \"code\": \"INQ.06\",\n      \"title\": \"Feedback & problems\",\n      \"body\": \"A mistake, something hard to use, a question about privacy, or a complaint about this site.\",\n      \"glyph\": \"compass\",\n      \"subject\": \"Feedback about the site\",\n      \"starters\": [\n        \"The page is…\",\n        \"I could not…\",\n        \"I think this is wrong because…\"\n      ]\n    }\n  ],\n  \"note\": \"Long messages may not fit in a mail link. If yours is long, copy the address and paste the message into your mail app instead.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"contactStudio\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
