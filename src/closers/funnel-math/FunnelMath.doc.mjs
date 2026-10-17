/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Every step between a first look and a confirmed purchase takes some people away. Set how many carry on at each step (your numbers, invented here) and watch the product of them; then take a step away and see what it is worth.",
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
      "name": "steps",
      "type": "Array<{ id: string; name: string; rate: number }>",
      "description": "Host-supplied steps; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"funnelMath\",\n  \"anchor\": \"funnel\",\n  \"scene\": \"data-stream-ribbons\",\n  \"tag\": \"End of the customer product\",\n  \"minHeight\": 720,\n  \"title\": \"Every step has a price.\",\n  \"lede\": \"Every step between a first look and a confirmed purchase takes some people away. Set how many carry on at each step (the numbers start invented) and watch the losses multiply; then take a step away and see what it was worth.\",\n  \"steps\": [\n    {\n      \"id\": \"browse\",\n      \"name\": \"Browse\",\n      \"rate\": 90\n    },\n    {\n      \"id\": \"product\",\n      \"name\": \"Look at a product\",\n      \"rate\": 85\n    },\n    {\n      \"id\": \"basket\",\n      \"name\": \"Add to the basket\",\n      \"rate\": 80\n    },\n    {\n      \"id\": \"details\",\n      \"name\": \"Enter details\",\n      \"rate\": 75\n    },\n    {\n      \"id\": \"confirm\",\n      \"name\": \"Confirm the purchase\",\n      \"rate\": 90\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Commerce infrastructure\",\n      \"to\": \"/systems/commerce-infrastructure\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"funnelMath\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
