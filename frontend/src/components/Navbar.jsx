import { useState } from "react";

const Navbar = () => {
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  const [activeMenu, setActiveMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-400/20 bg-black/85 px-3 py-3 shadow-[0_10px_40px_rgba(34,197,94,0.12)] backdrop-blur-xl sm:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 sm:gap-5">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-lg tracking-normal text-green-300"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-green-400/30 bg-green-400/10 text-sm text-green-200 shadow-[0_0_24px_rgba(34,197,94,0.18)]">
            ./
          </span>
          <span className="hidden text-white sm:inline">
            <span className="text-green-300">Subhash</span>
            <span className="text-green-500/70">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/3 p-1 font-mono text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                onClick={() => scrollToSection(`${item.toLowerCase()}`)}
                href={`#${item.toLowerCase()}`}
                className="block rounded px-4 py-2 transition hover:bg-green-400/10 hover:text-green-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-md bg-green-400 px-3 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[1px] text-black shadow-[0_0_28px_rgba(74,222,128,0.25)] transition hover:bg-green-300 hover:shadow-[0_0_34px_rgba(74,222,128,0.38)] focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-black sm:px-4 sm:text-[12px] sm:tracking-widest"
          >
            Hire_Me()
          </a>

          <button
            type="button"
            onClick={() => setActiveMenu((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/4 text-green-200 transition hover:border-green-400/40 hover:bg-green-400/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={activeMenu}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition ${
                  activeMenu ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition ${
                  activeMenu ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition ${
                  activeMenu ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {activeMenu && (
        <div className="mx-auto mt-3 max-w-6xl rounded-md border border-green-400/20 bg-zinc-950/95 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.45)] md:hidden">
          <ul className="font-mono text-sm text-zinc-200">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveMenu(false)}
                  className="block rounded px-4 py-3 transition hover:bg-green-400/10 hover:text-green-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
