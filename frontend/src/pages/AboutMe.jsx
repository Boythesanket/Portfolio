import React from "react";
import ProfileCard from "../components/ProfileCard";
import AboutBoxes from "../components/AboutBoxes";
import HeadBox from "../components/HeadBox";

const AboutMe = () => {
  return (
    <>
      <main className="mt-10 w-full px-4 py-7 text-white">
        
        <HeadBox title={"about me"} subtitle={"// 01 - profile"} skill={"about"}/>

        {/* content */}

        <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="min-w-0">
            <p className="font-mono text-base leading-7 sm:text-lg lg:text-xl">
              Passionate Full Stack Developer with hands-on experience in
              building scalable web applications using modern technologies like
              React.js, Node.js, and MongoDB. Strong interest in
              problem-solving, backend systems, and creating user-friendly
              digital experiences. Currently developing a gamified finance
              learning platform to simplify complex concepts.
            </p>

            <p className="mt-7 font-mono text-sm leading-7 text-gray-400 sm:text-base">
              I care about clean APIs, pragmatic UI, and shipping things that
              actually work. When I'm not coding, I'm sketching the next project
              on the whiteboard or breaking things to learn how they work.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div>
                <AboutBoxes title={"3+"} desc={"projects"} />
              </div>
              <div>
                <AboutBoxes title={"2"} desc={"years coding"} />
              </div>

              <div>
                <AboutBoxes title={"∞"} desc={"coffee/days"} />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <ProfileCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
