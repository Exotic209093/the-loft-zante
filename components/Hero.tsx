import { MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay simulating a moody bar atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-loft-dark via-loft-charcoal/90 to-loft-dark z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-loft-amber/10 via-transparent to-transparent z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-loft-amber uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
          Laganas &middot; Zakynthos &middot; Greece
        </p>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-loft-cream leading-tight mb-6">
          O&apos;Callaghan&apos;s<br />
          <span className="text-loft-amber italic">Loft</span>
        </h1>

        <p className="text-loft-stone text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Zante&apos;s ultimate terrace bar. World-class cocktails, live entertainment,
          and an atmosphere that keeps you coming back until the sun rises.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-loft-stone">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-loft-terracotta" />
            <span>Laganas Main Strip, Zante</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-loft-terracotta" />
            <span>Open nightly until 4–5 AM</span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#drinks"
            className="inline-block bg-loft-amber text-loft-dark font-semibold px-8 py-3 rounded-full hover:bg-loft-terracotta hover:text-loft-cream transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}