import React from "react";

const AboutBoxes = ({ title, desc }) => {
  return (
    <>
      <div className="h-full w-full border border-green-900 p-3">
        <h1 className="text-3xl font-extrabold font-[Unbounded]">{title}</h1>
        <p className="break-words font-mono text-[11px] uppercase tracking-[2px] text-gray-500 sm:tracking-widest">
          {desc}
        </p>
      </div>
    </>
  );
};

export default AboutBoxes;
