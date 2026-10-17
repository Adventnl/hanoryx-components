export const docs = {
  "origin": "new",
  "summary": "State and dialogProps for showing a dialog from an event handler.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "State and dialogProps for showing a dialog from an event handler.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useImperativeDialog } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst dialog = useImperativeDialog();\n// On activation: dialog.show({ title: \"Project\" }); render <Dialog {...dialog.dialogProps} />."
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useImperativeAlertDialog": {
      "origin": "new",
      "summary": "The imperative dialog state hook, for use with AlertDialog.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "The imperative dialog state hook, for use with AlertDialog.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useImperativeAlertDialog } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst dialog = useImperativeAlertDialog();\n// Render <AlertDialog {...dialog.dialogProps} /> and call dialog.show(props) from an event."
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
