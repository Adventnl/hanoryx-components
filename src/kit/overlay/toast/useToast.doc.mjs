export const docs = {
  "origin": "new",
  "summary": "The ToastProvider push function for timed notifications.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "The ToastProvider push function for timed notifications.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useToast } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst toast = useToast();\n// In a ToastProvider event handler: toast({ title: 'Saved', tone: 'success' });"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
