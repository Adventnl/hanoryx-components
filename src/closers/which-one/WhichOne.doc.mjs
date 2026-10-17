/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Three questions, one recommendation. Answer them about the job in front of you and the helper names the trigger that fits — and why the other two don't.",
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
      "name": "questions",
      "type": "Array<{ id: string; text: string; options: Array<string> }>",
      "description": "Host-supplied questions; see the complete working data example below."
    },
    {
      "name": "outcomes",
      "type": "{ 100: { name: string; why: string; watch: string }; 101: { name: string; why: string; watch: string }; 110: { name: string; why: string; watch: string }; 111: { name: string; why: string; watch: string }; 000: { name: string; why: string; watch: string }; 001: { name: string; why: string; watch: string }; 010: { name: string; why: string; watch: string }; 011: { name: string; why: string; watch: string }; default: { name: string; why: string; watch: string } }",
      "description": "Host-supplied outcomes; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"whichOne\",\n  \"anchor\": \"which\",\n  \"scene\": \"trigger-action-pulse\",\n  \"tag\": \"End of triggers\",\n  \"minHeight\": 640,\n  \"title\": \"Which one for this job?\",\n  \"lede\": \"Three questions about the job in front of you. The answer names the trigger that fits, and why the others do not.\",\n  \"questions\": [\n    {\n      \"id\": \"q1\",\n      \"text\": \"What starts the work?\",\n      \"options\": [\n        \"The time of day\",\n        \"Something that happened\"\n      ]\n    },\n    {\n      \"id\": \"q2\",\n      \"text\": \"Who needs to react?\",\n      \"options\": [\n        \"One known worker\",\n        \"Several, some not yet known\"\n      ]\n    },\n    {\n      \"id\": \"q3\",\n      \"text\": \"Can one item fail without the others?\",\n      \"options\": [\n        \"No — one run covers the lot\",\n        \"Yes — each item stands alone\"\n      ]\n    }\n  ],\n  \"outcomes\": {\n    \"100\": {\n      \"name\": \"A queue\",\n      \"why\": \"Something happened, one worker handles it, and one pass is enough. A queue smooths the burst and keeps the backlog visible.\",\n      \"watch\": \"The age of the oldest job, not only the count.\"\n    },\n    \"101\": {\n      \"name\": \"A queue with retries and a dead-letter queue\",\n      \"why\": \"Something happened and each item can fail alone. Give each job a limited number of attempts, then set it aside for a person.\",\n      \"watch\": \"A dead-letter queue nobody reads is just a bin.\"\n    },\n    \"110\": {\n      \"name\": \"Events\",\n      \"why\": \"A fact has occurred and several parts need to react, some not yet known. Publish it and let them subscribe.\",\n      \"watch\": \"The shape of the event is a contract. Version it.\"\n    },\n    \"111\": {\n      \"name\": \"Events, with a queue behind each consumer\",\n      \"why\": \"A fact, many consumers, and items that can fail alone. Publish the event; give each consumer a queue with its own retries.\",\n      \"watch\": \"Replays. Consumers must recognise an event they have already handled.\"\n    },\n    \"000\": {\n      \"name\": \"Cron\",\n      \"why\": \"The clock is the reason, one worker handles it, and one run covers the lot. This is what cron is for.\",\n      \"watch\": \"A cron job that silently stops. Add a heartbeat, and skip a run if the last one is still going.\"\n    },\n    \"001\": {\n      \"name\": \"Cron that feeds a queue\",\n      \"why\": \"The time starts it, but each item can fail alone. Let cron decide what is due and put one job per item on a queue.\",\n      \"watch\": \"Duplicates: a job can arrive twice. Record what is done in the same transaction as the effect.\"\n    },\n    \"010\": {\n      \"name\": \"Cron that publishes an event\",\n      \"why\": \"The clock starts it, but several parts of the system care. Have the schedule announce a fact, such as “day closed”, and let others react.\",\n      \"watch\": \"Consumers that miss the event. Watch each one’s lag.\"\n    },\n    \"011\": {\n      \"name\": \"A scheduled event, with a queue behind each consumer\",\n      \"why\": \"Time starts it, many react, and each item can fail alone. Publish on a schedule, and give each consumer its own queue.\",\n      \"watch\": \"A tangle. Name each event as a fact and give it an id.\"\n    },\n    \"default\": {\n      \"name\": \"A queue\",\n      \"why\": \"When in doubt, a queue is the most forgiving: it smooths bursts, retries one item at a time and shows its backlog.\",\n      \"watch\": \"Make the work safe to repeat.\"\n    }\n  },\n  \"onward\": [\n    {\n      \"label\": \"Idempotency in order systems\",\n      \"to\": \"/insights/idempotency\"\n    },\n    {\n      \"label\": \"APIs people can integrate against\",\n      \"to\": \"/insights/api-contracts\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"whichOne\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
