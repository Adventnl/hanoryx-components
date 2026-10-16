/* Documentation for EmptyState. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "EmptyState",
  "area": "kit",
  "family": "feedback",
  "summary": "What a list or a page says when there is nothing in it: why it is empty, and the one thing to do next. An empty state with no way forward is a dead end.",
  "props": [
    {
      "name": "icon",
      "type": "component",
      "default": "Inbox",
      "description": "A lucide icon."
    },
    {
      "name": "title",
      "type": "string",
      "description": "A heading (level 3)."
    },
    {
      "name": "children",
      "type": "node",
      "description": "One or two sentences."
    },
    {
      "name": "action",
      "type": "node",
      "description": "The next step, usually a button."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "To the action."
    }
  ],
  "notes": [
    "Say why it is empty — “nothing yet” and “nothing matches your filter” need different words."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<EmptyState icon={CalendarX2} title=\"Nothing scheduled\" action={<button>Add the first one</button>}>When a job is scheduled it appears here.</EmptyState>"
    }
  ]
};
