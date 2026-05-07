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
        <nav className="mb-20 flex items-center justify-between text-sm text-slate-400">
          <span className="font-mono tracking-widest text-cyan-500/80">
            YOAN.LOUVOIS
          </span>
          <span className="font-mono opacity-50">ePortfolio // 2026</span>
        </nav>

        <div className="flex flex-col gap-28 pb-24">
          {/* PRESENTATION */}
          <section className="flex min-h-[75vh] flex-col justify-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.5em] text-cyan-400">
              Software Engineer
            </p>

            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tight md:text-8xl">
              Yoan Louvois
            </h1>

            <p className="mb-8 max-w-3xl text-2xl font-medium text-slate-200">
              Software Engineering Intern at{" "}
              <span className="text-cyan-300">Thales DMS</span> & Engineering
              Student at{" "}
              <span className="text-cyan-300">Polytech Paris-Saclay</span>.
            </p>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
              I am a software engineering student focused on backend
              development, cloud infrastructure, and production-ready systems.
              I am particularly interested in DevOps and MLOps: building cloud
              solutions on AWS, automating workflows, and designing reliable
              machine learning pipelines.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Backend",
                "DevOps",
                "MLOps",
                "AWS",
                "Cloud Engineering",
                "ML Automation",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                  Skills
                </p>

                <h2 className="text-4xl font-bold tracking-tight">
                  Skills Architecture
                </h2>
              </div>

              <span className="hidden font-mono text-xs text-slate-500 md:block">
                INTERACTIVE GRAPH // DRAG TO EXPLORE
              </span>
            </div>

            <div className="h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-3 backdrop-blur-md transition-all hover:border-cyan-500/30">
              <PortfolioFlow />
            </div>
          </section>

          <ProjectsSection />

          {/* NEXT SECTIONS PLACEHOLDER */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-slate-400">
            More sections coming soon: projects, experience, education, and
            contact.
          </section>
        </div>
      </section>
    </main>
  );
}