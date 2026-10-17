/* ============================================================
   08 · MATRICES — heat, tables and dot grids to pan across.
   The page is a field of forty-two grids you travel across along a snaking path.
   On the left, a small map of that field: the red cell and the dot are where the
   scroll has taken you, the line is the way so far, and the numbers beside them
   are written by CSS counters — the same `--pin` that moves the field draws them.
   Most specimens below are grids read with the pointer or the arrow keys
   (useCell); the rest are small games, tables and displays.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { HeatMatrix } from "./heat-matrix/HeatMatrix";
import { CorrelationGrid } from "./correlation-grid/CorrelationGrid";
import { ConfusionMatrix } from "./confusion-matrix/ConfusionMatrix";
import { TimesTable } from "./times-table/TimesTable";
import { SortableTable } from "./sortable-table/SortableTable";
import { ScrollTable } from "./scroll-table/ScrollTable";
import { DotClock } from "./dot-clock/DotClock";
import { PixelMarquee } from "./pixel-marquee/PixelMarquee";
import { LifeGrid } from "./life-grid/LifeGrid";
import { PixelPad } from "./pixel-pad/PixelPad";
import { SeatMap } from "./seat-map/SeatMap";
import { BingoCard } from "./bingo-card/BingoCard";
import { SudokuPeek } from "./sudoku-peek/SudokuPeek";
import { LightsOut } from "./lights-out/LightsOut";
import { TilePuzzle } from "./tile-puzzle/TilePuzzle";
import { MineField } from "./mine-field/MineField";
import { ChessBoard } from "./chess-board/ChessBoard";
import { KeyMap } from "./key-map/KeyMap";
import { PaperTape } from "./paper-tape/PaperTape";
import { BrailleCells } from "./braille-cells/BrailleCells";
import { BitGrid } from "./bit-grid/BitGrid";
import { HexDump } from "./hex-dump/HexDump";
import { PriorityMatrix } from "./priority-matrix/PriorityMatrix";
import { RiskMatrix } from "./risk-matrix/RiskMatrix";
import { TruthTable } from "./truth-table/TruthTable";
import { PlanTable } from "./plan-table/PlanTable";
import { PivotTable } from "./pivot-table/PivotTable";
import { Timetable } from "./timetable/Timetable";
import { MonthGrid } from "./month-grid/MonthGrid";
import { MiniSheet } from "./mini-sheet/MiniSheet";
import { CellularRows } from "./cellular-rows/CellularRows";
import { PascalTriangle } from "./pascal-triangle/PascalTriangle";
import { SwatchMatrix } from "./swatch-matrix/SwatchMatrix";
import { WordSearch } from "./word-search/WordSearch";
import { MemoryFlip } from "./memory-flip/MemoryFlip";
import { NoughtsGrid } from "./noughts-grid/NoughtsGrid";
import { DropFour } from "./drop-four/DropFour";
import { FleetGrid } from "./fleet-grid/FleetGrid";
import { TransformGrid } from "./transform-grid/TransformGrid";
import { ProductGrid } from "./product-grid/ProductGrid";
import { LampGrid } from "./lamp-grid/LampGrid";
import { EqualizerGrid } from "./equalizer-grid/EqualizerGrid";

export { Visual };
export { HeatMatrix, CorrelationGrid, ConfusionMatrix, TimesTable, SortableTable, ScrollTable, DotClock, PixelMarquee, LifeGrid, PixelPad, SeatMap, BingoCard, SudokuPeek, LightsOut, TilePuzzle, MineField, ChessBoard, KeyMap, PaperTape, BrailleCells, BitGrid, HexDump, PriorityMatrix, RiskMatrix, TruthTable, PlanTable, PivotTable, Timetable, MonthGrid, MiniSheet, CellularRows, PascalTriangle, SwatchMatrix, WordSearch, MemoryFlip, NoughtsGrid, DropFour, FleetGrid, TransformGrid, ProductGrid, LampGrid, EqualizerGrid };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Heat matrix", HeatMatrix, "hover"],
  ["Correlation grid", CorrelationGrid, "hover"],
  ["Confusion matrix", ConfusionMatrix, "click"],
  ["Times table", TimesTable, "hover"],
  ["Sortable table", SortableTable, "click"],
  ["Scroll table", ScrollTable, "scroll"],
  ["Dot clock", DotClock, "auto"],
  ["Pixel marquee", PixelMarquee, "auto"],
  ["Life grid", LifeGrid, "click"],
  ["Pixel pad", PixelPad, "drag"],
  ["Seat map", SeatMap, "click"],
  ["Bingo card", BingoCard, "click"],
  ["Sudoku peek", SudokuPeek, "hover"],
  ["Lights out", LightsOut, "click"],
  ["Tile puzzle", TilePuzzle, "click"],
  ["Mine field", MineField, "click"],
  ["Chess board", ChessBoard, "click"],
  ["Key map", KeyMap, "keys"],
  ["Paper tape", PaperTape, "hover"],
  ["Braille cells", BrailleCells, "type"],
  ["Bit grid", BitGrid, "click"],
  ["Hex dump", HexDump, "hover"],
  ["Priority matrix", PriorityMatrix, "click"],
  ["Risk matrix", RiskMatrix, "hover"],
  ["Truth table", TruthTable, "click"],
  ["Plan table", PlanTable, "click"],
  ["Pivot table", PivotTable, "hover"],
  ["Timetable", Timetable, "click"],
  ["Month grid", MonthGrid, "click"],
  ["Mini sheet", MiniSheet, "type"],
  ["Cellular rows", CellularRows, "auto"],
  ["Pascal triangle", PascalTriangle, "hover"],
  ["Swatch matrix", SwatchMatrix, "click"],
  ["Word search", WordSearch, "click"],
  ["Memory flip", MemoryFlip, "click"],
  ["Noughts grid", NoughtsGrid, "click"],
  ["Drop four", DropFour, "click"],
  ["Fleet grid", FleetGrid, "click"],
  ["Transform grid", TransformGrid, "drag"],
  ["Product grid", ProductGrid, "hover"],
  ["Lamp grid", LampGrid, "hover"],
  ["Equalizer grid", EqualizerGrid, "auto"],
];

export default { Visual, items };
