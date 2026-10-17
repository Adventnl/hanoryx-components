/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A system's life as five stages, with an illustrative shape of the effort each asks for. Slide along it to see where you are and what the stage is mostly about.",
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
      "type": "Array<{ id: string; name: string; years: string; blurb: string; mostly: string; decisions: Array<string>; risks: Array<string>; effort: Array<number> }>",
      "description": "Host-supplied stages; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"lifecycleLine\",\n  \"anchor\": \"stages\",\n  \"railLabel\": \"The stages\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"The stages\",\n  \"title\": \"Shape, build, run, change, retire.\",\n  \"intro\": \"Choose a stage, or use the arrow keys. The chart marks where you are on an illustrative curve of effort over a system’s life.\",\n  \"stages\": [\n    {\n      \"id\": \"shape\",\n      \"name\": \"Shape\",\n      \"years\": \"Weeks\",\n      \"blurb\": \"Working out what the problem is, and whether software is the answer to it.\",\n      \"mostly\": \"Talking, drawing, and deciding what to leave out.\",\n      \"decisions\": [\n        \"Whether to build, buy or do nothing.\",\n        \"What is in the first version, and what is not.\"\n      ],\n      \"risks\": [\n        \"Building before the problem is clear.\",\n        \"Choosing a tool before the need.\"\n      ],\n      \"effort\": [\n        1,\n        1.5,\n        2,\n        2,\n        2,\n        2,\n        1.5,\n        1.5,\n        1,\n        1\n      ]\n    },\n    {\n      \"id\": \"build\",\n      \"name\": \"Build\",\n      \"years\": \"Months\",\n      \"blurb\": \"Making it real, in small pieces that run, in an order that tests the riskiest idea first.\",\n      \"mostly\": \"Building, testing, and showing working software early.\",\n      \"decisions\": [\n        \"What to reuse and what to write.\",\n        \"How it will be released, and how undone.\"\n      ],\n      \"risks\": [\n        \"Leaving operation to the end.\",\n        \"A big release with no way back.\"\n      ],\n      \"effort\": [\n        3,\n        5,\n        7,\n        8,\n        8,\n        8,\n        7,\n        6,\n        5,\n        5\n      ]\n    },\n    {\n      \"id\": \"run\",\n      \"name\": \"Run\",\n      \"years\": \"Years\",\n      \"blurb\": \"Keeping it healthy while people depend on it.\",\n      \"mostly\": \"Watching, patching, answering questions and making small fixes.\",\n      \"decisions\": [\n        \"Who is on call, and when.\",\n        \"What counts as an incident.\"\n      ],\n      \"risks\": [\n        \"Nobody owns it.\",\n        \"Dependencies quietly going out of date.\"\n      ],\n      \"effort\": [\n        4,\n        3,\n        3,\n        2.5,\n        2.5,\n        2.5,\n        2.5,\n        2.5,\n        2.5,\n        2.5\n      ]\n    },\n    {\n      \"id\": \"change\",\n      \"name\": \"Change\",\n      \"years\": \"Years\",\n      \"blurb\": \"Adding, adapting and removing as the work it supports changes.\",\n      \"mostly\": \"Careful modification of something people rely on.\",\n      \"decisions\": [\n        \"What to change, and what to leave alone.\",\n        \"When to tidy, and when to rebuild.\"\n      ],\n      \"risks\": [\n        \"Changes nobody understands.\",\n        \"Fear of touching it at all.\"\n      ],\n      \"effort\": [\n        2.5,\n        3,\n        3,\n        4,\n        3,\n        3,\n        4,\n        3,\n        3,\n        3.5\n      ]\n    },\n    {\n      \"id\": \"retire\",\n      \"name\": \"Retire\",\n      \"years\": \"Months\",\n      \"blurb\": \"Switching it off safely, and keeping what must be kept.\",\n      \"mostly\": \"Moving data, telling people, and turning things off one at a time.\",\n      \"decisions\": [\n        \"What data is kept, and for how long.\",\n        \"What replaces it, and when.\"\n      ],\n      \"risks\": [\n        \"Forgotten integrations that quietly stop working.\",\n        \"Data that can be neither recovered nor deleted.\"\n      ],\n      \"effort\": [\n        3,\n        4,\n        5,\n        6,\n        5,\n        4,\n        3,\n        2,\n        1,\n        1\n      ]\n    }\n  ],\n  \"note\": \"The curve is qualitative. It records which stages tend to be larger, not by how much, and every system differs.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"lifecycleLine\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
