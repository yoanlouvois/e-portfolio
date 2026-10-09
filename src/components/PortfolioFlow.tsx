"use client";

import { useMemo, useState } from "react";
import "@xyflow/react/dist/style.css";
import { ReactFlow, Background, Controls, type Node, type Edge } from "@xyflow/react";
import dagre from "dagre";

const nodeWidth = 190;
const nodeHeight = 60;

type RawNode = { id: string; label: string; tier: 0 | 1 | 2 | 3 | 4 };
type RawEdge = [string, string];

type CategoryColor = {
  root: { bg: string; border: string; text: string };
  mid: { bg: string; border: string; text: string };
  leaf: { bg: string; border: string; text: string };
};

type Category = {
  id: string;
  label: string;
  color: CategoryColor;
  nodes: RawNode[];
  edges: RawEdge[];
  direction?: "LR" | "TB";
};

// Le noeud "moi" est commun a tous les graphes
const ME_NODE: RawNode = { id: "me", label: "Yoan Louvois", tier: 0 };

const CATEGORIES: Category[] = [
  {
    id: "devops",
    label: "DevOps / Cloud",
    direction: "TB",
    color: {
      root: { bg: "#172554", border: "#3b82f6", text: "#bfdbfe" },
      mid: { bg: "#1e3a8a", border: "#60a5fa", text: "#dbeafe" },
      leaf: { bg: "#0f1e40", border: "#93c5fd", text: "#eff6ff" },
    },
        nodes: [
      ME_NODE,
      { id: "devops", label: "DevOps • Cloud • MLOps", tier: 1 },

      { id: "cicd", label: "CI/CD", tier: 2 },
      { id: "github-actions", label: "GitHub Actions", tier: 3 },

      { id: "container", label: "Conteneurs & Orchestration", tier: 2 },
      { id: "docker", label: "Docker", tier: 3 },
      { id: "kubernetes", label: "Kubernetes", tier: 3 },
      { id: "k8s_tools", label: "kubeadm • Kustomize • Helm • HPA", tier: 4 },

      { id: "iac", label: "Infrastructure as Code", tier: 2 },
      { id: "terraform", label: "Terraform", tier: 3 },
      { id: "ansible", label: "Ansible", tier: 3 },

      { id: "observability", label: "Observabilité", tier: 2 },
      { id: "prometheus", label: "Prometheus", tier: 3 },
      { id: "grafana", label: "Grafana", tier: 3 },

      { id: "cloud", label: "Cloud", tier: 2 },
      { id: "aws", label: "AWS", tier: 3 },
      { id: "gcp", label: "GCP", tier: 3 },
      { id: "aws_services", label: "EC2 • S3 • Lambda • VPC • SageMaker", tier: 4 },
      { id: "gcp_services", label: "GCE • VPC • Load Balancing • IAP", tier: 4 },
    ],
    edges: [
      ["me", "devops"],
      ["devops", "cicd"],
      ["cicd", "github-actions"],
      ["devops", "container"],
      ["container", "docker"],
      ["container", "kubernetes"],
      ["kubernetes", "k8s_tools"],
      ["devops", "iac"],
      ["iac", "terraform"],
      ["iac", "ansible"],
      ["devops", "observability"],
      ["observability", "prometheus"],
      ["observability", "grafana"],
      ["devops", "cloud"],
      ["cloud", "aws"],
      ["cloud", "gcp"],
      ["aws", "aws_services"],
      ["gcp", "gcp_services"],
    ],
  },
  {
    id: "langages",
    label: "Langages",
    direction: "TB",
    color: {
      root: { bg: "#3b0764", border: "#a855f7", text: "#e9d5ff" },
      mid: { bg: "#4c1d95", border: "#c084fc", text: "#f3e8ff" },
      leaf: { bg: "#2e1065", border: "#d8b4fe", text: "#faf5ff" },
    },
    nodes: [
      ME_NODE,
      { id: "languages", label: "Langages", tier: 1 },
 
      { id: "poo", label: "Programmation Orientée Objet", tier: 2 },
      { id: "cpp", label: "C++", tier: 3 },
      { id: "cpp-qt", label: "Qt", tier: 4 },
      { id: "cpp-thread", label: "Multi-threading", tier: 4 },
      { id: "java", label: "Java", tier: 3 },
      { id: "java-spring", label: "Spring Boot", tier: 4 },
      { id: "java-swing", label: "Swing", tier: 4 },
      { id: "java-fx", label: "JavaFX", tier: 4 },
 
      { id: "scripting", label: "Scripting", tier: 2 },
      { id: "javascript", label: "JavaScript", tier: 3 },
      { id: "js-express", label: "Express", tier: 4 },
      { id: "js-node", label: "Node.js", tier: 4 },
      { id: "typescript", label: "TypeScript", tier: 3 },
      { id: "ts-angular", label: "Angular", tier: 4 },
      { id: "python", label: "Python", tier: 3 },
      { id: "fast-api", label: "FastAPI", tier: 4 },
      { id: "flask", label: "Flask", tier: 4 },
    ],
    edges: [
      ["me", "languages"],
      ["languages", "poo"],
      ["poo", "cpp"],
      ["cpp", "cpp-qt"],
      ["cpp", "cpp-thread"],
      ["poo", "java"],
      ["java", "java-spring"],
      ["java", "java-swing"],
      ["java", "java-fx"],
      ["languages", "scripting"],
      ["scripting", "javascript"],
      ["javascript", "js-express"],
      ["javascript", "js-node"],
      ["scripting", "typescript"],
      ["typescript", "ts-angular"],
      ["scripting", "python"],
      ["python", "fast-api"],
      ["python", "flask"],
    ],
  },
  {
    id: "ml",
    label: "Python / Machine Learning",
    direction: "TB",
    color: {
      root: { bg: "#022c22", border: "#10b981", text: "#6ee7b7" },
      mid: { bg: "#064e3b", border: "#34d399", text: "#a7f3d0" },
      leaf: { bg: "#01201a", border: "#6ee7b7", text: "#d1fae5" },
    },
    nodes: [
      ME_NODE,
      { id: "python", label: "Python", tier: 1 },
 
      { id: "data-science", label: "Data Science / ML", tier: 2 },
      { id: "pandas", label: "Pandas", tier: 3 },
      { id: "scikit", label: "Scikit-learn", tier: 3 },
 
      { id: "deep-learning", label: "Deep Learning", tier: 2 },
      { id: "pytorch", label: "PyTorch", tier: 3 },
      { id: "tensorflow", label: "TensorFlow", tier: 3 },
 
      { id: "computer-vision", label: "Computer Vision", tier: 2 },
      { id: "opencv", label: "OpenCV", tier: 3 },
 
      { id: "genai", label: "IA Générative", tier: 2 },
      { id: "langchain", label: "LangChain", tier: 3 },
      { id: "langgraph", label: "LangGraph", tier: 3 },
 
      { id: "web-python", label: "Web", tier: 2 },
      { id: "flask", label: "Flask", tier: 3 },
      { id: "fastapi", label: "FastAPI", tier: 3 },
    ],
    edges: [
      ["me", "python"],
      ["python", "data-science"],
      ["data-science", "pandas"],
      ["data-science", "scikit"],
      ["python", "deep-learning"],
      ["deep-learning", "pytorch"],
      ["deep-learning", "tensorflow"],
      ["python", "computer-vision"],
      ["computer-vision", "opencv"],
      ["python", "genai"],
      ["genai", "langchain"],
      ["genai", "langgraph"],
      ["python", "web-python"],
      ["web-python", "flask"],
      ["web-python", "fastapi"],
    ],
  },
  {
    id: "database",
    label: "Database",
    color: {
      root: { bg: "#0c4a6e", border: "#0ea5e9", text: "#bae6fd" },
      mid: { bg: "#075985", border: "#38bdf8", text: "#e0f2fe" },
      leaf: { bg: "#083344", border: "#7dd3fc", text: "#f0f9ff" },
    },
    nodes: [
      ME_NODE,
      { id: "database", label: "Database", tier: 1 },
      { id: "postgresql", label: "PostgreSQL", tier: 2 },
      { id: "mysql", label: "MySQL", tier: 2 },
    ],
    edges: [
      ["me", "database"],
      ["database", "postgresql"],
      ["database", "mysql"],
    ],
  },
];

function getNodeStyle(node: RawNode, color: CategoryColor) {
  const baseStyle = {
    borderRadius: 12,
    padding: 10,
    whiteSpace: "pre-line" as const,
    width: nodeWidth,
    minHeight: nodeHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    fontSize: 13,
  };

  if (node.tier === 0) {
    return {
      ...baseStyle,
      background: "#082f49",
      color: "#67e8f9",
      border: "2px solid #22d3ee",
      boxShadow: "0 0 24px rgba(34, 211, 238, 0.45)",
      fontWeight: 700,
    };
  }

  if (node.tier === 1) {
    return {
      ...baseStyle,
      background: color.root.bg,
      color: color.root.text,
      border: `2px solid ${color.root.border}`,
      fontWeight: 600,
    };
  }

  if (node.tier === 2) {
    return {
      ...baseStyle,
      background: color.mid.bg,
      color: color.mid.text,
      border: `1px solid ${color.mid.border}`,
      fontWeight: 500,
    };
  }

  return {
    ...baseStyle,
    background: color.leaf.bg,
    color: color.leaf.text,
    border: `1px solid ${color.leaf.border}`,
    fontWeight: 400,
  };
}

function getLayoutedElements(category: Category): { nodes: Node[]; edges: Edge[] } {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir: category.direction ?? "LR",
    ranksep: 110,
    nodesep: 45,
  });

  category.nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  category.edges.forEach(([source, target]) => {
    dagreGraph.setEdge(source, target);
  });

  dagre.layout(dagreGraph);

  const nodes: Node[] = category.nodes.map((node) => {
    const pos = dagreGraph.node(node.id);
    return {
      id: node.id,
      data: { label: node.label },
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
      style: getNodeStyle(node, category.color),
    };
  });

  const edges: Edge[] = category.edges.map(([source, target]) => ({
    id: `${category.id}-${source}-${target}`,
    source,
    target,
    animated: true,
    style: { stroke: category.color.mid.border, strokeWidth: 1.5 },
  }));

  return { nodes, edges };
}

export default function PortfolioFlow() {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIES[0].id);

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0],
    [activeCategoryId]
  );

  const { nodes, edges } = useMemo(
    () => getLayoutedElements(activeCategory),
    [activeCategory]
  );

  return (
    <div className="flex h-full w-full flex-col gap-3 rounded-2xl bg-slate-950 p-3">
      {/* Selecteur de categories */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className="skill-filter-btn rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
              style={{
                background: isActive ? category.color.root.bg : "transparent",
                color: isActive ? category.color.root.text : "#64748b",
                border: `1px solid ${isActive ? category.color.root.border : "#334155"}`,
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Graphe */}
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-800">
        <ReactFlow
          key={activeCategory.id}
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.3, minZoom: 0.4, maxZoom: 1 }}
          minZoom={0.2}
          maxZoom={1.5}
        >
          <Background color="#164e63" gap={24} />
        </ReactFlow>
      </div>
    </div>
  );
}