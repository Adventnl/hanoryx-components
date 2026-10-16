/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "Composable conversation regions, transcript items and a message composer with asynchronous send handling.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
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
  ],
  "subcomponents": {
    "ChatLayout": {
      "origin": "new",
      "summary": "A bounded conversation viewport with a separate composer slot.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "composer"
        },
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "maxHeight"
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
    "ChatLayoutScrollButton": {
      "origin": "new",
      "summary": "Scroll the supplied message-list ref to its latest message without moving focus.",
      "props": [
        {
          "name": "targetRef"
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
    },
    "ChatMessageList": {
      "origin": "new",
      "summary": "An ordered transcript. Announcements are opt-in to avoid rereading history.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "announce"
        },
        {
          "name": "ref"
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
        "Use ChatMessage and ChatSystemMessage as direct list children. announce defaults to false; enable it only for new live messages."
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
    "ChatMessage": {
      "origin": "new",
      "summary": "One transcript item; author names are visible, and role is never only a colour.",
      "props": [
        {
          "name": "author"
        },
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "metadata"
        },
        {
          "name": "role",
          "type": "'user' | 'assistant' | 'system'",
          "description": "Speaker identity used for layout, separate from the HTML/ARIA role."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
        "Must be inside ChatMessageList. author is visible; metadata accepts ChatMessageMetadata."
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
    "ChatMessageBubble": {
      "origin": "new",
      "summary": "",
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
    "ChatMessageMetadata": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "dateTime"
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
    "ChatSystemMessage": {
      "origin": "new",
      "summary": "",
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
    "ChatToolCalls": {
      "origin": "new",
      "summary": "Tool calls stay inspectable as native disclosures; arguments are rendered as text.",
      "props": [
        {
          "name": "calls",
          "type": "Array<{id: string, name: string, status: string, arguments?: unknown, output?: unknown}>",
          "description": "Host-supplied tool execution records. Text is escaped; no tool executes in this component."
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
    "ChatComposer": {
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
      ]
    },
    "ChatComposerInput": {
      "origin": "new",
      "summary": "",
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
      "summary": "",
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
      "summary": "",
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
    },
    "ChatComposerTokenElement": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "onRemove"
        },
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
        "Supply label when children is not text, so the remove button has a meaningful accessible name."
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
    "ChatDictationButton": {
      "origin": "new",
      "summary": "Dictation is supplied by the host so browser support and consent remain explicit.",
      "props": [
        {
          "name": "active"
        },
        {
          "name": "onToggle"
        },
        {
          "name": "disabled",
          "type": "boolean",
          "description": "Disables editing and activation."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
        "Requires a host onToggle callback. This component does not request microphone access or implement speech recognition."
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
    "ChatTokenizedText": {
      "origin": "new",
      "summary": "Render tokenized text safely as React text; tokens can carry a visible label.",
      "props": [
        {
          "name": "tokens"
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
