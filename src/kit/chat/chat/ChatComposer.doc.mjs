export const docs = {
  "origin": "new",
  "summary": "A controlled or uncontrolled composer. Sending calls the host; no request is made here.",
  "props": [
    {
      "name": "children",
      "type": "ReactNode",
      "description": "Content rendered in this part."
    },
    {
      "name": "value",
      "type": "see notes",
      "description": "Controlled value. Pair it with onChange; omit it to use defaultValue."
    },
    {
      "name": "defaultValue",
      "type": "see notes",
      "description": "Initial value for uncontrolled usage. Subsequent changes to defaultValue do not reset state."
    },
    {
      "name": "onChange",
      "type": "function",
      "description": "Reports the next value; native date/time fields instead report the native input change event."
    },
    {
      "name": "onSend",
      "type": "(text: string) => void | Promise<void>",
      "description": "Called once per submission. A rejected promise displays its message and preserves the draft."
    },
    {
      "name": "disabled",
      "type": "boolean",
      "description": "Disables editing and activation."
    },
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    },
    {
      "name": "clearOnSend"
    }
  ],
  "notes": [
    "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
    "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
    "The input is disabled while sending. onSend must resolve after the host accepts the message; clearOnSend defaults to true."
  ],
  "sizing": {
    "rules": [
      "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
      "Transcript and composer parts are measured in a complete conversation context."
    ]
  },
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Move between composer input, disclosures and buttons."
    },
    {
      "key": "Enter / Space",
      "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
    }
  ],
  "subcomponents": {
    "ChatComposerInput": {
      "origin": "new",
      "summary": "A labelled textarea connected to its ChatComposer draft, pending state and error description.",
      "props": [
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "placeholder"
        },
        {
          "name": "rows",
          "type": "number | object[]",
          "description": "Editor line count, textarea line count, or table input rows as appropriate to this entry."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures."
      ],
      "sizing": {
        "rules": [
          "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
          "Transcript and composer parts are measured in a complete conversation context."
        ]
      },
      "keyboard": [
        {
          "key": "Tab / Shift+Tab",
          "does": "Move between composer input, disclosures and buttons."
        },
        {
          "key": "Enter / Space",
          "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
        }
      ]
    },
    "ChatSendButton": {
      "origin": "new",
      "summary": "The composer submit button; disabled while sending or when the draft is empty.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures."
      ],
      "sizing": {
        "rules": [
          "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
          "Transcript and composer parts are measured in a complete conversation context."
        ]
      },
      "keyboard": [
        {
          "key": "Tab / Shift+Tab",
          "does": "Move between composer input, disclosures and buttons."
        },
        {
          "key": "Enter / Space",
          "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
        }
      ]
    },
    "ChatComposerDrawer": {
      "origin": "new",
      "summary": "A native disclosure for composer attachments and tools.",
      "props": [
        {
          "name": "title"
        },
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures."
      ],
      "sizing": {
        "rules": [
          "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
          "Transcript and composer parts are measured in a complete conversation context."
        ]
      },
      "keyboard": [
        {
          "key": "Tab / Shift+Tab",
          "does": "Move between composer input, disclosures and buttons."
        },
        {
          "key": "Enter / Space",
          "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
        }
      ]
    }
  }
};
