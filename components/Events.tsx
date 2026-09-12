import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="loft-evenings section-space">
      <div className="shell evening-grid">
        <div className="evening-photo">
          <Image
            src="/images/loft/view.jpg"
            alt="Guinness on the table beneath the Loft neon sign"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="evening-copy">
          <p className="eyebrow">THE NIGHT IS YOURS</p>
          <h2>
            Meet upstairs.
            <br />
            <em>Stay a little longer.</em>
          </h2>
          <p>
            Come for a cocktail. Settle in with your friends. Make a night of it
            at O&apos;Callaghan&apos;s Loft.
          </p>
          <p className="evening-hours">Every evening, 7:30 pm until late.</p>
          <a
            className="button-primary"
            href="https://www.instagram.com/ocallaghansloft/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See what&apos;s on Instagram <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
