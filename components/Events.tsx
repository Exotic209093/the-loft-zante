import { Calendar, Mic, PartyPopper } from "lucide-react";

const events = [
  {
    icon: Mic,
    title: "Live DJ Sets",
    schedule: "Every Night",
    description:
      "Our resident and guest DJs spin everything from chart hits to throwback anthems. The dance floor comes alive after midnight.",
  },
  {
    icon: PartyPopper,
    title: "Theme Nights",
    schedule: "Weekly",
    description:
      "Fancy dress, neon parties, foam nights, and more. Follow our socials to see what's coming up this week.",
  },
  {
    icon: Calendar,
    title: "Special Events",
    schedule: "Seasonal",
    description:
      "Opening parties, closing celebrations, holiday bashes, and guest performances. The biggest nights in Zante happen here.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-loft-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-terracotta uppercase tracking-[0.2em] text-sm mb-3">
            What's On
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            Events & Entertainment
          </h2>
          <p className="text-loft-stone text-lg max-w-2xl mx-auto leading-relaxed">
            There's always something happening at The Loft. Check what's on during your stay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="relative bg-loft-dark/50 border border-loft-amber/10 rounded-2xl p-8 overflow-hidden group hover:border-loft-amber/30 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-loft-amber/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-loft-amber/10 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-loft-terracotta/10 rounded-lg flex items-center justify-center">
                    <event.icon size={20} className="text-loft-terracotta" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-loft-amber font-medium">
                    {event.schedule}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-loft-cream mb-3">
                  {event.title}
                </h3>
                <p className="text-loft-stone leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/ocallaghansloft/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-loft-amber hover:text-loft-terracotta transition-colors font-medium"
          >
            Follow @ocallaghansloft for updates
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}