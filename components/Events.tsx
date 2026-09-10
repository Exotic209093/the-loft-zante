const events = [
  {
    tag: "AFTER DARK",
    day: "FRI",
    date: "11",
    month: "SEPT",
    title: "Friday @ LOFT",
    detail: "DJ TBC · 22:00 — Late",
    desc: "Good drinks. Great people.",
  },
  {
    tag: "AFTER DARK",
    day: "SAT",
    date: "12",
    month: "SEPT",
    title: "Saturday Sessions",
    detail: "DJ TBC · 21:00 — Late",
    desc: "Cocktails, music and more.",
  },
  {
    tag: "LOUNGE SESSIONS",
    day: "SUN",
    date: "13",
    month: "SEPT",
    title: "Sunday Chill",
    detail: "Background music · 18:00 — Late",
    desc: "Drinks, friends, good vibes.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-loft-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-green uppercase tracking-[0.2em] text-sm mb-3">
            Make plans. Make memories.
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            What&rsquo;s on at LOFT
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-loft-dark-card border border-loft-green/15 rounded-2xl overflow-hidden hover:border-loft-green/40 transition-colors duration-300"
            >
              {/* Date badge */}
              <div className="bg-loft-green/10 px-6 py-4 flex items-center justify-between">
                <span className="text-loft-green uppercase tracking-[0.15em] text-xs font-semibold">
                  {event.tag}
                </span>
                <div className="text-right">
                  <span className="text-loft-cream-dim text-xs uppercase">{event.day}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold text-loft-cream">{event.date}</span>
                    <span className="text-loft-cream-dim text-xs uppercase">{event.month}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-loft-cream mb-2">
                  {event.title}
                </h3>
                <p className="text-loft-green text-sm font-medium mb-3">{event.detail}</p>
                <p className="text-loft-cream-dim text-sm leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-loft-cream-dim text-sm italic">
            Demo event programme · Dates and performers to be confirmed.
          </p>
          <a
            href="https://www.instagram.com/ocallaghansloft/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-loft-green hover:text-loft-green-light transition-colors font-medium mt-4"
          >
            Follow @ocallaghansloft for updates
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}