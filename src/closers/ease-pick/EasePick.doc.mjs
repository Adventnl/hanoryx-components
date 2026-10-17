/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The same menu opening, four times, each on a different easing. Pick the one that feels right, then see what the rule of thumb says — and why.",
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
      "name": "options",
      "type": "Array<{ id: string; label: string; css: string }>",
      "description": "Host-supplied options; see the complete working data example below."
    },
    {
      "name": "answer",
      "type": "string",
      "description": "Host-supplied answer; see the complete working data example below."
    },
    {
      "name": "why",
      "type": "string",
      "description": "Host-supplied why; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"easePick\",\n  \"anchor\": \"ease\",\n  \"scene\": \"spline-ribbon\",\n  \"tag\": \"End of animation budgets\",\n  \"minHeight\": 620,\n  \"title\": \"Open the menu four ways.\",\n  \"lede\": \"The same menu, opening on four different curves. Pick the one that feels right, then compare it with the rule of thumb.\",\n  \"options\": [\n    {\n      \"id\": \"linear\",\n      \"label\": \"Linear\",\n      \"css\": \"linear\"\n    },\n    {\n      \"id\": \"in\",\n      \"label\": \"Ease-in\",\n      \"css\": \"cubic-bezier(0.4, 0, 1, 1)\"\n    },\n    {\n      \"id\": \"out\",\n      \"label\": \"Ease-out\",\n      \"css\": \"cubic-bezier(0, 0, 0.2, 1)\"\n    },\n    {\n      \"id\": \"inout\",\n      \"label\": \"Ease-in-out\",\n      \"css\": \"cubic-bezier(0.4, 0, 0.2, 1)\"\n    }\n  ],\n  \"answer\": \"out\",\n  \"why\": \"Something that appears in response to a press should start moving at once and settle gently. Ease-out feels immediate; ease-in makes the visitor wait for the movement to begin.\",\n  \"onward\": [\n    {\n      \"label\": \"Motion systems\",\n      \"to\": \"/north/motion-systems\"\n    },\n    {\n      \"label\": \"Accessibility statement\",\n      \"to\": \"/legal/accessibility\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"easePick\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
