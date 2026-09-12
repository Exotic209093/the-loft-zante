import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-photo"
        src="/images/loft/terrace.jpg"
        alt="O'Callaghan's Loft rooftop terrace lit up above the Laganas strip at night"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="hero-content shell">
        <p className="eyebrow">
          <span className="small-star">✳</span> LAGANAS, ZAKYNTHOS · GREECE
        </p>
        <h1>
          Good nights.
          <br />
          Great <em>company.</em>
        </h1>
        <p className="hero-description">
          A little Irish soul. A lot of island spirit.
          <br />
          Cocktails, music &amp; nights that turn into stories.
        </p>
        <p className="hero-hours">OPEN EVERY EVENING FROM 7:30 PM</p>
        <div className="hero-actions">
          <a href="#drinks" className="button-primary">
            Explore the drinks <ArrowUpRight size={18} />
          </a>
          <a href="#events" className="text-link">
            See what’s on <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="hero-bottom shell">
        <a href="#drinks">
          <ArrowDown size={16} /> YOUR NIGHT STARTS HERE
        </a>
        <span>CLUB &nbsp; / &nbsp; LOUNGE &nbsp; / &nbsp; COCKTAILS</span>
      </div>
      <div className="hero-stamp" aria-hidden="true">
        <span>O’CALLAGHAN’S</span>
        <b>LOFT</b>
        <span>ISLAND NIGHTS</span>
      </div>
    </section>
  );
}
