import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const photos = [
  {
    src: "night",
    caption: "Wish you were here.",
    alt: "Friends in front of the green Loft neon and Wish you were here sign",
  },
  {
    src: "view",
    caption: "A proper pint. A Loft night.",
    alt: "A pint of Guinness beneath the Loft neon sign",
  },
  {
    src: "people",
    caption: "Here's to good company.",
    alt: "Guests raising their glasses on the Loft terrace at night",
  },
  {
    src: "drinks",
    caption: "A little sparkle upstairs.",
    alt: "Bubbles, strawberries and glasses beside the O'Callaghan's Loft sign",
  },
  {
    src: "lounge",
    caption: "Find us above the strip.",
    alt: "O'Callaghan's Loft terrace and illuminated signs on the Laganas strip",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="loft-gallery section-space">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW MOMENTS FROM THE LOFT</p>
            <h2>
              Same place. <em>Your kind of people.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href="https://www.instagram.com/ocallaghansloft/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on Instagram <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <a
              className={`gallery-photo gallery-photo-${index + 1}`}
              key={photo.src}
              href={`/images/loft/${photo.src}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open photo: ${photo.caption}`}
            >
              <Image
                src={`/images/loft/${photo.src}.jpg`}
                alt={photo.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw"
              />
              <span>
                {photo.caption}
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
        <p className="photo-credit">
          Loft photo collection via{" "}
          <a
            href="https://www.zantebible.com/zante-bars/loft-zante"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zante Bible
          </a>
          .
        </p>
      </div>
    </section>
  );
}
