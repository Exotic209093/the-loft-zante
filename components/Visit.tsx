import { MapPin, Clock, Instagram } from "lucide-react";

const hours = [
  { days: "Monday – Thursday", time: "19:30 – Late" },
  { days: "Friday – Saturday", time: "19:30 – Late" },
  { days: "Sunday", time: "19:30 – Late" },
];

export default function Visit() {
  return (
    <section id="visit" className="py-24 bg-loft-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-green uppercase tracking-[0.2em] text-sm mb-3">
            Your next night starts here
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            See you at LOFT
          </h2>
          <p className="text-loft-cream-dim text-lg max-w-xl mx-auto">
            Good drinks. Great people. Find your way to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-loft-green/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <MapPin size={20} className="text-loft-green" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-loft-cream mb-1">
                  O&rsquo;Callaghan&rsquo;s LOFT
                </h3>
                <p className="text-loft-cream-dim leading-relaxed">
                  Laganas Main Strip
                  <br />
                  Zakynthos, Greece 29100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-loft-green/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Clock size={20} className="text-loft-green" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-loft-cream mb-3">
                  Opening Hours
                </h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <span className="text-loft-cream-dim text-sm">
                        {h.days}
                      </span>
                      <span className="text-loft-green text-sm font-medium">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-loft-green/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Instagram size={20} className="text-loft-green" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-loft-cream mb-1">
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/ocallaghansloft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-loft-green hover:text-loft-green-light transition-colors"
                >
                  @ocallaghansloft
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-loft-dark border border-loft-green/15 rounded-2xl overflow-hidden aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d20.8635!3d37.7275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQzJzM5LjAiTiAyMMKwNTEnNDguNiJF!5e0!3m2!1sen!2sgr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Loft location on Google Maps"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
