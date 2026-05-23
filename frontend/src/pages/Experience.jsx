import HeadBox from "../components/HeadBox";

const Experience = () => {
  const experience = [
    {
      role: "Full Stack Developer",
      subtitle: "Self-Employed / Personal Projects",
      date: "Nov 2024 — Present",
      points: [
        "Developed and deployed multiple full-stack applications",
        "Applied modern development practices and version control using Git",
        "Focused on building scalable and user-friendly systems",
      ],
    },
  ];

  return (
    <main className="w-full px-4 py-7 mt-20 text-white">
      <HeadBox
        title={"Experience"}
        subtitle={"// 04 — career"}
        skill={"experience"}
      />

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-green-500/30 sm:block"></div>

          <div className="space-y-5">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${item.date}`}
                className="group relative grid gap-4 border border-green-900 bg-[#0A0A0A] p-5 transition duration-300 hover:border-green-500 sm:grid-cols-[2.5rem_1fr] sm:p-6"
              >
                <div className="hidden flex-col items-center sm:flex">
                  <div className="grid h-9 w-9 place-items-center border border-green-500 bg-black text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.16)] transition group-hover:bg-green-400 group-hover:text-black">
                    <i className="ri-briefcase-line text-base"></i>
                  </div>
                  {index !== experience.length - 1 && (
                    <div className="mt-3 h-full w-px bg-green-500/30"></div>
                  )}
                </div>

                <div className="min-w-0 border-l border-zinc-700 pl-4 transition group-hover:border-green-400 sm:border-l-0 sm:pl-0">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="break-words font-mono text-[10px] uppercase tracking-[3px] text-green-500 sm:text-[11px] sm:tracking-[5px]">
                        Experience/{String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 font-[Unbounded] text-xl font-extrabold uppercase leading-tight text-white sm:text-2xl">
                        {item.role}
                      </h2>
                      <p className="mt-2 font-mono text-sm text-zinc-400">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="w-fit border border-green-500/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[2px] text-green-300 sm:text-[11px]">
                      {item.date}
                    </p>
                  </div>

                  <ul className="mt-5 grid gap-3 font-mono text-sm leading-6 text-zinc-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="shrink-0 text-green-400">{">"}</span>
                        <span className="min-w-0 break-words">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 border border-green-900 bg-green-400/5 p-4 font-mono text-sm text-zinc-400">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 bg-green-400"></span>
              <p>
                Building production-minded projects with full-stack workflows,
                clean UX, and practical deployment experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
