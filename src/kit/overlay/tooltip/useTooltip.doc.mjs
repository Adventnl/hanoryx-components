export const docs = {
  "origin": "new",
  "summary": "Delayed hover and focus tooltip bindings with Escape dismissal and timer cleanup.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Delayed hover and focus tooltip bindings with Escape dismissal and timer cleanup.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useTooltip } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { open, triggerProps, tooltipProps } = useTooltip({ delay: 300 });"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
