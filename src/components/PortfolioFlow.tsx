"use client";

import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
} from "@xyflow/react";

const nodeStyle = {
  background: "rgba(15, 23, 42, 0.92)",
  color: "#e0f2fe",
  border: "1px solid rgba(34, 211, 238, 0.65)",
  borderRadius: 16,
  padding: 14,
  boxShadow: "0 0 25px rgba(34, 211, 238, 0.25)",
};

const nodes: Node[] = [
  {
    id: "core",
    position: { x: 280, y: 220 },
    data: { label: "Yoan Louvois" },
    type: "input",
    style: {
      ...nodeStyle,
      color: "#67e8f9",
      boxShadow: "0 0 40px rgba(34,211,238,0.55)",
    },
  },
  { id: "devops", position: { x: 40, y: 80 }, data: { label: "DevOps" }, style: nodeStyle },
  { id: "mlops", position: { x: 520, y: 80 }, data: { label: "MLOps" }, style: nodeStyle },
  { id: "backend", position: { x: 60, y: 380 }, data: { label: "Backend Systems" }, style: nodeStyle },
  { id: "cloud", position: { x: 520, y: 380 }, data: { label: "Cloud Engineering" }, style: nodeStyle },
  { id: "ai", position: { x: 290, y: 20 }, data: { label: "Deep Learning" }, style: nodeStyle },
  { id: "contact", position: { x: 300, y: 500 }, data: { label: "Contact" }, type: "output", style: nodeStyle },
];

const edges: Edge[] = [
  { id: "core-devops", source: "core", target: "devops", animated: true },
  { id: "core-mlops", source: "core", target: "mlops", animated: true },
  { id: "core-backend", source: "core", target: "backend", animated: true },
  { id: "core-cloud", source: "core", target: "cloud", animated: true },
  { id: "core-ai", source: "core", target: "ai", animated: true },
  { id: "core-contact", source: "core", target: "contact", animated: true },
];

export default function PortfolioFlow() {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        className="bg-slate-950"
      >
        <Background color="#164e63" gap={24} />     
      </ReactFlow>
    </div>
  );
}