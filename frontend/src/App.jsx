import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Lenis from "lenis";
import { Toaster } from "sonner";
import FadeIn from "./components/FadeIn";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          classNames: {
            toast:
              "!border !border-green-900 !bg-[#070807] !font-mono !text-zinc-100 !shadow-[0_18px_45px_rgba(0,0,0,0.45)]",
            title: "!text-sm !font-bold !tracking-[0.3px]",
            description: "!text-xs !text-zinc-400",
            success: "!border-green-500/70",
            error: "!border-red-500/70",
            warning: "!border-yellow-400/70",
            info: "!border-blue-400/70",
            actionButton:
              "!bg-green-400 !font-mono !text-xs !font-bold !text-black hover:!bg-green-300",
            cancelButton:
              "!bg-zinc-900 !font-mono !text-xs !text-zinc-200 hover:!bg-zinc-800",
          },
          style: {
            borderRadius: "0px",
            padding: "14px 16px",
          },
        }}
      />
      <Navbar />

      <FadeIn>
        <div id="home">
          <Hero />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="about">
          <AboutMe />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="skills">
          <Skills />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="projects">
          <Projects />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="experience">
          <Experience />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="education">
          <Education />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="certification">
          <Certification />
        </div>
      </FadeIn>

      <FadeIn>
        <div id="contact">
          <Contact />
        </div>
      </FadeIn>
      <Footer />
    </>
  );
};

export default App;
