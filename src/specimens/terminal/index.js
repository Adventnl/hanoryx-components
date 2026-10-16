/* ============================================================
   38 · TERMINAL — pieces of a command line.
   Everything is drawn in text. The still side is a console window that prints
   a build log line by line as the scroll advances; the forty-two specimens
   beside it are prompts, logs, diffs and menus. The ones that would be running
   run by themselves while on screen (never under reduced motion), and the ones
   that take input are real inputs and buttons with the keys you would expect.
   ============================================================ */

import { Visual } from './Visual';
import { ShellPrompt } from './ShellPrompt';
import { TypedCommand } from './TypedCommand';
import { HistoryRecall } from './HistoryRecall';
import { TabComplete } from './TabComplete';
import { LogTail } from './LogTail';
import { LogLevels } from './LogLevels';
import { DiffHunks } from './DiffHunks';
import { StackTrace } from './StackTrace';
import { HashProgress } from './HashProgress';
import { BrailleSpinner } from './BrailleSpinner';
import { ProcessTable } from './ProcessTable';
import { TreeListing } from './TreeListing';
import { ManOptions } from './ManOptions';
import { ExitCodes } from './ExitCodes';
import { CursorShapes } from './CursorShapes';
import { PromptThemes } from './PromptThemes';
import { GitStatus } from './GitStatus';
import { CommitGraph } from './CommitGraph';
import { BlameGutter } from './BlameGutter';
import { EnvVars } from './EnvVars';
import { PipeChain } from './PipeChain';
import { CoreBars } from './CoreBars';
import { SpaceHogs } from './SpaceHogs';
import { PingTrace } from './PingTrace';
import { BootLog } from './BootLog';
import { SplitPanes } from './SplitPanes';
import { WindowStrip } from './WindowStrip';
import { ModeLine } from './ModeLine';
import { LineNumbers } from './LineNumbers';
import { SyntaxTheme } from './SyntaxTheme';
import { GrepFilter } from './GrepFilter';
import { ByteDump } from './ByteDump';
import { KeyCheats } from './KeyCheats';
import { AliasExpand } from './AliasExpand';
import { HeredocPrompt } from './HeredocPrompt';
import { SecretPrompt } from './SecretPrompt';
import { ConfirmPrompt } from './ConfirmPrompt';
import { RuntimePicker } from './RuntimePicker';
import { CheckboxList } from './CheckboxList';
import { TestDots } from './TestDots';
import { BuildSteps } from './BuildSteps';
import { CronFields } from './CronFields';

export { Visual };
export { ShellPrompt, TypedCommand, HistoryRecall, TabComplete, LogTail, LogLevels, DiffHunks, StackTrace, HashProgress, BrailleSpinner, ProcessTable, TreeListing, ManOptions, ExitCodes, CursorShapes, PromptThemes, GitStatus, CommitGraph, BlameGutter, EnvVars, PipeChain, CoreBars, SpaceHogs, PingTrace, BootLog, SplitPanes, WindowStrip, ModeLine, LineNumbers, SyntaxTheme, GrepFilter, ByteDump, KeyCheats, AliasExpand, HeredocPrompt, SecretPrompt, ConfirmPrompt, RuntimePicker, CheckboxList, TestDots, BuildSteps, CronFields };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Shell prompt", ShellPrompt, "auto"],
  ["Typed command", TypedCommand, "auto"],
  ["History recall", HistoryRecall, "click"],
  ["Tab complete", TabComplete, "type"],
  ["Log tail", LogTail, "auto"],
  ["Log levels", LogLevels, "click"],
  ["Diff hunks", DiffHunks, "click"],
  ["Stack trace", StackTrace, "click"],
  ["Hash progress", HashProgress, "auto"],
  ["Braille spinner", BrailleSpinner, "auto"],
  ["Process table", ProcessTable, "click"],
  ["Tree listing", TreeListing, "click"],
  ["Man options", ManOptions, "hover"],
  ["Exit codes", ExitCodes, "click"],
  ["Cursor shapes", CursorShapes, "click"],
  ["Prompt themes", PromptThemes, "click"],
  ["Git status", GitStatus, "click"],
  ["Commit graph", CommitGraph, "click"],
  ["Blame gutter", BlameGutter, "hover"],
  ["Env vars", EnvVars, "click"],
  ["Pipe chain", PipeChain, "auto"],
  ["Core bars", CoreBars, "auto"],
  ["Space hogs", SpaceHogs, "click"],
  ["Ping trace", PingTrace, "auto"],
  ["Boot log", BootLog, "auto"],
  ["Split panes", SplitPanes, "click"],
  ["Window strip", WindowStrip, "click"],
  ["Mode line", ModeLine, "key"],
  ["Line numbers", LineNumbers, "click"],
  ["Syntax theme", SyntaxTheme, "click"],
  ["Grep filter", GrepFilter, "type"],
  ["Byte dump", ByteDump, "hover"],
  ["Key cheats", KeyCheats, "press"],
  ["Alias expand", AliasExpand, "type"],
  ["Heredoc prompt", HeredocPrompt, "type"],
  ["Secret prompt", SecretPrompt, "type"],
  ["Confirm prompt", ConfirmPrompt, "key"],
  ["Runtime picker", RuntimePicker, "key"],
  ["Checkbox list", CheckboxList, "click"],
  ["Test dots", TestDots, "auto"],
  ["Build steps", BuildSteps, "auto"],
  ["Cron fields", CronFields, "click"],
];

export default { Visual, items };
