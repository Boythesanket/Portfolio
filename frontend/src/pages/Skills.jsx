import React from "react";
import HeadBox from "../components/HeadBox";
import SkillBox from "../components/SkillBox";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", logo: "ri-javascript-fill" },
    { name: "React.js", logo: "ri-reactjs-fill" },
    { name: "HTML", logo: "ri-html5-fill" },
    { name: "CSS", logo: "ri-css3-fill" },
    { name: "Tailwind CSS", logo: "ri-tailwind-css-fill" },
  ];

  const backendSkills = [
    { name: "Node.js", logo: "ri-nodejs-fill" },
    { name: "Express.js", logo: "devicon-express-original" },
    { name: "MongoDB", logo: "devicon-mongodb-plain" },
  ];

  const devops = [
    { name: "Git", logo: "devicon-git-plain" },
    { name: "GitHub", logo: "devicon-github-original" },
  ];

  const others = [
    { name: "C", logo: "devicon-c-original" },
    { name: "Java", logo: "devicon-java-plain" },
    { name: "Python", logo: "devicon-python-plain" },
    { name: "Authentication", logo: "ri-user-forbid-line" },
  ];

  return (
    <>
      <main className="w-full px-4 py-7 mt-20 text-white">
        <HeadBox
          title={"skills & tools"}
          subtitle={"// 02 — stack"}
          skill={"skills"}
        />

        {/* boxes */}
        <div className="mx-auto mt-5 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SkillBox title={"frontend"} content={frontendSkills} />
          <SkillBox title={"backend"} content={backendSkills} />
          <SkillBox title={"DevOps / Cloud"} content={devops} />
          <SkillBox title={"others"} content={others} />
        </div>
      </main>
    </>
  );
};

export default Skills;
