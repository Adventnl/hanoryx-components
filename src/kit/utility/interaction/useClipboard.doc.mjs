export const docs = {
  "origin": "new",
  "summary": "An asynchronous clipboard copy action with idle, copied and error states.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "An asynchronous clipboard copy action with idle, copied and error states.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useClipboard } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { copy, status, error } = useClipboard();\n// In an event handler: await copy('Project link');"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
