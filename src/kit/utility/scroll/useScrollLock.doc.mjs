export const docs = {
  "origin": "new",
  "summary": "Locks document scrolling while active using the shared, nested-safe scroll lock.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "void",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useScrollLock } from 'hanoryx-components/kit';\n\n// Inside a React component:\nuseScrollLock(dialogOpen);"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
