export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-loft-dark via-loft-dark-card to-loft-dark z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-loft-green/8 via-transparent to-transparent z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-loft-green uppercase tracking-[0.3em] text-xs mb-4">
          O&rsquo;Callaghan&rsquo;s
        </p>
        <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold text-loft-cream leading-none mb-4">
          LOFT
        </h1>
        <p className="text-loft-cream-dim uppercase tracking-[0.35em] text-sm mb-8">
          Club &bull; Lounge &bull; Cocktails
        </p>
        <p className="text-loft-cream-dim text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Drinks, music and late nights.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-block bg-loft-green text-loft-dark font-semibold px-8 py-3 rounded-full hover:bg-loft-green-light transition-all duration-300 uppercase tracking-wider text-sm"
          >
            View menu
          </a>
          <a
            href="#visit"
            className="inline-block border border-loft-green/40 text-loft-cream font-medium px-8 py-3 rounded-full hover:border-loft-green hover:text-loft-green transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Find us
          </a>
        </div>
      </div>
    </section>
  );
}