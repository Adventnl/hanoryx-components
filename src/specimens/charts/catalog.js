/* ============================================================
   07 · CHARTS — marks, bars, lines and areas.
   The still middle of the page is a plotter: a line is drawn down the screen as
   you scroll, two series, a crosshair and a dot per series — the dots and the
   numbers beside them come from the same sine sums the paths were drawn with, so
   CSS (sin, counters) and SVG agree without any script per frame.
   Every sample is generated from a seed, so a chart is the same on every render.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { ColumnChart } from "./column-chart/ColumnChart";
import { ScrubLine } from "./scrub-line/ScrubLine";
import { MorphArea } from "./morph-area/MorphArea";
import { StackToggle } from "./stack-toggle/StackToggle";
import { DonutSlices } from "./donut-slices/DonutSlices";
import { PullOutPie } from "./pull-out-pie/PullOutPie";
import { Candlesticks } from "./candlesticks/Candlesticks";
import { CalendarHeat } from "./calendar-heat/CalendarHeat";
import { BinSlider } from "./bin-slider/BinSlider";
import { ScatterField } from "./scatter-field/ScatterField";
import { BubbleField } from "./bubble-field/BubbleField";
import { SpiderChart } from "./spider-chart/SpiderChart";
import { Treemap } from "./treemap/Treemap";
import { Sunburst } from "./sunburst/Sunburst";
import { FunnelSteps } from "./funnel-steps/FunnelSteps";
import { Waterfall } from "./waterfall/Waterfall";
import { BoxAndWhisker } from "./box-and-whisker/BoxAndWhisker";
import { Ridgeline } from "./ridgeline/Ridgeline";
import { GanttStrips } from "./gantt-strips/GanttStrips";
import { LollipopChart } from "./lollipop-chart/LollipopChart";
import { DumbbellDots } from "./dumbbell-dots/DumbbellDots";
import { SlopeLines } from "./slope-lines/SlopeLines";
import { FlowBands } from "./flow-bands/FlowBands";
import { ChordRing } from "./chord-ring/ChordRing";
import { BumpLines } from "./bump-lines/BumpLines";
import { StepPlot } from "./step-plot/StepPlot";
import { StreamGraph } from "./stream-graph/StreamGraph";
import { HorizonStrip } from "./horizon-strip/HorizonStrip";
import { MosaicColumns } from "./mosaic-columns/MosaicColumns";
import { PyramidBars } from "./pyramid-bars/PyramidBars";
import { EasingCurve } from "./easing-curve/EasingCurve";
import { ErrorBars } from "./error-bars/ErrorBars";
import { ParallelLines } from "./parallel-lines/ParallelLines";
import { UnitIcons } from "./unit-icons/UnitIcons";
import { SparkTable } from "./spark-table/SparkTable";
import { ThresholdLine } from "./threshold-line/ThresholdLine";
import { BrushWindow } from "./brush-window/BrushWindow";
import { BarsAndLine } from "./bars-and-line/BarsAndLine";
import { SpiralPlot } from "./spiral-plot/SpiralPlot";
import { AnnotatedLine } from "./annotated-line/AnnotatedLine";
import { CirclePack } from "./circle-pack/CirclePack";
import { DivergingBars } from "./diverging-bars/DivergingBars";

export { Visual };
export { ColumnChart, ScrubLine, MorphArea, StackToggle, DonutSlices, PullOutPie, Candlesticks, CalendarHeat, BinSlider, ScatterField, BubbleField, SpiderChart, Treemap, Sunburst, FunnelSteps, Waterfall, BoxAndWhisker, Ridgeline, GanttStrips, LollipopChart, DumbbellDots, SlopeLines, FlowBands, ChordRing, BumpLines, StepPlot, StreamGraph, HorizonStrip, MosaicColumns, PyramidBars, EasingCurve, ErrorBars, ParallelLines, UnitIcons, SparkTable, ThresholdLine, BrushWindow, BarsAndLine, SpiralPlot, AnnotatedLine, CirclePack, DivergingBars };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Column chart", ColumnChart, "click"],
  ["Scrub line", ScrubLine, "hover"],
  ["Morph area", MorphArea, "click"],
  ["Stack toggle", StackToggle, "click"],
  ["Donut slices", DonutSlices, "hover"],
  ["Pull-out pie", PullOutPie, "click"],
  ["Candlesticks", Candlesticks, "hover"],
  ["Calendar heat", CalendarHeat, "hover"],
  ["Bin slider", BinSlider, "drag"],
  ["Scatter field", ScatterField, "hover"],
  ["Bubble field", BubbleField, "auto"],
  ["Spider chart", SpiderChart, "click"],
  ["Treemap", Treemap, "hover"],
  ["Sunburst", Sunburst, "hover"],
  ["Funnel steps", FunnelSteps, "click"],
  ["Waterfall", Waterfall, "auto"],
  ["Box and whisker", BoxAndWhisker, "hover"],
  ["Ridgeline", Ridgeline, "auto"],
  ["Gantt strips", GanttStrips, "hover"],
  ["Lollipop chart", LollipopChart, "hover"],
  ["Dumbbell dots", DumbbellDots, "hover"],
  ["Slope lines", SlopeLines, "click"],
  ["Flow bands", FlowBands, "hover"],
  ["Chord ring", ChordRing, "hover"],
  ["Bump lines", BumpLines, "click"],
  ["Step plot", StepPlot, "auto"],
  ["Stream graph", StreamGraph, "auto"],
  ["Horizon strip", HorizonStrip, "auto"],
  ["Mosaic columns", MosaicColumns, "hover"],
  ["Pyramid bars", PyramidBars, "hover"],
  ["Easing curve", EasingCurve, "drag"],
  ["Error bars", ErrorBars, "hover"],
  ["Parallel lines", ParallelLines, "hover"],
  ["Unit icons", UnitIcons, "hover"],
  ["Spark table", SparkTable, "hover"],
  ["Threshold line", ThresholdLine, "drag"],
  ["Brush window", BrushWindow, "drag"],
  ["Bars and line", BarsAndLine, "hover"],
  ["Spiral plot", SpiralPlot, "auto"],
  ["Annotated line", AnnotatedLine, "hover"],
  ["Circle pack", CirclePack, "hover"],
  ["Diverging bars", DivergingBars, "hover"],
];

export default { Visual, items };
