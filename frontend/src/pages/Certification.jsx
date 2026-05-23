import HeadBox from "../components/HeadBox";

const Certification = () => {
  const certificates = [
    {
      date: "NOV 2025",
      role: "Frontend Web Developer Intern",
      issuer: "Yuvalntern",
      desc: "Built responsive web applications using HTML, CSS, JavaScript.",
    },
    {
      date: "AUG 2023",
      role: "Python Programming",
      issuer: "Great Learning",
      desc: "Learned core programming concepts and problem-solving.",
    },
  ];

  return (
    <main className="w-full px-4 py-7 mt-20 text-white">
      <HeadBox
        title={"Certifications"}
        subtitle={"// 06 — credentials"}
        skill={"certifications"}
      />

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={`${certificate.role}-${certificate.date}`}
              className="group relative min-h-55 overflow-hidden border border-green-900 bg-[#070807] px-5 py-6 transition duration-300 hover:border-green-400 sm:px-8 sm:py-7"
            >
              <div className="absolute -right-10 -top-11 h-26 w-26 rounded-full bg-green-400/8 transition duration-300 group-hover:bg-green-400/12"></div>

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center border border-green-500 text-green-400">
                    <i className="ri-award-line text-sm"></i>
                  </div>
                  <p className="break-words font-mono text-[10px] uppercase tracking-[3px] text-green-400 sm:tracking-[6px]">
                    {certificate.date}
                  </p>
                </div>

                <h2 className="max-w-lg break-words font-[Unbounded] text-xl font-extrabold uppercase leading-[1.12] text-white sm:text-2xl">
                  {certificate.role}
                </h2>
                <p className="mt-2 break-words font-mono text-sm text-zinc-400">
                  {certificate.issuer}
                </p>
                <p className="mt-2 break-words font-mono text-sm leading-6 text-zinc-500">
                  {certificate.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Certification;
