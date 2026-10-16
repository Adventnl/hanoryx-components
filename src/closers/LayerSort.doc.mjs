/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Where does it belong? Eight small responsibilities, four layers. Put each in the layer you would give it, then check against the reasoning. There is rarely one possible answer; the point is to say why.",
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
      "name": "layers",
      "type": "Array<{ id: string; name: string; blurb: string }>",
      "description": "Host-supplied layers; see the complete working data example below."
    },
    {
      "name": "items",
      "type": "Array<{ id: string; text: string; layer: string; why: string }>",
      "description": "Host-supplied items; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"layerSort\",\n  \"anchor\": \"sort\",\n  \"scene\": \"secure-boundary\",\n  \"tag\": \"End of architecture\",\n  \"minHeight\": 780,\n  \"title\": \"Where does it belong?\",\n  \"lede\": \"Eight small responsibilities and four layers. Put each in the layer you would give it, then check against the reasoning. There is rarely only one possible answer; the point is to say why.\",\n  \"layers\": [\n    {\n      \"id\": \"interface\",\n      \"name\": \"Interface\",\n      \"blurb\": \"Shows things and takes input. Presentation, and nothing that has to be true.\"\n    },\n    {\n      \"id\": \"surface\",\n      \"name\": \"Service surface\",\n      \"blurb\": \"The typed contracts. Who may ask for what, and what shape the question and answer take.\"\n    },\n    {\n      \"id\": \"orchestration\",\n      \"name\": \"Orchestration\",\n      \"blurb\": \"Moves work between states: steps, retries, hand-offs, schedules.\"\n    },\n    {\n      \"id\": \"data\",\n      \"name\": \"Data core\",\n      \"blurb\": \"Owns the truth. One writer per record, with rules that cannot be bypassed.\"\n    }\n  ],\n  \"items\": [\n    {\n      \"id\": \"a\",\n      \"text\": \"Show a price with a currency symbol and two decimals\",\n      \"layer\": \"interface\",\n      \"why\": \"Presentation is the edge’s job. The data core stores an amount and a currency code, and every screen formats it for its reader.\"\n    },\n    {\n      \"id\": \"b\",\n      \"text\": \"Check that this person may issue a refund\",\n      \"layer\": \"surface\",\n      \"why\": \"Authorisation belongs at the boundary of the service, decided there for every request, so no path can skip it.\"\n    },\n    {\n      \"id\": \"c\",\n      \"text\": \"Move an order from paid to packed and tell the warehouse\",\n      \"layer\": \"orchestration\",\n      \"why\": \"Moving work between states, and telling other parts about it, is orchestration. State moves; it is not edited loosely.\"\n    },\n    {\n      \"id\": \"d\",\n      \"text\": \"Make sure two people cannot change one record at the same moment\",\n      \"layer\": \"data\",\n      \"why\": \"Only the layer that owns the record can guarantee this, with a transaction or a version check that cannot be bypassed.\"\n    },\n    {\n      \"id\": \"e\",\n      \"text\": \"Retry a failed email three times, then give up\",\n      \"layer\": \"orchestration\",\n      \"why\": \"Retries, back-off and the point of giving up are about the progress of work, not about data or screens.\"\n    },\n    {\n      \"id\": \"f\",\n      \"text\": \"Reject a request that is missing a field it promised to carry\",\n      \"layer\": \"surface\",\n      \"why\": \"The contract states the shape of a request. Enforcing it at the surface keeps bad input from travelling any further.\"\n    },\n    {\n      \"id\": \"g\",\n      \"text\": \"Remember that this order has been refunded\",\n      \"layer\": \"data\",\n      \"why\": \"A fact about the world is stored where truth lives, once. Everything else reads it.\"\n    },\n    {\n      \"id\": \"h\",\n      \"text\": \"Grey out the Refund button for people who cannot refund\",\n      \"layer\": \"interface\",\n      \"why\": \"A courtesy at the edge. The real check is at the surface, because anyone can send the request the button would have sent.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Roles, permissions and scopes\",\n      \"to\": \"/insights/permissions\"\n    },\n    {\n      \"label\": \"Security approach\",\n      \"to\": \"/company/security\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"layerSort\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
