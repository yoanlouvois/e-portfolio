"use client";

import "@xyflow/react/dist/style.css";
import { ReactFlow, Background, type Node, type Edge } from "@xyflow/react";
import dagre from "dagre";

const nodeWidth = 180;
const nodeHeight = 60;

type RawNode = {
  id: string;
  label: string;
};

type FlowGraphProps = {
  rawNodes: RawNode[];
  rawEdges: string[][];
  rankdir?: "TB" | "BT" | "LR" | "RL";
};

export default function FlowGraph({
    rawNodes,
    rawEdges,
    rankdir = "TB",
    }: FlowGraphProps) {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir,
    ranksep: rankdir === "TB" ? 80 : 120,
    nodesep: rankdir === "TB" ? 35 : 60,
  });

  rawNodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  rawEdges.forEach(([source, target]) => {
    dagreGraph.setEdge(source, target);
  });

  dagre.layout(dagreGraph);

  const nodes: Node[] = rawNodes.map((node) => {
    const pos = dagreGraph.node(node.id);

    return {
      id: node.id,
      data: { label: node.label },
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
      style: {
        background: "#0f172a",
        color: "#67e8f9",
        border: "1px solid #22d3ee",
        borderRadius: 12,
        padding: 10,
        whiteSpace: "pre-line",
      },
    };
  });

  const edges: Edge[] = rawEdges.map(([source, target]) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
    style: {
      stroke: "#22d3ee",
    },
  }));

  return (
    <div className="h-full w-full rounded-2xl bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.35 }}
        minZoom={0.2}
        maxZoom={1.5}
      >
        <Background color="#164e63" gap={24} />
      </ReactFlow>
    </div>
  );
}