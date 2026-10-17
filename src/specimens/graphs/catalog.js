/* ============================================================
   10 · GRAPHS — nodes, trees and flows that grow.
   A spine runs down the middle of the page and specimens branch off it. The disc
   that rides the spine is a graph of its own: thirty-one nodes appear one by one
   as you scroll, each link drawing itself from its parent, and the counters in
   the middle are written by CSS. Everything below is a graph of some kind —
   trees, networks, flows, fractals — drawn from fixed data, so it is the same
   on every render.
   ============================================================ */

import { Visual } from "./visual/Visual";
import { SpringGraph } from "./spring-graph/SpringGraph";
import { OrgChart } from "./org-chart/OrgChart";
import { FileTree } from "./file-tree/FileTree";
import { MindMap } from "./mind-map/MindMap";
import { DependencyGraph } from "./dependency-graph/DependencyGraph";
import { DecisionTree } from "./decision-tree/DecisionTree";
import { FlowchartSteps } from "./flowchart-steps/FlowchartSteps";
import { RadialTree } from "./radial-tree/RadialTree";
import { DendrogramCut } from "./dendrogram-cut/DendrogramCut";
import { RingNetwork } from "./ring-network/RingNetwork";
import { HubAndSpoke } from "./hub-and-spoke/HubAndSpoke";
import { PacketRoute } from "./packet-route/PacketRoute";
import { TournamentBracket } from "./tournament-bracket/TournamentBracket";
import { BranchGraph } from "./branch-graph/BranchGraph";
import { TransitMap } from "./transit-map/TransitMap";
import { NeuralLayers } from "./neural-layers/NeuralLayers";
import { BlockChain } from "./block-chain/BlockChain";
import { LinkedList } from "./linked-list/LinkedList";
import { StackAndQueue } from "./stack-and-queue/StackAndQueue";
import { HeapTree } from "./heap-tree/HeapTree";
import { SearchTree } from "./search-tree/SearchTree";
import { TraversalSteps } from "./traversal-steps/TraversalSteps";
import { ShortestPath } from "./shortest-path/ShortestPath";
import { SpanningTree } from "./spanning-tree/SpanningTree";
import { StateMachine } from "./state-machine/StateMachine";
import { TokenPipeline } from "./token-pipeline/TokenPipeline";
import { FanOut } from "./fan-out/FanOut";
import { Trie } from "./trie/Trie";
import { HuffmanTree } from "./huffman-tree/HuffmanTree";
import { VennSets } from "./venn-sets/VennSets";
import { MazePath } from "./maze-path/MazePath";
import { LinkCurve } from "./link-curve/LinkCurve";
import { ArcDiagram } from "./arc-diagram/ArcDiagram";
import { AdjacencyView } from "./adjacency-view/AdjacencyView";
import { Constellation } from "./constellation/Constellation";
import { SequenceDiagram } from "./sequence-diagram/SequenceDiagram";
import { TreeRings } from "./tree-rings/TreeRings";
import { FractalTree } from "./fractal-tree/FractalTree";
import { KochCurve } from "./koch-curve/KochCurve";
import { Sierpinski } from "./sierpinski/Sierpinski";
import { LineageTree } from "./lineage-tree/LineageTree";
import { CascadeNodes } from "./cascade-nodes/CascadeNodes";

export { Visual };
export { SpringGraph, OrgChart, FileTree, MindMap, DependencyGraph, DecisionTree, FlowchartSteps, RadialTree, DendrogramCut, RingNetwork, HubAndSpoke, PacketRoute, TournamentBracket, BranchGraph, TransitMap, NeuralLayers, BlockChain, LinkedList, StackAndQueue, HeapTree, SearchTree, TraversalSteps, ShortestPath, SpanningTree, StateMachine, TokenPipeline, FanOut, Trie, HuffmanTree, VennSets, MazePath, LinkCurve, ArcDiagram, AdjacencyView, Constellation, SequenceDiagram, TreeRings, FractalTree, KochCurve, Sierpinski, LineageTree, CascadeNodes };

/** [label, Component, interaction] in page order — what a Stage lays out. */
export const items = [
  ["Spring graph", SpringGraph, "drag"],
  ["Org chart", OrgChart, "click"],
  ["File tree", FileTree, "click"],
  ["Mind map", MindMap, "hover"],
  ["Dependency graph", DependencyGraph, "hover"],
  ["Decision tree", DecisionTree, "click"],
  ["Flowchart steps", FlowchartSteps, "click"],
  ["Radial tree", RadialTree, "hover"],
  ["Dendrogram cut", DendrogramCut, "drag"],
  ["Ring network", RingNetwork, "click"],
  ["Hub and spoke", HubAndSpoke, "auto"],
  ["Packet route", PacketRoute, "click"],
  ["Tournament bracket", TournamentBracket, "click"],
  ["Branch graph", BranchGraph, "hover"],
  ["Transit map", TransitMap, "hover"],
  ["Neural layers", NeuralLayers, "auto"],
  ["Block chain", BlockChain, "click"],
  ["Linked list", LinkedList, "click"],
  ["Stack and queue", StackAndQueue, "click"],
  ["Heap tree", HeapTree, "click"],
  ["Search tree", SearchTree, "type"],
  ["Traversal steps", TraversalSteps, "click"],
  ["Shortest path", ShortestPath, "click"],
  ["Spanning tree", SpanningTree, "click"],
  ["State machine", StateMachine, "click"],
  ["Token pipeline", TokenPipeline, "auto"],
  ["Fan-out", FanOut, "auto"],
  ["Trie", Trie, "type"],
  ["Huffman tree", HuffmanTree, "hover"],
  ["Venn sets", VennSets, "hover"],
  ["Maze path", MazePath, "auto"],
  ["Link curve", LinkCurve, "drag"],
  ["Arc diagram", ArcDiagram, "hover"],
  ["Adjacency view", AdjacencyView, "hover"],
  ["Constellation", Constellation, "hover"],
  ["Sequence diagram", SequenceDiagram, "click"],
  ["Tree rings", TreeRings, "hover"],
  ["Fractal tree", FractalTree, "drag"],
  ["Koch curve", KochCurve, "click"],
  ["Sierpinski", Sierpinski, "click"],
  ["Lineage tree", LineageTree, "hover"],
  ["Cascade nodes", CascadeNodes, "click"],
];

export default { Visual, items };
