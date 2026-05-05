import PortfolioFlow from "@/components/PortfolioFlow";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e40af55,transparent_35%),radial-gradient(circle_at_bottom_right,#9333ea44,transparent_35%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-12">
        <nav className="mb-16 flex items-center justify-between text-sm text-slate-400">
          <span className="font-mono">YOAN.LOUVOIS</span>
          <span className="font-mono">ePortfolio // 2026</span>
        </nav>

        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.4em] text-cyan-300">
              Software Engineer
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Building systems
              <br />
              for the future.
            </h1>

            <p className="mb-8 max-w-xl text-lg text-slate-300">
              DevOps • MLOps • Backend • Cloud Engineering
              <br />
              Designing scalable infrastructures and production-ready ML pipelines.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Python", "Docker", "Kubernetes", "AWS", "TensorFlow", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative h-[620px] rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-4 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur">
            <PortfolioFlow />
          </div>
        </div>
      </section>
    </main>
  );
}