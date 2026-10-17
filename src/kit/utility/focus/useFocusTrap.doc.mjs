export const docs = {
  "origin": "new",
  "summary": "A root ref that traps Tab within enabled, visible descendants and restores prior focus on cleanup.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "A root ref that traps Tab within enabled, visible descendants and restores prior focus on cleanup.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useFocusTrap } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst ref = useFocusTrap(dialogOpen); // attach to the focusable dialog root"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
