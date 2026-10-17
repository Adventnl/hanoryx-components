export const docs = {
  "origin": "new",
  "summary": "Open state plus triggerProps and contentProps wired to one generated content id.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Open state plus triggerProps and contentProps wired to one generated content id.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useCollapsible } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { open, setOpen, triggerProps, contentProps } = useCollapsible({ defaultOpen: false });"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
