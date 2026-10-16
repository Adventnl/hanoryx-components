/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The site's own toolchain as a row of switches. Every stage guards against a kind of problem; switch one off and the ring drops and the problem it would have caught is listed as \"could slip through\".",
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
      "type": "Array<{ id: string; title: string; command: string; glyph: string; checks: string; slips: string }>",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"toolchainMap\",\n  \"anchor\": \"toolchain\",\n  \"railLabel\": \"The toolchain\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"The toolchain\",\n  \"title\": \"Five checks. Switch one off.\",\n  \"intro\": \"Each stage guards against a kind of problem. Turn one off and the ring drops, and the problem it would have caught is listed.\",\n  \"stages\": [\n    {\n      \"id\": \"lint\",\n      \"title\": \"Lint\",\n      \"command\": \"npm run lint\",\n      \"glyph\": \"lens\",\n      \"checks\": \"Static analysis with React hooks rules.\",\n      \"slips\": \"A stale hook or an unsafe effect reaches the browser as a subtle bug.\"\n    },\n    {\n      \"id\": \"build\",\n      \"title\": \"Build\",\n      \"command\": \"npm run build\",\n      \"glyph\": \"stack\",\n      \"checks\": \"Vite bundles the routes into lazy chunks and writes the sitemap.\",\n      \"slips\": \"A broken import or an oversized chunk is only found once the site is being served.\"\n    },\n    {\n      \"id\": \"scenes\",\n      \"title\": \"Scene smoke\",\n      \"command\": \"node qa/scene-smoke.mjs\",\n      \"glyph\": \"wave\",\n      \"checks\": \"Imports every Canvas scene and exercises its draw calls on a mock 2D context.\",\n      \"slips\": \"A background that throws on draw is only found by looking at the page.\"\n    },\n    {\n      \"id\": \"routes\",\n      \"title\": \"Route checks\",\n      \"command\": \"node qa/website-smoke.mjs\",\n      \"glyph\": \"compass\",\n      \"checks\": \"Visits every route at phone and desktop widths and looks for errors, dead links and sideways scroll.\",\n      \"slips\": \"A dead link, a console error or a horizontal scroll on a small screen goes out unseen.\"\n    },\n    {\n      \"id\": \"inventory\",\n      \"title\": \"Foreground inventory\",\n      \"command\": \"node qa/foreground-inventory.mjs\",\n      \"glyph\": \"grid\",\n      \"checks\": \"Counts the marked foreground details that actually render on each route.\",\n      \"slips\": \"A page quietly goes back to being static text and nobody notices.\"\n    }\n  ],\n  \"note\": \"The commands are the ones used on this site. The “could slip through” lines describe why each check exists, not a record of past failures.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"toolchainMap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
