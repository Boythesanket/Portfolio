export default function ProfileCard() {
  return (
    <div className="w-full overflow-hidden border border-green-500/30 bg-[#0A0A0A] font-mono shadow-[0_0_30px_rgba(74,222,128,0.08)]">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-green-500/20 bg-black px-4 py-3 sm:px-5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        <span className="ml-1 min-w-0 truncate text-xs tracking-[3px] text-gray-500 sm:ml-4 sm:tracking-[4px]">
          PROFILE.JSON
        </span>
      </div>

      {/* Content */}
      <div className="p-4 text-xs sm:p-6 sm:text-sm">
        <pre className="whitespace-pre-wrap break-words text-white">
          {`{
  "name": `}
          <span className="text-green-400">"Subhash Ahirwar"</span>
          {`,
  "role": `}
          <span className="text-green-400">
            "Full Stack Developer"
          </span>
          {`,
  "location": `}
          <span className="text-green-400">"Ahmedabad, Gujarat"</span>
          {`,
  "available_for_hire": `}
          <span className="text-yellow-400">true</span>
          {`,
  "focus": [`}
          {"\n"}
          <span className="text-green-400">"full-stack"</span>,{"\n"}
          <span className="text-green-400">"scalable systems"</span>,{"\n"}
          <span className="text-green-400">"clean UX"</span>
          {"\n"}
          {`  ],
  "building": `}
          <span className="text-green-400">
            "Fininja — gamified finance learning"
          </span>
          {`
}`}
        </pre>
      </div>
    </div>
  );
}
