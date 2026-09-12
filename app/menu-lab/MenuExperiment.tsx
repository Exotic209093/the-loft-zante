"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MenuBrowser from "@/components/MenuBrowser";

export default function MenuExperiment() {
  const [layout, setLayout] = useState<"split" | "banner">("split");
  return (
    <main className="menu-lab shell">
      <Link href="/" className="text-link">
        <ArrowLeft size={16} /> Back to the site
      </Link>
      <header className="menu-lab-header">
        <p className="eyebrow">DESIGN EXPERIMENT / 01</p>
        <h1>
          A little more <em>Loft.</em>
        </h1>
        <p>Two ways to bring real venue photography into the drinks menu.</p>
      </header>
      <div
        className="menu-lab-controls"
        role="group"
        aria-label="Compare menu designs"
      >
        <button
          aria-pressed={layout === "split"}
          onClick={() => setLayout("split")}
        >
          <span>01</span> Photo beside the menu
        </button>
        <button
          aria-pressed={layout === "banner"}
          onClick={() => setLayout("banner")}
        >
          <span>02</span> Photo above the menu
        </button>
      </div>
      <p className="menu-lab-note">
        These drafts use real Loft photos to illustrate each section. Individual
        cocktail portraits can be added once we have matching photos.
      </p>
      <MenuBrowser photoLayout={layout} />
    </main>
  );
}
