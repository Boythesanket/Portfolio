import React, { useEffect, useState } from "react";

const SkillBox = ({ title, content }) => {
  const [skills, setSkills] = useState([]);

  

  useEffect(() => {
    setSkills(content);
  }, []);

  return (
    <>
      <div className="w-full border border-green-900 bg-[#0A0A0A] p-3 hover:border-green-600">
        <h1 className="break-words px-3 font-[Unbounded] text-base font-extrabold uppercase sm:text-lg">
          {title}
        </h1>

        <div className="mt-3">
          {skills.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center gap-2 p-2 text-[14px] text-gray-300 hover:text-green-400">
                <i
                  className={`${item.logo} flex h-8 w-8 shrink-0 items-center justify-center border border-gray-500 px-1 text-lg`}
                ></i>
                <h1 className="min-w-0 break-words font-mono text-sm sm:text-base">
                  {item.name}
                </h1>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillBox;
