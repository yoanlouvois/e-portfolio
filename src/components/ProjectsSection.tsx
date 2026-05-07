const basePath = process.env.NODE_ENV === "production" ? "/e-portfolio" : "";

const projects = [
  {
    title: "Urban-Green-Score-MLops",
    image: "/projects/urban-green-score.png",
    github: "https://github.com/yoanlouvois/Urban-Green-Score-MLops",
    description:
      "End-to-end MLOps pipeline for satellite image segmentation and Urban Green Score computation using PyTorch, Docker, and AWS SageMaker.",
  },
  {
    title: "Unsupervised-ML-Fruits-Classification",
    image: "/projects/fruits-classification.png",
    github: "https://github.com/yoanlouvois/Unsupervised-ML-Fruits-Classification",
    description:
      "Comparison of feature extraction methods and clustering algorithms applied to fruit images, with interactive visualization using Streamlit.",
  },
  {
    title: "Travel-Tracker-App",
    image: "/projects/travel-tracker.png",
    github: "https://github.com/yoanlouvois/Travel-Tracker-App",
    description:
      "Web application built with Node.js, Express, Prisma, and Leaflet to log, visualize, and organize personal travels on an interactive map.",
  },
  {
    title: "3D-Maze-Environment-OpenGL",
    image: "/projects/maze-opengl.png",
    github: "https://github.com/yoanlouvois/3D-Maze-Environment-OpenGL",
    description:
      "Randomly generated 3D maze where users can navigate in real time, focusing on rendering, procedural generation, and interactive movement.",
  },
  {
    title: "GameTracker",
    image: "/projects/gametracker.png",
    github: "https://github.com/MorganPhlp/GameTrackerProject",
    description:
      "Online flash game tracking platform with player management, trophies, friends, and statistics. Built with Spring Boot, Docker, MySQL, and Angular.",
  },
];

export default function ProjectsSection() {
  return (
    <section>
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
          Projects
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Selected Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-cyan-500/40"
          >
            <div className="h-48 bg-slate-900">
              <img
                src={`${basePath}${project.image}`}
                alt={project.title}
                className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-slate-100">
                {project.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}