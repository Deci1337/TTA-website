import { useState } from "react";

export function MarqueeRow({ items, direction = "left", className = "" }) {
  const [paused, setPaused] = useState(false);

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`flex w-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`marquee-track flex flex-nowrap gap-4 px-4 ${direction === "right" ? "marquee-right" : "marquee-left"}`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            className="relative w-[360px] flex-shrink-0 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            {item.icon && <div className="mb-4">{item.icon}</div>}
            <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
            <p className="text-base leading-relaxed text-white/80">{item.desc ?? item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
