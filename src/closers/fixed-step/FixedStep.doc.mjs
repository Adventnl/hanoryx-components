/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Why a game engine does not simply use the time since the last frame. The same ball is dropped three ways: with a tiny step (the answer), with a fixed step that catches up however slowly frames arrive, and with whatever time the frame took.",
  "props": [
    {
      "name": "tag",
      "type": "string",
      "description": "Host-supplied tag; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "lede",
      "type": "string",
      "description": "Host-supplied lede; see the complete working data example below."
    },
    {
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"fixedStep\",\n  \"anchor\": \"step\",\n  \"scene\": \"isometric-infra\",\n  \"tag\": \"End of YK Engine\",\n  \"minHeight\": 660,\n  \"title\": \"Why engines fix the step.\",\n  \"lede\": \"The same ball dropped three ways: with a tiny step, with a fixed step that catches up however slowly frames arrive, and with whatever time the last frame took. An illustration of the idea, not the engine’s own code.\",\n  \"onward\": [\n    {\n      \"label\": \"The stack\",\n      \"to\": \"/north/stack\"\n    },\n    {\n      \"label\": \"Animation budgets\",\n      \"to\": \"/insights/animation-budgets\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"fixedStep\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
