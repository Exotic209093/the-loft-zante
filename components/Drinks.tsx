const categories = [
  {
    name: "Signature Cocktails",
    items: [
      { name: "Loft Sunset", desc: "Rum, passion fruit, orange, lime, grenadine" },
      { name: "Zante Mule", desc: "Vodka, ginger beer, fresh lime, cucumber" },
      { name: "Greek Goddess", desc: "Gin, elderflower, lemon, thyme syrup" },
      { name: "Laganas Nights", desc: "Tequila, blue curaçao, pineapple, coconut" },
    ],
  },
  {
    name: "Classics",
    items: [
      { name: "Old Fashioned", desc: "Bourbon, sugar, Angostura bitters, orange peel" },
      { name: "Negroni", desc: "Gin, Campari, sweet vermouth" },
      { name: "Mojito", desc: "White rum, mint, lime, sugar, soda" },
      { name: "Espresso Martini", desc: "Vodka, coffee liqueur, fresh espresso" },
    ],
  },
  {
    name: "Beers & Ciders",
    items: [
      { name: "Mythos Draft", desc: "Classic Greek lager, ice cold" },
      { name: "Guinness", desc: "On tap, poured properly" },
      { name: "Corona Extra", desc: "With fresh lime" },
      { name: "Strongbow Cider", desc: "Crisp and refreshing" },
    ],
  },
];

export default function Drinks() {
  return (
    <section id="drinks" className="py-24 bg-loft-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-terracotta uppercase tracking-[0.2em] text-sm mb-3">
            What We Pour
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            Drinks Menu
          </h2>
          <p className="text-loft-stone text-lg max-w-2xl mx-auto leading-relaxed">
            From expertly mixed cocktails to ice-cold draught beers.
            Something for every taste and every moment of the night.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <p className="text-loft-cream font-medium text-lg">{item.name}</p>
                    <p className="text-loft-stone text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-loft-stone text-sm italic">
            Full menu available at the bar. Ask our staff about daily specials and shots.
          </p>
        </div>
      </div>
    </section>
  );
}