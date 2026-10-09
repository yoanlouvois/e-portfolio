import PortfolioFlow from "@/components/PortfolioFlow";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e40af55,transparent_40%),radial-gradient(circle_at_bottom_right,#9333ea44,transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-16 pb-24">
          {/* PRESENTATION */}
          <section className="flex min-h-[75vh] flex-col justify-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.5em] text-cyan-400">
              Ingénieur Logiciel
            </p>

            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tight md:text-8xl">
              Yoan Louvois
            </h1>

            <p className="mb-8 max-w-3xl text-2xl font-medium text-slate-200">
              A la recherche d'un CDI en {" "}
                <span className="text-cyan-300">DevOps, Cloud ou MLOps</span>.
            </p>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
              Ingénieur diplômé de{" "}
              <span className="text-cyan-300">Polytech Paris-Saclay</span> (2026) en
              Informatique et Ingénierie Mathématiques, je suis certifié{" "}
              <a
                href="https://www.credly.com/badges/ef5b0ac1-3f3d-4744-bdbf-df487b701248/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 decoration-cyan-400/40 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-300"
              >
                AWS Solutions Architect – Associate
              </a>{" "}
              (SAA-C03). Je m'intéresse au DevOps, au MLOps, au Cloud Engineering et à l'ingénierie
              logicielle en général, avec un intérêt particulier pour le Deep Learning et le
              déploiement de modèles dans des environnements réels. J'aime concevoir des
              infrastructures robustes, automatiser les workflows et faire passer les applications
              à l'échelle.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "DevOps",
                "Cloud",
                "MLOps",
                "Software Engineering",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

                        <a
              href="https://www.credly.com/badges/ef5b0ac1-3f3d-4744-bdbf-df487b701248/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 py-3 pl-3 pr-6 backdrop-blur-sm transition-colors hover:border-cyan-400/50"
            >
              <img
                src="/projects/AWS_SAA.png"
                alt="Badge AWS Certified Solutions Architect – Associate"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                  Certification
                </p>
                <p className="font-medium text-slate-200 transition-colors group-hover:text-cyan-300">
                  AWS Solutions Architect – Associate
                </p>
                <p className="text-sm text-slate-500">SAA-C03 · Vérifier sur Credly ↗</p>
              </div>
            </a>
          </section>

          {/* SKILLS */}
          <section>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                  Compétences
                </p>

                <h2 className="text-4xl font-bold tracking-tight">
                  Mes Compétences
                </h2>
              </div>

              <span className="hidden font-mono text-xs text-slate-500 md:block">
                GRAPHE INTERACTIF // ZOOMER et EXPLORER
              </span>
            </div>

            <div className="h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-3 backdrop-blur-md transition-all hover:border-cyan-500/30">
              <PortfolioFlow />
            </div>
          </section>

          <ProjectsSection />

          {/* EXPERIENCE */}
          <section>
            <div className="mb-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                Parcours
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                Expérience Professionnelle
              </h2>
            </div>

            <div className="space-y-6">
              <article className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md">
                <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      Stagiaire Ingénieur Logiciel — Thales DMS
                    </h3>
                    <p className="text-cyan-300">Développement Web & Intégration LLM</p>
                  </div>

                  <span className="font-mono text-sm text-slate-500">
                    Janv 2026 — Juil 2026
                  </span>
                </div>

                <p className="text-slate-400">
                  Conception d'une interface d'interaction IA pour simulateur : développement d'API, d'outils d'orchestration, intégration de LLM locaux et distants, gestion de sessions conversationnelles et génération automatisée de scénarios.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md">
                <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      Stagiaire en Développement Logiciel — Thales DMS
                    </h3>
                    <p className="text-cyan-300">Développement Logiciel C++ / Qt</p>
                  </div>

                  <span className="font-mono text-sm text-slate-500">
                    Avr 2025 — Août 2025
                  </span>
                </div>

                <p className="text-slate-400">
                  Développement d'un logiciel d'édition de signaux intrapulsionnels en C++/Qt destiné à être intégré dans un simulateur d'environnement éléctromagnétique.
                </p>
              </article>
            </div>
          </section>

          {/* CONTACT */}
          <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 backdrop-blur-md">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
              Contact
            </p>

            <h2 className="mb-6 text-4xl font-bold tracking-tight">
              Me contacter
            </h2>

            <div className="flex flex-col gap-4 text-slate-300">
              <a
                href="mailto:yoan.louvois@gmail.com"
                className="transition hover:text-cyan-300"
              >
                📧 yoan.louvois@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/yoan-louvois-a74620238"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/yoanlouvois"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                🧑‍💻 GitHub
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}