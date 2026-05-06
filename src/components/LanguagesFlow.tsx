import FlowGraph from "@/components/FlowGraph";

const rawNodes = [
  { id: "languages", label: "Langages & Frameworks" },

  { id: "poo", label: "POO / Desktop" },
  { id: "cpp", label: "C++" },
  { id: "qt", label: "Qt" },
  { id: "multithreading", label: "Multi-threading" },
  { id: "java", label: "Java" },
  { id: "javafx-swing", label: "JavaFX / Swing" },
  { id: "springboot", label: "Spring Boot" },

  { id: "web-scripting", label: "Web / Scripting" },
  { id: "javascript", label: "JavaScript" },
  { id: "express", label: "Express" },
  { id: "node", label: "Node.js" },
  { id: "typescript", label: "TypeScript" },
  { id: "angular", label: "Angular" },

  { id: "python-ai", label: "Python / AI" },
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
  ["languages", "poo"],
  ["poo", "cpp"],
  ["cpp", "qt"],
  ["cpp", "multithreading"],
  ["poo", "java"],
  ["java", "javafx-swing"],
  ["java", "springboot"],

  ["languages", "web-scripting"],
  ["web-scripting", "javascript"],
  ["javascript", "express"],
  ["javascript", "node"],
  ["web-scripting", "typescript"],
  ["typescript", "angular"],

  ["languages", "python-ai"],
  ["python-ai", "python"],
  ["python", "numpy-pandas"],
  ["python", "sklearn"],
  ["python", "pytorch"],
  ["python", "fastapi"],

  ["languages", "database"],
  ["database", "postgresql"],
  ["database", "mysql"],
];


export default function LanguagesFlow() {
  return <FlowGraph rawNodes={rawNodes} rawEdges={rawEdges} />;
}