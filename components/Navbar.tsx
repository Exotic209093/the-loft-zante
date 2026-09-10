"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#events", label: "What’s On" },
  { href: "#visit", label: "Visit Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-loft-dark/95 backdrop-blur-md border-b border-loft-green/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#home"
            className="flex flex-col leading-none"
          >
            <span className="font-display text-lg font-bold text-loft-green tracking-wide">
              LOFT
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-loft-cream-dim">
              O&rsquo;Callaghan&rsquo;s
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-loft-cream-dim hover:text-loft-green transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-loft-cream p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-loft-dark-card border-t border-loft-green/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm uppercase tracking-widest text-loft-cream-dim hover:text-loft-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}