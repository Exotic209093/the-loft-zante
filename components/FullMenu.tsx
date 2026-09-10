const spiritCategories = [
  {
    name: "Vodka",
    items: [
      { name: "Smirnoff", price: "€6.00" },
      { name: "Absolute", price: "€7.00" },
      { name: "Smirnoff Flavoured", price: "€8.00" },
      { name: "Smirnoff North", price: "€7.00" },
      { name: "Stolichnaya", price: "€8.00" },
      { name: "Ciroc", price: "€10.00" },
      { name: "Ciroc Flavoured", price: "€10.00" },
      { name: "AU Flavoured", price: "€10.00" },
      { name: "Grey Goose", price: "€12.00" },
      { name: "Belvedere", price: "€12.00" },
      { name: "Beluga", price: "€12.00" },
    ],
  },
  {
    name: "Rum",
    items: [
      { name: "Captain Morgans Dark", price: "€6.00" },
      { name: "Captain Morgans Spiced", price: "€7.00" },
      { name: "Captain Morgans White", price: "€6.00" },
      { name: "Captain Morgans Tiki", price: "€7.00" },
      { name: "Bacardi", price: "€8.00" },
      { name: "Havana Club 3", price: "€7.00" },
      { name: "Havana Club 7", price: "€10.00" },
      { name: "Kraken", price: "€10.00" },
      { name: "Sailor Jerry", price: "€8.00" },
      { name: "Don Papa", price: "€12.00" },
      { name: "Mount Gay", price: "€10.00" },
      { name: "Mount Gay XO", price: "€12.00" },
    ],
  },
  {
    name: "Gins",
    items: [
      { name: "Gordons", price: "€6.00" },
      { name: "Gordons Pink", price: "€7.00" },
      { name: "Tanqueray", price: "€8.00" },
      { name: "Tanqueray Sevilla", price: "€8.00" },
      { name: "Whitney Neil", price: "€9.00" },
      { name: "Bombay Sapphire", price: "€8.00" },
      { name: "Hendricks", price: "€10.00" },
      { name: "Monkey 47", price: "€12.00" },
      { name: "Bulldog", price: "€12.00" },
      { name: "Malfy", price: "€12.00" },
      { name: "Malfy Flavoured", price: "€12.00" },
      { name: "Gun Powder", price: "€10.00" },
    ],
  },
  {
    name: "Whiskey",
    items: [
      { name: "Jamesons", price: "€7.00" },
      { name: "Jamesons Double Barrel", price: "€9.00" },
      { name: "Jameson Black Barrel", price: "€9.00" },
      { name: "Bushmills", price: "€8.00" },
      { name: "Famous Grouse", price: "€7.00" },
      { name: "Ballantines", price: "€8.00" },
      { name: "Haig", price: "€8.00" },
      { name: "Johny Walker Red", price: "€7.00" },
      { name: "Johny Walker Black", price: "€10.00" },
      { name: "Johny Walker Gold", price: "€12.00" },
      { name: "Johny Walker Double Black", price: "€14.00" },
      { name: "Dimple", price: "€8.00" },
      { name: "Chivas", price: "€10.00" },
      { name: "Jack Daniels", price: "€9.00" },
      { name: "Jack Daniels Honey", price: "€9.00" },
      { name: "Jack Daniels Fire", price: "€9.00" },
      { name: "Jim Bean", price: "€9.00" },
      { name: "Fireball", price: "€9.00" },
    ],
  },
  {
    name: "Liquors",
    items: [
      { name: "Malibu", price: "€7.00" },
      { name: "Archers", price: "€7.00" },
      { name: "Southern Comfort", price: "€7.00" },
      { name: "Passoa", price: "€7.00" },
      { name: "Disaronno", price: "€7.00" },
      { name: "Baileys", price: "€7.00" },
      { name: "Tia Maria", price: "€7.00" },
      { name: "Ouzo", price: "€7.00" },
    ],
  },
  {
    name: "Cognacs",
    items: [
      { name: "Metaxa 3*", price: "€7.00" },
      { name: "Metaxa 5*", price: "€9.00" },
      { name: "Metaxa 7*", price: "€10.00" },
      { name: "Courvoisier", price: "€10.00" },
      { name: "Hennessy", price: "€10.00" },
    ],
  },
];

const wineAndBubbles = [
  { name: "Small White Wine", price: "€5.00" },
  { name: "Small Rose Wine", price: "€5.00" },
  { name: "Small Red Wine", price: "€5.00" },
  { name: "Small Prosecco", price: "€6.00" },
  { name: "Large Prosecco", price: "€40.00" },
];

const shots = [
  { name: "Smirnoff North", price: "€3.00" },
  { name: "Sambuca", price: "€3.00" },
  { name: "Black Sambuca", price: "€4.00" },
  { name: "Tequila", price: "€3.00" },
  { name: "Tequila Rose", price: "€4.00" },
  { name: "Chocolate Tequila", price: "€4.00" },
  { name: "Watermelon Tequila", price: "€4.00" },
  { name: "Schnapps", price: "€3.00" },
  { name: "Sours", price: "€4.00" },
  { name: "Jameson", price: "€4.00" },
  { name: "Jack Daniels", price: "€4.00" },
  { name: "Jagermeister", price: "€4.00" },
  { name: "Frangelico", price: "€4.00" },
  { name: "Baby Guinness", price: "€4.00" },
  { name: "Absinthe", price: "€5.00" },
];

const bombs = [
  { name: "Car Bomb", price: "€5.00", desc: "Jamesons Baileys Guinness" },
];

const alcopops = [
  { name: "Smirnoff Ice", price: "€5.00" },
  { name: "Blue WKD", price: "€5.00" },
  { name: "Bacardi Breezer", price: "€5.00" },
  { name: "Au Gold Cans", price: "€8.00" },
];

const ciders = [
  { name: "Summersby Apple", price: "€5.00" },
  { name: "Summersby Watermelon", price: "€5.00" },
  { name: "Koppaberg Strawberry & Lime", price: "€5.00" },
  { name: "Koppaberg Mixed Fruit", price: "€5.00" },
  { name: "Apple Thief", price: "€5.00" },
  { name: "Mangers", price: "€6.00" },
];

const bottledBeers = [
  { name: "Bud", price: "€5.00" },
  { name: "Corona", price: "€5.00" },
  { name: "Desperado", price: "€5.00" },
  { name: "Heineken", price: "€5.00" },
  { name: "Mythos", price: "€5.00" },
  { name: "Fix", price: "€5.00" },
  { name: "Amstel", price: "€5.00" },
  { name: "Alfa", price: "€5.00" },
  { name: "Corona 0%", price: "€5.00" },
];

const draughtBeers = [
  { name: "Guinness", halfPint: "€4.00", pint: "€7.00" },
  { name: "Heineken", halfPint: "€3.00", pint: "€6.00" },
  { name: "Moretti", halfPint: "€3.00", pint: "€6.00" },
  { name: "Mythos", halfPint: "€3.00", pint: "€5.00" },
  { name: "Alfa", halfPint: "€3.00", pint: "€6.00" },
];

const mocktails = [
  { name: "Raspberry Mojito", price: "€8.00", desc: "Fresh Raspberries, Raspberry Puree, Fresh Lime, Fresh Mint, Sugar, Soda Water" },
  { name: "Mango Lime Coconut Mojito", price: "€8.00", desc: "Fresh Mango, Mango Puree, Fresh Lime, Coconut Puree, Fanta Lemon" },
  { name: "Alcohol Free Spritz", price: "€8.00", desc: "Aperol 0%, Soda, Prosecco 0%" },
];

const softDrinks = [
  { name: "Orange", price: "€3.00" },
  { name: "Lemon", price: "€3.00" },
  { name: "Pineapple", price: "€3.00" },
  { name: "Cranberry", price: "€3.00" },
  { name: "Cherry", price: "€3.00" },
  { name: "Apple", price: "€3.00" },
  { name: "Water", price: "€3.00" },
  { name: "Club Soda", price: "€3.00" },
  { name: "Tonic Water", price: "€3.00" },
  { name: "Pink Soda", price: "€4.00" },
  { name: "Sparkling Water", price: "€4.00" },
];

const energyDrinks = [
  { name: "Red Bull Energy Drink", price: "€4.00" },
  { name: "Red Bull Sugarfree", price: "€4.00" },
  { name: "Red Bull Apricot Edition", price: "€4.00" },
];

const longDrinks = [
  { name: "Red Bull Vodka", price: "€8.00", desc: "Red Bull Energy Drink, Vodka & Orange Garnish" },
];

const mocktailSpecials = [
  { name: "Red Bull Strawberry Twist", price: "€8.00", desc: "Red Bull Apricot Edition mixed with Lime Juice, Ginger & Cane Syrup" },
];

const shotSpecials = [
  { name: "Jagerbomb", price: "€5.00", desc: "Jagermeister & Red Bull Energy Drink" },
];

export default function FullMenu() {
  return (
    <section id="menu" className="py-24 bg-loft-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-loft-terracotta uppercase tracking-[0.2em] text-sm mb-3">
            Full Bar Menu
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            Drinks & More
          </h2>
          <p className="text-loft-stone text-lg max-w-2xl mx-auto leading-relaxed">
            Spirits, beers, wines, shots, and everything in between. All prices in EUR.
          </p>
        </div>

        {/* Spirits */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Spirits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {spiritCategories.map((category) => (
              <div key={category.name}>
                <h4 className="text-loft-cream font-semibold text-lg mb-4 uppercase tracking-wide">
                  {category.name}
                </h4>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-loft-stone">{item.name}</span>
                      <span className="text-loft-amber font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wine & Bubbles */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Wine & Bubbles
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {wineAndBubbles.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shots */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Shots
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {shots.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bombs */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Bombs
          </h3>
          <div className="space-y-2">
            {bombs.map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-loft-cream font-medium">{item.name}</span>
                  {item.desc && <p className="text-loft-stone text-sm mt-1">{item.desc}</p>}
                </div>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alcopops */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Alcopops
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {alcopops.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ciders */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Ciders
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {ciders.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottled Beers */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Bottled Beers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {bottledBeers.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Draught Beers */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Draught
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl">
              <thead>
                <tr className="border-b border-loft-amber/20">
                  <th className="text-left text-loft-stone font-medium py-2">Beer</th>
                  <th className="text-right text-loft-stone font-medium py-2">½ Pint</th>
                  <th className="text-right text-loft-stone font-medium py-2">Pint</th>
                </tr>
              </thead>
              <tbody>
                {draughtBeers.map((item) => (
                  <tr key={item.name} className="border-b border-loft-amber/5">
                    <td className="text-loft-cream py-2">{item.name}</td>
                    <td className="text-right text-loft-amber font-medium py-2">{item.halfPint}</td>
                    <td className="text-right text-loft-amber font-medium py-2">{item.pint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mocktails */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Mocktails
          </h3>
          <div className="space-y-4">
            {mocktails.map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-loft-cream font-medium">{item.name}</span>
                  {item.desc && <p className="text-loft-stone text-sm mt-1">{item.desc}</p>}
                </div>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Drinks & Juices */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Soft Drinks & Juices
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {softDrinks.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Energy Drinks */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Energy Drinks
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {energyDrinks.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-loft-stone">{item.name}</span>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Long Drinks */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Long Drinks
          </h3>
          <div className="space-y-4">
            {longDrinks.map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-loft-cream font-medium">{item.name}</span>
                  {item.desc && <p className="text-loft-stone text-sm mt-1">{item.desc}</p>}
                </div>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Mocktails & Shots */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-amber border-b border-loft-amber/20 pb-3 mb-8">
            Specials
          </h3>
          <div className="space-y-4">
            {[...mocktailSpecials, ...shotSpecials].map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-loft-cream font-medium">{item.name}</span>
                  {item.desc && <p className="text-loft-stone text-sm mt-1">{item.desc}</p>}
                </div>
                <span className="text-loft-amber font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-loft-stone text-sm italic">
            Prices subject to change. Ask our staff about daily specials and promotions.
          </p>
        </div>
      </div>
    </section>
  );
}