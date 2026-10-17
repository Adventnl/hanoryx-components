/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The two weeks around a launch, as a track you walk along: what to do at each stop, with the items you can tick and a ring that fills. Arrow keys move between stops. Nothing is saved.",
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
      "name": "stops",
      "type": "Array<{ id: string; when: string; title: string; items: Array<string> }>",
      "description": "Host-supplied stops; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"launchTimeline\",\n  \"anchor\": \"launch\",\n  \"scene\": \"workflow-river\",\n  \"tag\": \"End of the readiness check\",\n  \"minHeight\": 640,\n  \"title\": \"The launch fortnight.\",\n  \"lede\": \"Seven stops from two weeks before to a week after. Walk along the track, tick what you have done at each stop, and watch the ring fill. The arrow keys move between stops.\",\n  \"stops\": [\n    {\n      \"id\": \"m14\",\n      \"when\": \"T − 14\",\n      \"title\": \"Two weeks out: decide, and find the gaps\",\n      \"items\": [\n        \"Name the person who decides go or no-go\",\n        \"Run the readiness check and write down the gaps\",\n        \"Rehearse a restore of the backup, and time it\"\n      ]\n    },\n    {\n      \"id\": \"m7\",\n      \"when\": \"T − 7\",\n      \"title\": \"A week out: test the riskiest path\",\n      \"items\": [\n        \"Walk the riskiest path from end to end\",\n        \"Have someone who did not write them follow the runbooks\",\n        \"Confirm who is on call, and how they are reached\"\n      ]\n    },\n    {\n      \"id\": \"m3\",\n      \"when\": \"T − 3\",\n      \"title\": \"Three days out: freeze and rehearse\",\n      \"items\": [\n        \"Freeze changes that are not needed for the launch\",\n        \"Break something on purpose, to see that monitoring notices\",\n        \"Tell the people who will be affected, and when\"\n      ]\n    },\n    {\n      \"id\": \"m1\",\n      \"when\": \"T − 1\",\n      \"title\": \"The day before: confirm the way back\",\n      \"items\": [\n        \"Confirm the rollback, and who may call it\",\n        \"Check capacity against the load you expect\",\n        \"Agree the plan for the first hour\"\n      ]\n    },\n    {\n      \"id\": \"d0\",\n      \"when\": \"Launch\",\n      \"title\": \"Launch day: release quietly, watch together\",\n      \"items\": [\n        \"Release in a quiet hour, not a busy one\",\n        \"Watch the first-hour graphs together\",\n        \"Write down anything odd as it happens\"\n      ]\n    },\n    {\n      \"id\": \"p1\",\n      \"when\": \"T + 1\",\n      \"title\": \"The day after: review and mend\",\n      \"items\": [\n        \"Read the overnight alerts\",\n        \"Fix the small things while the memory is fresh\",\n        \"Thank the people who stayed up\"\n      ]\n    },\n    {\n      \"id\": \"p7\",\n      \"when\": \"T + 7\",\n      \"title\": \"A week after: learn from it\",\n      \"items\": [\n        \"Hold a blameless review\",\n        \"Update the runbooks with what you learned\",\n        \"Decide what to leave alone\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    },\n    {\n      \"label\": \"Runbooks people actually use\",\n      \"to\": \"/insights/runbooks\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"launchTimeline\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
