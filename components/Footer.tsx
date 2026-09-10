export default function Footer() {
  return (
    <footer className="bg-loft-dark border-t border-loft-green/10 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center mb-12">
          <p className="font-display text-2xl font-bold text-loft-cream mb-2">
            LOFT
          </p>
          <p className="text-loft-cream-dim text-xs uppercase tracking-[0.25em] mb-6">
            O&rsquo;Callaghan&rsquo;s
          </p>
          <p className="text-loft-green uppercase tracking-[0.2em] text-sm font-semibold">
            Drinks. Music. Good People.
          </p>
          <a
            href="#menu"
            className="inline-block mt-6 text-loft-cream-dim hover:text-loft-green transition-colors text-sm"
          >
            One more look at the menu &rarr;
          </a>
        </div>

        <div className="pt-8 border-t border-loft-green/5 text-center">
          <p className="text-loft-cream-dim/60 text-xs">
            &copy; {new Date().getFullYear()} O&rsquo;Callaghan&rsquo;s LOFT
          </p>
        </div>
      </div>
    </footer>
  );
}