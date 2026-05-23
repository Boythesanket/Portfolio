import { useState } from "react";
import HeadBox from "../components/HeadBox";
import { BACKEND_URL } from "../App";
import { toast } from "sonner";

const Contact = () => {
  const contactItems = [
    {
      icon: "ri-mail-line",
      label: "Email",
      value: "boythesanket@gmail.com",
    },

    {
      icon: "ri-map-pin-line",
      label: "Location",
      value: "Ahmedabad, Gujarat",
    },
    {
      icon: "ri-github-line",
      label: "Github",
      value: "@Boythesanket",
    },
    {
      icon: "ri-linkedin-line",
      label: "Linkedin",
      value: "@boythesankett",
    },
  ];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          description,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.success) {
          toast.success(data?.message);
          setName("");
          setEmail("");
          setDescription("");
        } else {
          toast.error(data?.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main id="contact" className="w-full px-4 py-7 mt-20 text-white">
      <HeadBox
        title={"Let's build"}
        subtitle={"// 07 — get in touch"}
        skill={"contact"}
      />

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <aside className="pt-1">
            <p className="max-w-md font-mono text-base leading-7 text-zinc-200 sm:text-lg">
              Open to internships, freelance gigs and collaborations. Drop a
              line and I'll get back to you fast.
            </p>

            <div className="mt-9 space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center border border-green-500/60 text-green-400">
                    <i className={`${item.icon} text-base`}></i>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[5px] text-zinc-600">
                      {item.label}
                    </p>
                    <p className="font-mono text-white sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="border border-green-900 bg-[#070807] p-7 sm:p-8"
          >
            <div className="flex items-center gap-2 border-b border-green-900 pb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <p className="ml-3 font-mono text-[10px] uppercase tracking-[4px] text-zinc-500">
                compose_message.sh
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[5px] text-green-400">
                  // Name
                </span>
                <input
                  required
                  type="text"
                  value={name}
                  placeholder="Your full name"
                  className="mt-3 h-12 w-full border border-green-900 bg-black px-4 font-mono text-sm text-zinc-200 outline-none placeholder:text-zinc-400 focus:border-green-400"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="block">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[5px] text-green-400">
                  // Email
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  placeholder="you@domain.com"
                  className="mt-3 h-12 w-full border border-green-900 bg-black px-4 font-mono text-sm text-zinc-200 outline-none placeholder:text-zinc-400 focus:border-green-400"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[5px] text-green-400">
                // Message
              </span>
              <textarea
                required
                value={description}
                placeholder="Tell me about your project, role, or just say hi..."
                className="mt-3 h-36 w-full resize-none border border-green-900 bg-black px-4 py-4 font-mono text-sm leading-6 text-zinc-200 outline-none placeholder:text-zinc-400 focus:border-green-400 sm:h-40"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-zinc-600">
                ↳ Secure · encrypted in transit
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className="flex h-11 items-center justify-center bg-green-400 px-7 font-mono text-[11px] font-extrabold uppercase tracking-[1px] text-black transition hover:bg-green-300 disabled:cursor-not-allowed disabled:bg-green-700 disabled:text-zinc-300 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message() <i className="ri-send-plane-line ml-2"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
