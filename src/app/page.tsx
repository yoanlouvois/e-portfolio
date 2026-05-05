export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">

        <h1 className="mb-4 text-5xl font-bold">
          Hi, welcome to my GitHub
        </h1>

        <h2 className="mb-6 text-2xl text-slate-300">
          Software Engineer • DevOps • MLOps • Backend
        </h2>

        <p className="mb-16 max-w-2xl text-lg text-slate-400">
          🤖 Building scalable systems & production-ready ML pipelines
        </p>

        {/* ABOUT */}
        <div className="mb-16 w-full rounded-2xl border border-slate-700 bg-slate-900 p-8 text-left shadow-xl">
          <h3 className="mb-6 text-3xl font-semibold">
            🧠 About Me
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li>
              🎓 Engineering degree in <b>Computer Science & Applied Mathematics</b>
              <br />
              from <b>Polytech Paris-Saclay</b> (2026)
            </li>

            <li>
              ⚙️ Interested in <b>DevOps, MLOps, Cloud Engineering & Backend Systems</b>
            </li>

            <li>
              🤖 Passionate about <b>Deep Learning</b> and deploying models in real-world environments
            </li>

            <li>
              ☁️ I enjoy designing <b>robust infrastructures</b>, automating workflows, and scaling applications
            </li>
          </ul>
        </div>

        {/* TECH STACK */}
        <div className="mb-16 w-full rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl">
          <h3 className="mb-8 text-3xl font-semibold">
            🛠️ Tech Stack
          </h3>

          <img
            className="mx-auto"
            src="https://go-skill-icons.vercel.app/api/icons?i=py,cpp,js,tensorflow,sklearn,pandas,numpy,postgres,mongodb,docker,aws,kubernetes,opencv"
            alt="Tech stack"
          />
        </div>

        {/* CONTACT */}
        <div className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-8 text-left shadow-xl">
          <h3 className="mb-6 text-3xl font-semibold">
            📫 Connect with me
          </h3>

          <div className="space-y-4 text-slate-300">
            <p>
              🌐 Portfolio: Coming soon
            </p>

            <p>
              💼 LinkedIn:
              <br />
              <a
                className="text-blue-400 hover:underline"
                href="https://www.linkedin.com/in/yoan-louvois-a74620238"
                target="_blank"
              >
                www.linkedin.com/in/yoan-louvois-a74620238
              </a>
            </p>

            <p>
              📧 Email:
              <br />
              <a
                className="text-blue-400 hover:underline"
                href="mailto:yoan.louvois@gmail.com"
              >
                yoan.louvois@gmail.com
              </a>
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}