"use client";

import "@xyflow/react/dist/style.css";
import { ReactFlow, Background } from "@xyflow/react";
import dagre from "dagre";

const nodeWidth = 180;
const nodeHeight = 60;

const rawNodes = [
  { id: "me", label: "Yoan Louvois" },

  // DevOps / MLOps d'abord
  { id: "devops", label: "DevOps / MLOps" },
  { id: "cicd", label: "CI/CD" },
  { id: "github-actions", label: "GitHub Actions" },
  { id: "container", label: "Container" },
  { id: "docker", label: "Docker" },
  { id: "iac", label: "IaC" },
  { id: "terraform", label: "Terraform" },
  { id: "cloud", label: "Cloud" },
  { id: "aws", label: "AWS" },
  { id: "ec2-s3", label: "EC2 / S3" },
  { id: "sagemaker", label: "SageMaker\nAI pipelines" },
  { id: "cloudwatch", label: "CloudWatch" },
  { id: "lambda-api", label: "Lambda / API Gateway" },
  { id: "ecr", label: "ECR" },

  // Langages ensuite
  { id: "languages", label: "Langages" },
  { id: "cpp", label: "C++" },
  { id: "qt", label: "Qt" },
  { id: "multithreading", label: "Multi-threading" },

  { id: "java", label: "Java" },
  { id: "javafx-swing", label: "JavaFX / Swing" },
  { id: "springboot", label: "Spring Boot" },

  { id: "javascript", label: "JavaScript" },
  { id: "express", label: "Express" },
  { id: "node", label: "Node.js" },

  { id: "typescript", label: "TypeScript" },
  { id: "angular", label: "Angular" },

  { id: "python", label: "Python" },
  { id: "numpy-pandas", label: "NumPy / Pandas" },
  { id: "sklearn", label: "Scikit-learn" },
  { id: "pytorch", label: "PyTorch" },
  { id: "fastapi", label: "FastAPI" },

  { id: "database", label: "Database" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mysql", label: "MySQL" },
];

const rawEdges = [
  ["me", "devops"],
  ["me", "languages"],

  // DevOps / MLOps
  ["devops", "cicd"],
  ["cicd", "github-actions"],

  ["devops", "container"],
  ["container", "docker"],

  ["devops", "iac"],
  ["iac", "terraform"],

  ["devops", "cloud"],
  ["cloud", "aws"],
  ["aws", "ec2-s3"],
  ["aws", "sagemaker"],
  ["aws", "cloudwatch"],
  ["aws", "lambda-api"],
  ["aws", "ecr"],

  // Langages
  ["languages", "cpp"],
  ["cpp", "qt"],
  ["cpp", "multithreading"],

  ["languages", "java"],
  ["java", "javafx-swing"],
  ["java", "springboot"],

  ["languages", "javascript"],
  ["javascript", "express"],
  ["javascript", "node"],

  ["languages", "typescript"],
  ["typescript", "angular"],

  ["languages", "python"],
  ["python", "numpy-pandas"],
  ["python", "sklearn"],
  ["python", "pytorch"],
  ["python", "fastapi"],

  ["languages", "database"],
  ["database", "postgresql"],
  ["database", "mysql"],
];

function getLayoutedElements() {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir: "TB", // Passe de "TB" à "LR" (Left to Right)
    ranksep: 60,   // Réduit de 100 à 60
    nodesep: 20,   // Réduit de 50 à 20
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

  const nodes = rawNodes.map((node) => {
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
      },
    };
  });

  const edges = rawEdges.map(([source, target]) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
  }));

  return { nodes, edges };
}

export default function PortfolioFlow() {
  const { nodes, edges } = getLayoutedElements();

  return(
    <div className="h-full w-full rounded-2xl bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{
          padding: 0.4,
          minZoom: 0.3,
          maxZoom: 0.8,
        }}
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.45 }}
      >
        <Background color="#164e63" gap={24} />
      </ReactFlow>
    </div>
  );
}