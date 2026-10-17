export const docs = {
  "origin": "new",
  "summary": "Headless popover open state with connected trigger and content bindings.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Headless popover open state with connected trigger and content bindings.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { usePopover } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { open, setOpen, triggerProps, contentProps } = usePopover();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
