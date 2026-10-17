/* ============================================================
   38 · TERMINAL — pieces of a command line.
   Everything is drawn in text. The still side is a console window that prints
   a build log line by line as the scroll advances; the forty-two specimens
   beside it are prompts, logs, diffs and menus. The ones that would be running
   run by themselves while on screen (never under reduced motion), and the ones
   that take input are real inputs and buttons with the keys you would expect.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ShellPrompt } from "./shell-prompt/ShellPrompt";
import { TypedCommand } from "./typed-command/TypedCommand";
import { HistoryRecall } from "./history-recall/HistoryRecall";
import { TabComplete } from "./tab-complete/TabComplete";
import { LogTail } from "./log-tail/LogTail";
import { LogLevels } from "./log-levels/LogLevels";
import { DiffHunks } from "./diff-hunks/DiffHunks";
import { StackTrace } from "./stack-trace/StackTrace";
import { HashProgress } from "./hash-progress/HashProgress";
import { BrailleSpinner } from "./braille-spinner/BrailleSpinner";
import { ProcessTable } from "./process-table/ProcessTable";
import { TreeListing } from "./tree-listing/TreeListing";
import { ManOptions } from "./man-options/ManOptions";
import { ExitCodes } from "./exit-codes/ExitCodes";
import { CursorShapes } from "./cursor-shapes/CursorShapes";
import { PromptThemes } from "./prompt-themes/PromptThemes";
import { GitStatus } from "./git-status/GitStatus";
import { CommitGraph } from "./commit-graph/CommitGraph";
import { BlameGutter } from "./blame-gutter/BlameGutter";
import { EnvVars } from "./env-vars/EnvVars";
import { PipeChain } from "./pipe-chain/PipeChain";
import { CoreBars } from "./core-bars/CoreBars";
import { SpaceHogs } from "./space-hogs/SpaceHogs";
import { PingTrace } from "./ping-trace/PingTrace";
import { BootLog } from "./boot-log/BootLog";
import { SplitPanes } from "./split-panes/SplitPanes";
import { WindowStrip } from "./window-strip/WindowStrip";
import { ModeLine } from "./mode-line/ModeLine";
import { LineNumbers } from "./line-numbers/LineNumbers";
import { SyntaxTheme } from "./syntax-theme/SyntaxTheme";
import { GrepFilter } from "./grep-filter/GrepFilter";
import { ByteDump } from "./byte-dump/ByteDump";
import { KeyCheats } from "./key-cheats/KeyCheats";
import { AliasExpand } from "./alias-expand/AliasExpand";
import { HeredocPrompt } from "./heredoc-prompt/HeredocPrompt";
import { SecretPrompt } from "./secret-prompt/SecretPrompt";
import { ConfirmPrompt } from "./confirm-prompt/ConfirmPrompt";
import { RuntimePicker } from "./runtime-picker/RuntimePicker";
import { CheckboxList } from "./checkbox-list/CheckboxList";
import { TestDots } from "./test-dots/TestDots";
import { BuildSteps } from "./build-steps/BuildSteps";
import { CronFields } from "./cron-fields/CronFields";

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
