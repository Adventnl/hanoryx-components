/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Everything someone writing about the company needs to get it right: the company in three lengths (each one copies in a press), a fact sheet where every line copies, and the mark in the files the site itself uses.",
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
      "name": "boilerplates",
      "type": "Array<{ id: string; label: string; text: string }>",
      "description": "Host-supplied boilerplates; see the complete working data example below."
    },
    {
      "name": "facts",
      "type": "Array<{ k: string; v: string }>",
      "description": "Host-supplied facts; see the complete working data example below."
    },
    {
      "name": "assets",
      "type": "Array<{ id: string; name: string; file: string; note: string }>",
      "description": "Host-supplied assets; see the complete working data example below."
    },
    {
      "name": "rules",
      "type": "Array<string>",
      "description": "Host-supplied rules; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"pressKit\",\n  \"anchor\": \"kit\",\n  \"railLabel\": \"The kit\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"The kit\",\n  \"title\": \"Description, facts, and the mark.\",\n  \"intro\": \"Pick a length, copy it, and use it as written. The company publishes no client names, dates or measured results, so please do not add any.\",\n  \"boilerplates\": [\n    {\n      \"id\": \"short\",\n      \"label\": \"Short\",\n      \"text\": \"Hanoryx Systems designs and builds online systems, software platforms and the interfaces people use to work in them. Its development team is Hanoryx North.\"\n    },\n    {\n      \"id\": \"medium\",\n      \"label\": \"Medium\",\n      \"text\": \"Hanoryx Systems designs and builds online systems, software platforms and the interfaces people use to work in them. Its development team is Hanoryx North. The company’s work includes Musebase, a coordination application, and YK Engine, a proprietary 2D engine with an editor, a standalone player and project export tooling. Most of its work is described in general terms, because some of it is internal.\"\n    },\n    {\n      \"id\": \"long\",\n      \"label\": \"Long\",\n      \"text\": \"Hanoryx Systems designs and builds online systems, software platforms and the interfaces people use to work in them. Its development team is Hanoryx North. The company’s work includes Musebase, a coordination application, and YK Engine, a proprietary 2D engine with an editor, a standalone player and project export tooling. Most of its work is described in general terms, because some of it is internal. The company holds itself to six principles that settle recurring tensions, among them controlled complexity, interfaces before noise and motion with purpose, and it approaches security by starting at the boundary: who can act, what each role can reach, and where each record lives. It publishes no client names, dates or measured results.\"\n    }\n  ],\n  \"facts\": [\n    {\n      \"k\": \"Name\",\n      \"v\": \"Hanoryx Systems\"\n    },\n    {\n      \"k\": \"Short name\",\n      \"v\": \"Hanoryx\"\n    },\n    {\n      \"k\": \"Development team\",\n      \"v\": \"Hanoryx North\"\n    },\n    {\n      \"k\": \"Kind\",\n      \"v\": \"Systems company\"\n    },\n    {\n      \"k\": \"Builds\",\n      \"v\": \"Online systems, software platforms, interfaces\"\n    },\n    {\n      \"k\": \"Work shown\",\n      \"v\": \"Musebase, YK Engine, a customer-facing product, an internal data system\"\n    },\n    {\n      \"k\": \"Public code\",\n      \"v\": \"YK Engine, on GitHub\"\n    },\n    {\n      \"k\": \"Website\",\n      \"v\": \"hanoryx.com\"\n    },\n    {\n      \"k\": \"Contact\",\n      \"v\": \"Through the contact page\"\n    }\n  ],\n  \"assets\": [\n    {\n      \"id\": \"svg\",\n      \"name\": \"The mark, as SVG\",\n      \"file\": \"/favicon.svg\",\n      \"note\": \"Vector. The same artwork as the logo in the navigation bar.\"\n    },\n    {\n      \"id\": \"png\",\n      \"name\": \"The mark, as PNG\",\n      \"file\": \"/icon-512.png\",\n      \"note\": \"512 pixels square. For slides and listings.\"\n    },\n    {\n      \"id\": \"og\",\n      \"name\": \"The share image\",\n      \"file\": \"/og-image.png\",\n      \"note\": \"The card shown when a link to the site is shared.\"\n    }\n  ],\n  \"rules\": [\n    \"Write the name as “Hanoryx Systems” on first mention and “Hanoryx” after that.\",\n    \"Call the development team “Hanoryx North”.\",\n    \"Use the descriptions as written. The company names no clients and quotes no results, so please do not add any.\",\n    \"Show the mark square, unaltered, on a dark ground. The brand page has the details.\",\n    \"Quote briefly and link back; for anything more, ask first. The copyright notice explains.\"\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"pressKit\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
