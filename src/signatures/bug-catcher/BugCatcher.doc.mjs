/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Which kind of check catches which kind of problem? Switch checks on and off and watch what slips through. The grid is a judgement, not a measurement: it records what experience says each kind of check is good at.",
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
      "name": "checks",
      "type": "Array<{ id: string; name: string; cost: string; blurb: string }>",
      "description": "Host-supplied checks; see the complete working data example below."
    },
    {
      "name": "problems",
      "type": "Array<{ id: string; text: string; catches: { static: number; unit: number; integration: number; e2e: number }; note: string }>",
      "description": "Host-supplied problems; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"bugCatcher\",\n  \"anchor\": \"grid\",\n  \"railLabel\": \"What catches what\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 800,\n  \"eyebrow\": \"What catches what\",\n  \"title\": \"Eight problems, six kinds of check.\",\n  \"intro\": \"Three checks start on. Turn others on and off, and point at a problem for the check that usually finds it.\",\n  \"checks\": [\n    {\n      \"id\": \"static\",\n      \"name\": \"Types and lint\",\n      \"cost\": \"seconds\",\n      \"blurb\": \"Reads the code without running it.\"\n    },\n    {\n      \"id\": \"unit\",\n      \"name\": \"Unit tests\",\n      \"cost\": \"seconds\",\n      \"blurb\": \"Runs small pieces of logic in isolation.\"\n    },\n    {\n      \"id\": \"integration\",\n      \"name\": \"Integration tests\",\n      \"cost\": \"minutes\",\n      \"blurb\": \"Runs several parts together, with a real database or interface.\"\n    },\n    {\n      \"id\": \"e2e\",\n      \"name\": \"End to end\",\n      \"cost\": \"minutes\",\n      \"blurb\": \"Drives the whole thing in a real browser.\"\n    },\n    {\n      \"id\": \"a11y\",\n      \"name\": \"Accessibility scan\",\n      \"cost\": \"minutes\",\n      \"blurb\": \"Tests pages against accessibility rules automatically.\"\n    },\n    {\n      \"id\": \"use\",\n      \"name\": \"Real use\",\n      \"cost\": \"hours\",\n      \"blurb\": \"A person using it, with a keyboard, a screen reader or a slow phone.\"\n    }\n  ],\n  \"problems\": [\n    {\n      \"id\": \"typo\",\n      \"text\": \"A misspelt variable, or a missing import\",\n      \"catches\": {\n        \"static\": 2,\n        \"unit\": 1,\n        \"integration\": 1,\n        \"e2e\": 1\n      },\n      \"note\": \"Static checks find these in seconds, before anything runs. It is the cheapest check there is.\"\n    },\n    {\n      \"id\": \"logic\",\n      \"text\": \"A calculation that is wrong for one input\",\n      \"catches\": {\n        \"unit\": 2,\n        \"integration\": 1,\n        \"use\": 1\n      },\n      \"note\": \"Unit tests are made for this: a small piece of logic, many inputs, exact answers.\"\n    },\n    {\n      \"id\": \"wiring\",\n      \"text\": \"Two parts that each work but do not fit together\",\n      \"catches\": {\n        \"integration\": 2,\n        \"e2e\": 2,\n        \"use\": 1\n      },\n      \"note\": \"Only tests that run the parts together can see this. Unit tests pass while the system fails.\"\n    },\n    {\n      \"id\": \"flow\",\n      \"text\": \"A button that does nothing in a real browser\",\n      \"catches\": {\n        \"e2e\": 2,\n        \"use\": 2,\n        \"integration\": 1\n      },\n      \"note\": \"The page loads and the code is fine, but the click never arrives. A browser test, or a person, finds it.\"\n    },\n    {\n      \"id\": \"name\",\n      \"text\": \"A control a screen reader cannot name\",\n      \"catches\": {\n        \"a11y\": 2,\n        \"use\": 2,\n        \"static\": 1\n      },\n      \"note\": \"Scans find missing names reliably. Whether the name makes sense takes a person.\"\n    },\n    {\n      \"id\": \"keyboard\",\n      \"text\": \"A menu that cannot be reached by keyboard\",\n      \"catches\": {\n        \"use\": 2,\n        \"e2e\": 1,\n        \"a11y\": 1\n      },\n      \"note\": \"Scans see only part of it. Walking through with the Tab key finds the rest.\"\n    },\n    {\n      \"id\": \"slow\",\n      \"text\": \"A page that crawls on a modest phone\",\n      \"catches\": {\n        \"use\": 2,\n        \"e2e\": 1\n      },\n      \"note\": \"A fast development machine hides this. Measure on the device your slowest visitors use.\"\n    },\n    {\n      \"id\": \"duplicate\",\n      \"text\": \"A request that is processed twice\",\n      \"catches\": {\n        \"integration\": 2,\n        \"unit\": 1,\n        \"use\": 1\n      },\n      \"note\": \"You have to send it twice, at the awkward moment, to see it. Few teams think to; the guide on idempotency explains how.\"\n    }\n  ],\n  \"note\": \"The grid records judgement, not measurement. It is what experience says each kind of check is good at, and it is not exhaustive.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"bugCatcher\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
