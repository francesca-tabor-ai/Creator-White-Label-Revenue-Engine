"use client";

const logos = [
  "Apex Creator Co",
  "Velocity MCN",
  "Luminary Agency",
  "Monetize Labs",
  "CreatorStack",
  "RevenueFirst",
  "Pulse Networks",
  "BrandForge",
];

export function LogosMarquee() {
  return (
    <div className="mt-10 overflow-hidden">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 text-lg font-semibold text-slate-400"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
