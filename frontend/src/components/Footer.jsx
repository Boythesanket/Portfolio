const Footer = () => {
  const links = [
    {
      href: "https://github.com/Boythesanket",
      label: "Github",
      icon: "ri-github-line",
    },
    {
      href: "https://www.linkedin.com/in/boythesankett/",
      label: "Linkedin",
      icon: "ri-linkedin-line",
    },
    {
      href: "mailto:boythesanket@gmail.com",
      label: "Email",
      icon: "ri-mail-line",
    },
  ];

  return (
    <footer className="mt-20 border-t border-green-900/70 bg-[#030403] px-4 py-9 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="font-[Unbounded] text-base font-extrabold text-white">
            Subhash Ahirwar
          </h2>
          <p className="mt-2 break-words font-mono text-[10px] lowercase tracking-[1px] text-zinc-600 sm:tracking-[2px]">
            // built with react · node · mongo — © 2026
          </p>
        </div>

        <div className="flex gap-3 text-zinc-500">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="grid h-8 w-8 place-items-center border border-green-900 text-sm transition hover:border-green-400 hover:text-green-400"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
