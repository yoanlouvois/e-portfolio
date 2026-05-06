import DevOpsFlow from "@/components/DevOpsFlow";
import LanguagesFlow from "@/components/LanguagesFlow";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      
      {/* BACKGROUND FIXE - Reste en place au scroll */}
      <div className="fixed inset-0 z-0">
        {/* Dégradés principaux */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e40af55,transparent_40%),radial-gradient(circle_at_bottom_right,#9333ea44,transparent_40%)]" />
        
        {/* Optionnel : Un léger grain ou effet de texture pour le côté "premium" */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* CONTENT - Scrollable par dessus le fond */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        
        {/* NAV */}
        <nav className="mb-16 flex items-center justify-between text-sm text-slate-400">
          <span className="font-mono tracking-widest text-cyan-500/80">YOAN.LOUVOIS</span>
          <span className="font-mono opacity-50">ePortfolio // 2026</span>
        </nav>

        <div className="flex flex-col gap-32">
  
          {/* HERO SECTION */}
          <div className="flex min-h-[80vh] flex-col justify-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.5em] text-cyan-400">
              Software Engineer
            </p>

            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tight md:text-8xl">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">systems</span>
              <br />
              for the future.
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
              DevOps • MLOps • Backend • Cloud Engineering
              <br />
              <span className="text-slate-500">Designing scalable infrastructures and production-ready ML pipelines.</span>
            </p>

            <div className="flex flex-wrap gap-3">
              {["Python", "Docker", "Kubernetes", "AWS", "TensorFlow", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* FLOW SECTIONS */}
          <section className="space-y-32 pb-24">
            
            {/* DEVOPS */}
            <div className="group">
              <div className="mb-8 flex items-end justify-between">
                <h2 className="text-4xl font-bold tracking-tight">
                  <span className="text-cyan-500">01.</span> DevOps / MLOps
                </h2>
                <span className="hidden font-mono text-xs text-slate-500 md:block">INTERACTIVE GRAPH // DRAG TO EXPLORE</span>
              </div>

              <div className="h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all group-hover:border-cyan-500/30">
                <DevOpsFlow />
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="group">
              <div className="mb-8 flex items-end justify-between">
                <h2 className="text-4xl font-bold tracking-tight">
                  <span className="text-purple-500">02.</span> Langages & Frameworks
                </h2>
                <span className="hidden font-mono text-xs text-slate-500 md:block">INTERACTIVE GRAPH // DRAG TO EXPLORE</span>
              </div>

              <div className="h-[850px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all group-hover:border-purple-500/30">
                <LanguagesFlow />
              </div>
            </div>

          </section>
        </div>
      </section>
    </main>
  );
}