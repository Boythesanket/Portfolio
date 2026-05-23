import React from "react";

const HeadBox = ({ subtitle, title, skill }) => {
  return (
    <>
      {/* head */}
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 border-b border-green-900 py-4">
        <div className="min-w-0 text-[13px]">
          <p className="mb-2 break-words font-mono text-[10px] uppercase tracking-[3px] text-green-500 sm:text-[13px] sm:tracking-[5px]">
            {subtitle}
          </p>
          <h1 className="break-words font-[Unbounded] text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>

        <div className="hidden shrink-0 text-right font-mono uppercase lg:block">
          <p className="text-[11.5px] tracking-wider text-gray-500">
            section/{skill}
          </p>
          <p className="text-[11.5px] tracking-wider text-green-400">●ready</p>
        </div>
      </div>
    </>
  );
};

export default HeadBox;
