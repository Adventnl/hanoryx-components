import { useRef, useState } from 'react';
import * as Kit from 'hanoryx-components/kit';

export function ChatDemo() {
  const [messages, setMessages] = useState([
    { id: 'welcome', text: 'What would you like to build?', author: 'Assistant' },
  ]);
  const list = useRef(null);
  const [hasContext, setHasContext] = useState(true);
  return (
    <Kit.Chat>
      <Kit.ChatLayout
        composer={
          <Kit.ChatComposer
            onSend={(text) =>
              setMessages((items) => [...items, { id: `message-${items.length}`, text, author: 'You' }])
            }
          >
            <Kit.ChatComposerInput />
            <Kit.ChatComposerDrawer>
              {hasContext && (
                <Kit.ChatComposerTokenElement label="Project context" onRemove={() => setHasContext(false)}>
                  Project context
                </Kit.ChatComposerTokenElement>
              )}
              <p>Dictation requires a speech provider supplied by the host app.</p>
            </Kit.ChatComposerDrawer>
            <Kit.ChatDictationButton disabled />
            <Kit.ChatSendButton />
          </Kit.ChatComposer>
        }
      >
        <Kit.ChatMessageList ref={list}>
          <Kit.ChatSystemMessage>Example conversation. Messages stay on this page.</Kit.ChatSystemMessage>
          {messages.map((m) => (
            <Kit.ChatMessage
              key={m.id}
              author={m.author}
              role={m.author === 'You' ? 'user' : 'assistant'}
              metadata={<Kit.ChatMessageMetadata>Just now</Kit.ChatMessageMetadata>}
            >
              <Kit.ChatMessageBubble>
                <Kit.ChatTokenizedText tokens={[m.text]} />
              </Kit.ChatMessageBubble>
            </Kit.ChatMessage>
          ))}
        </Kit.ChatMessageList>
        <Kit.ChatToolCalls
          calls={[
            {
              id: 'lookup',
              name: 'Library lookup',
              status: 'Complete',
              output: 'The library provides both application controls and standalone specimens.',
            },
          ]}
        />
        <Kit.ChatLayoutScrollButton targetRef={list} />
      </Kit.ChatLayout>
    </Kit.Chat>
  );
}

export function CalendarDemo() {
  const [value, setValue] = useState('2026-10-16');
  return (
    <Kit.Stack>
      <Kit.Calendar value={value} onChange={setValue} today="2026-10-16" />
      <output>Selected: {value}</output>
    </Kit.Stack>
  );
}

export function DateRangeDemo() {
  const [value, setValue] = useState({ start: '2026-10-16', end: '2026-10-20' });
  return <Kit.DateRangeInput value={value} onChange={setValue} />;
}

export function ResizableDemo() {
  return (
    <Kit.Resizable>
      <Kit.ResizablePanel label="Navigation">
        First panel. Drag the separator, or focus it and use the arrow keys.
      </Kit.ResizablePanel>
      <Kit.ResizeHandle />
      <Kit.ResizablePanel label="Content" side="end">
        Second panel. Home and End move to the permitted limits.
      </Kit.ResizablePanel>
    </Kit.Resizable>
  );
}

export function RichTextDemo() {
  const [value, setValue] = useState('<p>Select text to <strong>format</strong> it.</p>');
  return <Kit.RichTextEditor value={value} onChange={setValue} />;
}

const rows = [
  { id: 'a', name: 'Nightly export', runs: 12 },
  { id: 'b', name: 'Reminder emails', runs: 2 },
  { id: 'c', name: 'Archive records', runs: 48 },
];
const columns = [
  { key: 'name', label: 'Job' },
  { key: 'runs', label: 'Runs' },
];
export function TableDemo() {
  const sorted = Kit.useTableSortable(rows, columns);
  const selection = Kit.useTableSelection(rows);
  return (
    <Kit.Stack>
      <Kit.Table caption="Scheduled jobs">
        <Kit.TableHeader>
          <Kit.TableRow>
            <Kit.TableHeaderCell>Select</Kit.TableHeaderCell>
            {columns.map((c) => (
              <Kit.TableHeaderCell
                key={c.key}
                sortDirection={sorted.sort.key === c.key ? sorted.sort.direction : 'none'}
                onSort={() => sorted.toggleSort(c.key)}
              >
                {c.label}
              </Kit.TableHeaderCell>
            ))}
          </Kit.TableRow>
        </Kit.TableHeader>
        <Kit.TableBody>
          {sorted.rows.map((r) => (
            <Kit.TableRow key={r.id} selected={selection.isSelected(r.id)}>
              <Kit.TableCell>
                <Kit.Checkbox
                  label={`Select ${r.name}`}
                  checked={selection.isSelected(r.id)}
                  onChange={(on) => selection.toggle(r.id, on)}
                />
              </Kit.TableCell>
              <Kit.TableCell>{r.name}</Kit.TableCell>
              <Kit.TableCell align="right">{r.runs}</Kit.TableCell>
            </Kit.TableRow>
          ))}
        </Kit.TableBody>
        <Kit.TableFooter>
          <Kit.TableRow>
            <Kit.TableCell colSpan={3}>Three example jobs</Kit.TableCell>
          </Kit.TableRow>
        </Kit.TableFooter>
      </Kit.Table>
      <Kit.TableSelectionToolbar count={selection.selectedKeys.length} onClear={selection.clear} />
    </Kit.Stack>
  );
}

export const extensionDemos = {
  Chat: ChatDemo,
  Calendar: CalendarDemo,
  DateInput: () => <Kit.DateInput defaultValue="2026-10-16" />,
  TimeInput: () => <Kit.TimeInput defaultValue="09:30" />,
  DateTimeInput: () => <Kit.DateTimeInput defaultValue="2026-10-16T09:30" />,
  DateRangeInput: DateRangeDemo,
  Resizable: ResizableDemo,
  Table: TableDemo,
  RichTextEditor: RichTextDemo,
};
export const extensionProbes = {
  Calendar: () => <Kit.Calendar defaultValue="2026-10-16" today="2026-10-16" />,
  Table: () => (
    <Kit.Table caption="Scheduled jobs">
      <Kit.TableHeader><Kit.TableRow>{columns.map(column => <Kit.TableHeaderCell key={column.key}>{column.label}</Kit.TableHeaderCell>)}</Kit.TableRow></Kit.TableHeader>
      <Kit.TableBody>{rows.map(row => <Kit.TableRow key={row.id}><Kit.TableCell>{row.name}</Kit.TableCell><Kit.TableCell align="right">{row.runs}</Kit.TableCell></Kit.TableRow>)}</Kit.TableBody>
    </Kit.Table>
  ),
};
for (const name of [
  'ChatLayout',
  'ChatMessageList',
  'ChatMessage',
  'ChatMessageBubble',
  'ChatMessageMetadata',
  'ChatSystemMessage',
  'ChatToolCalls',
  'ChatComposer',
  'ChatComposerInput',
  'ChatSendButton',
  'ChatComposerDrawer',
  'ChatComposerTokenElement',
  'ChatDictationButton',
  'ChatTokenizedText',
  'ChatLayoutScrollButton',
])
  extensionDemos[name] = ChatDemo;
for (const name of ['ResizablePanel', 'ResizeHandle']) extensionDemos[name] = ResizableDemo;
for (const name of [
  'TableHeader',
  'TableBody',
  'TableFooter',
  'TableRow',
  'TableCell',
  'TableHeaderCell',
  'TableSelectionToolbar',
])
  extensionDemos[name] = TableDemo;
