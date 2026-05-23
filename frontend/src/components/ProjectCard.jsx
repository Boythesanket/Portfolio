const ProjectCard = ({
  heading = "",
  subtitle = "",
  points = [],
  skillsUsed = [],
  image,
  status = "",
  projectNumber = "",
  href = "",
}) => {
  return (
    <article className="group w-full overflow-hidden border border-green-500/80 bg-[#050605] text-white shadow-[0_0_40px_rgba(34,197,94,0.08)] transition duration-300 hover:border-green-400 hover:shadow-[0_0_45px_rgba(34,197,94,0.16)]">
      <div className="relative h-56 overflow-hidden bg-black sm:h-64 lg:h-72">
        {image ? (
          <img
            src={image}
            alt={`${heading} project preview`}
            className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 grayscale-25"
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_58%_22%,rgba(74,222,128,0.34),transparent_24%),radial-gradient(circle_at_33%_38%,rgba(217,70,239,0.28),transparent_22%),linear-gradient(180deg,#07110f_0%,#020302_100%)]">
            <div className="absolute left-1/2 top-6 h-48 w-48 -translate-x-1/2 rounded-full border border-green-300/50 shadow-[0_0_55px_rgba(74,222,128,0.35)]"></div>
            <div className="absolute left-1/2 top-9 h-40 w-40 -translate-x-1/2 rounded-full border border-dashed border-cyan-300/40"></div>
            <div className="absolute left-12 top-14 h-36 w-28 border border-cyan-300/25 bg-cyan-300/8 backdrop-blur-sm"></div>
            <div className="absolute right-12 top-16 h-44 w-28 border border-violet-300/25 bg-violet-300/10 backdrop-blur-sm"></div>
            <div className="absolute left-1/2 top-10 h-52 w-36 -translate-x-1/2 border border-white/15 bg-white/10 backdrop-blur-sm">
              <span className="absolute left-5 top-8 h-7 w-24 bg-fuchsia-400/80"></span>
              <span className="absolute right-3 top-20 h-7 w-24 bg-green-400/80"></span>
              <span className="absolute left-4 top-32 h-7 w-28 bg-cyan-400/80"></span>
            </div>
            <div className="absolute inset-x-10 bottom-8 h-12 rounded-[50%] border border-green-300/25 shadow-[0_0_34px_rgba(34,197,94,0.22)]"></div>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/15 to-[#050605]"></div>
        <span className="absolute left-3 top-3 border border-green-400/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[3px] text-green-300 sm:tracking-[6px]">
          {status}
        </span>
      </div>

      <div className="relative px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="break-words font-mono text-[10px] uppercase tracking-[3px] text-zinc-500 sm:tracking-[6px]">
            Project/{projectNumber}
          </p>
          <a
            href={href}
            aria-label={`Open ${heading} project`}
            className="grid h-10 w-10 place-items-center border border-green-400/0 text-2xl text-white transition hover:border-green-400/40 hover:bg-green-400 hover:text-black"
          ></a>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h2 className="break-words font-[Unbounded] text-2xl font-extrabold uppercase leading-none text-green-400 sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="mt-2 break-words font-mono text-sm text-zinc-300">
              {subtitle}
            </p>
          </div>

          <a
            href={href}
            target="_blank"
            aria-label={`Visit ${heading}`}
            className="grid h-11 w-11 shrink-0 place-items-center border border-green-600 text-xl text-green-500 transition-all hover:border-none hover:bg-green-400 hover:text-black sm:h-12 sm:w-12"
          >
            <i className="ri-arrow-right-up-line "></i>
          </a>
        </div>

        {points.length > 0 && (
          <ul className="mt-5 space-y-3 font-mono text-sm leading-5 text-zinc-300">
            {points.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="shrink-0 text-green-400">{">"}</span>
                <span className="min-w-0 break-words">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {skillsUsed.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {skillsUsed.map((skill) => (
              <span
                key={skill}
                className="border border-green-400/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[2px] text-zinc-200 sm:tracking-[3px]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
