const CodeCard = () => {
  return (
    <>
      <main className="w-full max-w-xl overflow-hidden rounded-md border border-green-400/30 bg-zinc-950 shadow-[0_24px_70px_rgba(34,197,94,0.14)]">
        <nav className="flex items-center justify-between gap-2 border-b border-white/10 bg-black/80 px-3 py-3 sm:gap-4 sm:px-4">
          <div className="flex shrink-0 gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.45)]"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.35)]"></div>
            <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.45)]"></div>
          </div>

          <div className="min-w-0">
            <p className="truncate font-mono text-xs uppercase text-zinc-500 sm:text-[13px]">
              subhash@portfolio:~
            </p>
          </div>

          <div className="shrink-0">
            <p className="font-mono text-xs text-green-300 sm:text-[13px]">
              ●live
            </p>
          </div>
        </nav>

        <section className="bg-[#0A0A0A] p-4 sm:p-5">
          <ul className="flex flex-col gap-2 wrap-break-words font-mono text-sm leading-6">
            <li className="text-gray-300">
              <span className="text-green-400">$</span> whoami
            </li>
            <li className="text-zinc-100">
              <span className="text-green-400">{">"}</span> Subhash Ahirwar
            </li>
            <li className="text-gray-300">
              <span className="text-green-400">$</span> cat role.txt
            </li>
            <li className="text-zinc-100">
              <span className="text-green-400">{">"}</span> Full Stack
              Developer
            </li>
            <li className="text-gray-300">
              <span className="text-green-400">$</span> stack --short
            </li>
            <li className="text-zinc-100">
              <span className="text-green-400">{">"}</span> react · node · mongo
              · express · js
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default CodeCard;
