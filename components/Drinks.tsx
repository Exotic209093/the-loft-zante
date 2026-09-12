import MenuBrowser from "./MenuBrowser";

export default function Drinks() {
  return (
    <section id="drinks" className="drinks-section section-space">
      <div className="shell" id="menu">
        <div className="drinks-intro">
          <div>
            <p className="eyebrow">THE DRINKS</p>
            <h2>
              Good spirits.
              <br />
              <em>Great nights.</em>
            </h2>
            <p>
              Captain Morgan. Smirnoff. Jameson.
              <br />
              Named brands, freshly mixed cocktails, and your favourite pour.
            </p>
          </div>
          <img
            src="/images/loft/cocktail.jpg"
            alt="Cocktails and named spirits behind the bar at the Loft"
            width="1080"
            height="1080"
            loading="lazy"
          />
        </div>
        <MenuBrowser />
      </div>
    </section>
  );
}
