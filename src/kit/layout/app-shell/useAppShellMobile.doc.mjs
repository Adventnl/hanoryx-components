export const docs = {
  "origin": "new",
  "summary": "True when the viewport matches the app shell mobile breakpoint.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "True when the viewport matches the app shell mobile breakpoint.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useAppShellMobile } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst mobile = useAppShellMobile();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
