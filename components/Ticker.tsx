export default function Ticker() {
  const items = [
    "GOOD DRINKS. GREAT PEOPLE.",
    "COCKTAILS & CONVERSATION",
    "LATE NIGHTS AT LOFT",
    "GOOD DRINKS. GREAT PEOPLE.",
    "COCKTAILS & CONVERSATION",
    "LATE NIGHTS AT LOFT",
  ];

  return (
    <section className="py-6 bg-loft-green overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-loft-dark font-semibold uppercase tracking-[0.2em] text-sm flex items-center gap-8"
          >
            {item}
            <span className="text-loft-dark/60">&#10035;</span>
          </span>
        ))}
      </div>
    </section>
  );
}