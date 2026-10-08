const basePath = process.env.NODE_ENV === "production" ? "/e-portfolio" : "";

const projects = [
  {
    title: "Urban-Green-Score-MLops",
    image: "/projects/urban-green-score.png",
    github: "https://github.com/yoanlouvois/urban-green-score-mlops",
    tags: ["Python", "PyTorch", "AWS", "Terraform", "Docker", "MLOps"],
    description:
      "Conception d'une infrastructure MLOps de bout en bout via Terraform sur AWS. Déploiement serverless (API Gateway & Lambda) et conteneurisé (Docker/ECR) d'un modèle SageMaker de segmentation d'images satellites.",
  },
  {
    title: "Site-Monitor-K8s",
    image: "/projects/site-monitor.png",
    github: "https://github.com/yoanlouvois/site-monitor-k8s",
    tags: ["Kubernetes", "GCP", "Terraform", "Docker", "FastAPI", "Redis", "Prometheus"],
    description:
      "Moniteur de disponibilité de sites web en microservices, déployé sur un cluster Kubernetes (kubeadm) provisionné avec Terraform sur GCP. Sécurité durcie (NetworkPolicies, Pod Security Standards, RBAC), autoscaling HPA, observabilité Prometheus/Grafana et alertes Discord.",
  },
  {
    title: "GameTracker",
    image: "/projects/gametracker.png",
    github: "https://github.com/yoanlouvois/game-tracker-project-backend",
    tags: ["Java", "Spring Boot", "TypeScript", "Angular", "Docker", "MySQL", "AWS", "Terraform"],
    description:
      "Application web full-stack de jeux en ligne (jeux, trophées, amis, statistiques) développée avec Spring Boot, Angular et MySQL, conteneurisée avec Docker et déployée sur AWS via Terraform dans une architecture multi-AZ.",
  },
  {
    title: "Travel-Tracker-App",
    image: "/projects/travel-tracker.png",
    github: "https://github.com/yoanlouvois/travel-tracker-app",
    tags: ["Javascript","Node.js", "Express", "Prisma", "Leaflet"],
    description:
      "Application web développée avec Node.js, Express, Prisma et Leaflet permettant de consigner, d'organiser et de visualiser ses voyages personnels sur une carte interactive.",
  },
  {
    title: "3D-Maze-Environment-OpenGL",
    image: "/projects/maze-opengl.png",
    github: "https://github.com/yoanlouvois/3d-maze-environment-opengl",
    tags: ["C++", "OpenGL", "3D", "Procedural Generation"],
    description:
      "Labyrinthe 3D généré de manière procédurale dans lequel l'utilisateur peut naviguer en temps réel. Focus sur le rendu graphique, la génération et la gestion des déplacements.",
  },
  {
    title: "Unsupervised-ML-Fruits-Classification",
    image: "/projects/fruitsml-classification.png",
    github: "https://github.com/yoanlouvois/Unsupervised-ML-Fruits-Classification",
    tags: ["Python", "Scikit-learn", "Streamlit", "Computer Vision", "Resnet50"],
    description:
      "Comparaison de méthodes d'extraction de caractéristiques et d'algorithmes de clustering appliqués à des images de fruits, avec une interface de visualisation interactive sous Streamlit.",
  }
];

export default function ProjectsSection() {
  return (
    <section>
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
          Projets
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Projets Sélectionnés
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

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
              >
                Voir sur GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}