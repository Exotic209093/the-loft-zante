"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "#gallery", label: "The Loft" },
  { href: "#drinks", label: "The drinks" },
  { href: "#events", label: "What’s on" },
  { href: "#visit", label: "Find us" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a
          href="#home"
          className="wordmark"
          aria-label="O’Callaghan’s Loft home"
        >
          <span>O’CALLAGHAN’S</span>
          <b>LOFT</b>
        </a>
        <div className="desktop-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#visit" className="nav-cta">
          Meet you at the Loft <ArrowUpRight size={16} />
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-links"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
