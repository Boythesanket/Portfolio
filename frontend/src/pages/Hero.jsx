import CodeCard from "../components/CodeCard";

const Hero = () => {
  return (
    <>
      <main className="flex w-full items-center px-4 py-10 text-white sm:px-8 lg:min-h-[calc(100vh-73px)] lg:py-16">
        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 lg:block">
          <div className="lg:max-w-[62%]">
            <p className="mb-4 break-words font-mono text-xs tracking-[2px] text-green-400 min-[420px]:text-sm sm:text-base sm:tracking-widest">
              // PORTFOLIO . V2026 - LIVE
            </p>
            <h1 className="break-words font-[Unbounded] text-[2.45rem] font-extrabold uppercase leading-[0.98] tracking-normal min-[420px]:text-5xl sm:text-7xl lg:text-8xl">
              Building <br />
              <span
                style={{
                  textShadow:
                    "0 0 10px rgba(74, 222, 128, 0.5), 0 0 24px rgba(74, 222, 128, 0.25)",
                }}
                className="text-[#4ade80]"
              >
                scalable
              </span>{" "}
              <br />
              web <br />
              experience
            </h1>
          </div>
          <p className="max-w-2xl font-mono text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg lg:max-w-[58%]">
            19-year-old developer passionate about full stack development,
            finance education, and creating products that solve real problems.
          </p>

          <div className="flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:flex-wrap">
            <div className="flex w-full flex-col gap-3 min-[520px]:w-auto min-[520px]:flex-row sm:gap-4">
              <a href="#contact" className="cursor-pointer border bg-green-400 px-5 py-4 text-center font-mono text-xs font-semibold uppercase tracking-[2px] text-black hover:bg-green-400/80 sm:px-7 sm:text-sm sm:tracking-widest">
                execute_contact()
              </a>

              <a href="#projects" className="cursor-pointer border border-gray-500 px-5 py-4 text-center font-mono text-xs uppercase tracking-wide text-white hover:border-green-400 hover:text-green-400 sm:px-7 sm:text-sm">
                View_Source <i className="ri-arrow-right-down-line"></i>
              </a>
            </div>

            {/* icons */}
            <div className="flex gap-2 border-gray-500 text-gray-500">
              <a
                href="https://github.com/Boythesanket"
                target="_blank"
                className="cursor-pointer border px-3 py-2 font-mono uppercase hover:border-green-400 hover:text-green-400"
              >
                <i className="ri-github-line text-xl"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/boythesankett/"
                target="_blank"
                className="cursor-pointer border px-3 py-2 font-mono uppercase hover:border-green-400 hover:text-green-400"
              >
                <i className="ri-linkedin-box-line text-xl"></i>
              </a>

              <a
                href="mailto:boythesanket@gmail.com"
                target="_blank"
                className="cursor-pointer border px-3 py-2 font-mono uppercase hover:border-green-400 hover:text-green-400"
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
          </div>

          <section className="w-full lg:absolute lg:right-0 lg:top-12 lg:mt-0 lg:w-[34%]">
            <CodeCard />
          </section>

          <div className="mt-5 flex flex-col items-center lg:mt-10">
            <p className="text-gray-500 font-mono text-[13px] tracking-[6px]">
              SCROLL
            </p>
            <i className="ri-arrow-down-line text-green-400 animate-bounce"></i>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
