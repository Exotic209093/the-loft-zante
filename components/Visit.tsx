import { MapPin, Clock, Phone, Instagram } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="py-24 bg-loft-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-terracotta uppercase tracking-[0.2em] text-sm mb-3">
            Find Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            Visit The Loft
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-loft-amber/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <MapPin size={20} className="text-loft-amber" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-loft-cream mb-1">
                  Location
                </h3>
                <p className="text-loft-stone leading-relaxed">
                  Laganas Main Strip<br />
                  Zakynthos, Greece 29100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-loft-amber/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Clock size={20} className="text-loft-amber" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-loft-cream mb-1">
                  Opening Hours
                </h3>
                <p className="text-loft-stone leading-relaxed">
                  Open nightly from 9 PM<br />
                  Until 4–5 AM (varies by season)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-loft-amber/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Instagram size={20} className="text-loft-amber" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-loft-cream mb-1">
                  Social Media
                </h3>
                <a
                  href="https://www.instagram.com/ocallaghansloft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-loft-amber hover:text-loft-terracotta transition-colors"
                >
                  @ocallaghansloft
                </a>
              </div>
            </div>
          </div>

          {/* Embedded map placeholder */}
          <div className="bg-loft-charcoal border border-loft-amber/10 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
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