import HeadBox from "../components/HeadBox";

const Education = () => {
  const education = [
    {
      title: "BCA — Bachelor in Computer Applications",
      date: "Present",
      place: "Indrashil University",
    },
    {
      title: "HSC — 12th Grade",
      date: "2025",
      place: "Delhi Public School",
    },
  ];

  return (
    <main className="w-full px-4 py-7 mt-20 text-white">
      <HeadBox
        title={"Education"}
        subtitle={"// 05 — learning"}
        skill={"education"}
      />

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="relative w-full lg:w-2/3 xl:w-1/2">
          <div className="space-y-9">
            {education.map((item) => {
              const dateOnRight = item.date.length <= 4;

              return (
                <article key={item.title} className="relative pl-9">
                  <div className="absolute left-0 top-3 grid h-5 w-5 place-items-center rounded-full border border-green-400 bg-black text-green-400">
                    <i className="ri-graduation-cap-line text-[10px] leading-none"></i>
                  </div>

                  <div className="min-h-28 border-l border-green-500/80 bg-[#060706] px-4 py-5 transition duration-300 hover:border-green-400 hover:bg-[#090A09] sm:px-6">
                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                      <div className="min-w-0">
                        <h2 className="break-words font-[Unbounded] text-base font-extrabold leading-tight text-white sm:text-xl">
                          {item.title}
                        </h2>
                        <p
                          className={`mt-3 break-words font-mono text-[10px] font-semibold uppercase tracking-[3px] text-green-400 sm:tracking-[5px] ${
                            dateOnRight ? "sm:hidden" : ""
                          }`}
                        >
                          {item.date}
                        </p>
                        <p className="mt-2 break-words font-mono text-sm text-zinc-300 sm:text-[15px]">
                          {item.place}
                        </p>
                      </div>

                      {dateOnRight && (
                        <p className="hidden shrink-0 pt-7 font-mono text-[10px] font-semibold uppercase tracking-[5px] text-green-400 sm:block">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
