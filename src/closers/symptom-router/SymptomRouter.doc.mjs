/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Start from what is going wrong, not from what the team is called. Choose the symptom closest to yours and the page names the discipline that deals with it, why, and where else to look.",
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
      "name": "symptoms",
      "type": "Array<{ id: string; label: string; area: string; why: string; to: string; also: { label: string; to: string } }>",
      "description": "Host-supplied symptoms; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"symptomRouter\",\n  \"anchor\": \"start\",\n  \"scene\": \"isometric-infra\",\n  \"tag\": \"End of development\",\n  \"minHeight\": 560,\n  \"title\": \"What is going wrong?\",\n  \"lede\": \"Start from the symptom, not from what the team is called. Choose the one that sounds most like yours and the page names the discipline that deals with it, and why.\",\n  \"symptoms\": [\n    {\n      \"id\": \"numbers\",\n      \"label\": \"The numbers disagree between screens\",\n      \"area\": \"Architecture\",\n      \"why\": \"Two places think they own the same fact. The fix is one source of truth per record and one writer, with everything else reading through a contract.\",\n      \"to\": \"/north/architecture\",\n      \"also\": {\n        \"label\": \"Roles, permissions and scopes\",\n        \"to\": \"/insights/permissions\"\n      }\n    },\n    {\n      \"id\": \"avoid\",\n      \"label\": \"People avoid using it\",\n      \"area\": \"The interface lab\",\n      \"why\": \"Usually the controls do not say what they are, what state they are in or what will happen. Components with a job, and every state shown, are the cure.\",\n      \"to\": \"/north/interface-lab\",\n      \"also\": {\n        \"label\": \"Accessible by default\",\n        \"to\": \"/north/accessibility\"\n      }\n    },\n    {\n      \"id\": \"laggy\",\n      \"label\": \"It feels laggy or jumpy\",\n      \"area\": \"Motion systems\",\n      \"why\": \"Something is spending more than its share of each frame. A motion budget says what can move, how much and on which property.\",\n      \"to\": \"/north/motion-systems\",\n      \"also\": {\n        \"label\": \"Animation budgets\",\n        \"to\": \"/insights/animation-budgets\"\n      }\n    },\n    {\n      \"id\": \"late\",\n      \"label\": \"It breaks, and we find out late\",\n      \"area\": \"Tooling and quality\",\n      \"why\": \"The checks are missing, or they are the wrong kind. Layer cheap fast checks in front of slow broad ones, and watch the quiet failures.\",\n      \"to\": \"/north/quality\",\n      \"also\": {\n        \"label\": \"Development tooling\",\n        \"to\": \"/north/tooling\"\n      }\n    },\n    {\n      \"id\": \"nodare\",\n      \"label\": \"Nobody dares change it\",\n      \"area\": \"Engineering\",\n      \"why\": \"Changes are too big to understand and too hard to undo. Small steps with gates between them make change safe again.\",\n      \"to\": \"/north/engineering\",\n      \"also\": {\n        \"label\": \"Engineering handbook\",\n        \"to\": \"/north/handbook\"\n      }\n    },\n    {\n      \"id\": \"slow\",\n      \"label\": \"It is slow to start\",\n      \"area\": \"The stack\",\n      \"why\": \"Too much is shipped before anything shows. Splitting by page and loading only what a page uses is a matter of structure, not tuning.\",\n      \"to\": \"/north/stack\",\n      \"also\": {\n        \"label\": \"Site engineering\",\n        \"to\": \"/engineering\"\n      }\n    },\n    {\n      \"id\": \"exclude\",\n      \"label\": \"Some people cannot use it\",\n      \"area\": \"Accessibility\",\n      \"why\": \"Structure, keyboard, contrast and choice. Look at the page the way a screen reader does, and fix what it meets.\",\n      \"to\": \"/north/accessibility\",\n      \"also\": {\n        \"label\": \"Contrast checker\",\n        \"to\": \"/resources/tools/contrast\"\n      }\n    },\n    {\n      \"id\": \"blind\",\n      \"label\": \"We cannot see what it is doing\",\n      \"area\": \"Site engineering\",\n      \"why\": \"There is no view of the layers. Tracing a page view through them, and measuring it, is how a team learns what its system is really doing.\",\n      \"to\": \"/engineering\",\n      \"also\": {\n        \"label\": \"Runbooks people actually use\",\n        \"to\": \"/insights/runbooks\"\n      }\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"The stack\",\n      \"to\": \"/north/stack\"\n    },\n    {\n      \"label\": \"Engineering handbook\",\n      \"to\": \"/north/handbook\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"symptomRouter\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
