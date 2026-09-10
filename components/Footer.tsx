import { Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-loft-dark border-t border-loft-amber/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold text-loft-amber tracking-wide mb-2">
              THE LOFT
            </p>
            <p className="text-loft-stone text-sm">
              O&apos;Callaghan&apos;s Loft &middot; Laganas, Zante
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/ocallaghansloft/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-loft-stone hover:text-loft-amber transition-colors text-sm"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
            <div className="flex items-center gap-2 text-loft-stone text-sm">
              <MapPin size={16} />
              <span>Laganas Strip</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-loft-amber/5 text-center">
          <p className="text-loft-stone/60 text-xs">
            &copy; {new Date().getFullYear()} O&apos;Callaghan&apos;s Loft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}