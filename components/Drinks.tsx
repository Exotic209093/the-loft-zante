const featured = [
  { name: "Mojito", price: "€10.00", desc: "Captain Morgan’s rum, fresh mint, sugar and fresh lime." },
  { name: "Strawberry Mojito", price: "€11.00", desc: "Captain Morgan’s rum, fresh strawberries, fresh mint, sugar and lime." },
  { name: "Pornstar Martini", price: "€10.00", desc: "Vanilla Smirnoff, Passoa, passion fruit juice and a side of Prosecco." },
  { name: "Aperol Spritz", price: "€9.00", desc: "Aperol, Prosecco, soda water and fresh orange." },
];

const categories = [
  {
    name: "Fruity",
    items: [
      { name: "Beach Bum", price: "€7.00", desc: "Smirnoff, Captain Morgans Rum, Malibu, Pineapple, Cranberry Juice" },
      { name: "Zante Fling", price: "€7.00", desc: "Smirnoff Vodka, Strawberry Liquor, Fanta Lemon, Berries" },
      { name: "Sex on the Beach", price: "€7.00", desc: "Smirnoff Vodka, Peach Schnapps, Orange Juice, Grenadine" },
      { name: "Blue Lagoon", price: "€7.00", desc: "Smirnoff Vodka, 7UP, Blue Curaçao" },
      { name: "Woohoo", price: "€7.00", desc: "Smirnoff Vodka, Peach Schnapps, Cranberry Juice" },
      { name: "Tipsy Mermaid", price: "€7.00", desc: "Captain Morgans Rum, Kiwi, Malibu, Blue Curaçao, Berries, Pineapple Juice" },
    ],
  },
  {
    name: "Long Islands",
    items: [
      { name: "Long Island Iced Tea", price: "€10.00", desc: "Gordons Gin, Captain Morgans Rum, Smirnoff Vodka, Triple Sec, Casamigos Silver Tequila, Lemon Juice, Diet Coke" },
      { name: "Long Beach Iced Tea", price: "€10.00", desc: "Gordon Gin, Captain Morgans Rum, Smirnoff Vodka, Triple Sec, Casamigos Silver Tequila, Lemon Juice, Cranberry Juice" },
      { name: "Tokyo Tea", price: "€10.00", desc: "Gordons Gin, Melon Liquor, Captain Morgans Rum, Triple Sec, Smirnoff Vodka, 7UP" },
      { name: "Bartenders Tea", price: "€10.00", desc: "Captain Morgans Rum, Gordon Gin, Peach Schnapps, Blue Curaçao, Smirnoff Vodka, Red Bull" },
    ],
  },
  {
    name: "Creamy",
    items: [
      { name: "Pina Colada", price: "€10.00", desc: "Captain Morgans Rum, Malibu, Cream, Pineapple Juice" },
      { name: "Drunken Oreo", price: "€10.00", desc: "Vanilla Smirnoff Vodka, Baileys, Crushed Oreos & Cream" },
      { name: "Aftereight", price: "€10.00", desc: "Bailey’s Mint Liquor, Kahlua, Chocolate Milk & Cream" },
    ],
  },
  {
    name: "Irish Cocktails",
    items: [
      { name: "Dublin Cherry", price: "€10.00", desc: "Guinness, Amaretto, Cherry Liquor" },
      { name: "Guinness & Port", price: "€10.00", desc: "Pint of Guinness topped with Port" },
      { name: "Ginger Bastard", price: "€10.00", desc: "Jameson, Ginger Ale, Fresh Lime" },
      { name: "Sour James", price: "€12.00", desc: "Jameson, Angostura Bitters, Fresh Lemons, Lemon Juice, Sugar" },
      { name: "Gold Rush", price: "€12.00", desc: "Jameson, Honey, Fresh Lemon, Star Anise" },
      { name: "Old Fashioned", price: "€12.00", desc: "Jameson, Simple Syrup, Angostura Bitters, Orange Bitters" },
    ],
  },
  {
    name: "Premium",
    items: [
      { name: "Frozen Strawberry Daiquiri", price: "€10.00", desc: "Captain Morgans Rum, Triple Sec, Strawberry Puree, Strawberries, Lime" },
      { name: "Frozen Mango Daiquiri", price: "€10.00", desc: "Captain Morgans White Rum, Fresh Mango, Mango Puree, Lime" },
      { name: "Frozen Skittle Daiquiri", price: "€12.00", desc: "Captain Morgans White Rum, Skittles, Fresh Strawberries, Lime" },
    ],
  },
  {
    name: "Classic Cocktails",
    items: [
      { name: "Mojito", price: "€10.00", desc: "Captain Morgans Rum, Fresh Mint, Sugar, Fresh Limes, Soda" },
      { name: "Strawberry Mojito", price: "€11.00", desc: "Captain Morgans Rum, Fresh Strawberries, Fresh Mint, Sugar, Fresh Limes, Soda" },
      { name: "Coconut & Mango Mojito", price: "€11.00", desc: "Captain Morgans Rum, Malibu, Mango Puree, Fresh Mint, Limes, Sugar, Soda" },
      { name: "Pornstar Martini", price: "€10.00", desc: "Vanilla Smirnoff, Passoa, Passion Fruit Juice, side of Prosecco" },
      { name: "Pornstar Martin Tree", price: "€60.00", desc: "4 Mini Pornstar Martinis, a large bottle of Prosecco" },
      { name: "Frozen Pornstar Martini", price: "€12.00", desc: "Vanilla Smirnoff, Passoa, Passion Fruit Puree, Fresh Lime" },
      { name: "Espresso Martini", price: "€10.00", desc: "Vanilla Smirnoff Vodka, Kahlua, Sugar, Espresso" },
      { name: "Caramel Cappuccino", price: "€12.00", desc: "Caramel Vodka, Kahlua, Baileys Cream, Espresso" },
      { name: "Lemon Sherbet", price: "€9.00", desc: "Casamigos Silver Tequila, Triple Sec, Sugar, Fresh Lemon Juice, Soda" },
      { name: "Passion Fruit Gin Smash", price: "€10.00", desc: "Gordons Gin, Passoa, Passion Fruit, Sugar, Fresh Lime" },
      { name: "Raspberry Royal Crush", price: "€10.00", desc: "Smirnoff Vodka, Triple Sec, Raspberry Syrup, Sugar, Lime, Lemon Juice" },
      { name: "Paloma", price: "€10.00", desc: "Don Julio, Pink Soda, Fresh Lime" },
      { name: "Aperol Spritz", price: "€9.00", desc: "Aperol, Prosecco, Soda, Fresh Wedge of Orange" },
      { name: "Hugo Spritz", price: "€9.00", desc: "St Germain, Elderflower, Mint, Prosecco, Soda" },
      { name: "Strawberry & Basil Spritz", price: "€10.00", desc: "Aperol, Prosecco, Soda, Fresh Strawberries, Fresh Basil" },
      { name: "Negroni", price: "€10.00", desc: "Gordons Gin, Campari, Martini Rosso, Wedge of Fresh Orange" },
      { name: "Moscow Mule", price: "€12.00", desc: "Smirnoff Vodka, Fresh Limes, Ginger Beer" },
      { name: "Sly Goose", price: "€14.00", desc: "Grey Goose Vodka, Chambord, Peach Juice, Soda, Berries" },
      { name: "Margarita", price: "€10.00", desc: "Casamigos Silver Tequila, Triple Sec, Fresh Limes & Fresh Lemon Juice, Simple Syrup, Kosher Salt" },
      { name: "Amaretto Sour", price: "€10.00", desc: "Disaronno, Lime, Simple Syrup, Bitters" },
      { name: "Caipirinha", price: "€10.00", desc: "Cachaça 51, Fresh Limes, White Sugar" },
      { name: "Spicy Mango Margarita", price: "€12.00", desc: "Casamigos Silver Tequila, Fresh Limes, Jalapeños, Simple Syrup, Fresh Mango, Kosher Salt" },
      { name: "Caipiroska", price: "€10.00", desc: "Smirnoff Vodka, Fresh Limes, Sugar" },
      { name: "Flaming Zombie", price: "€12.00", desc: "Captain Morgans Aged Rum, Captain Morgans White Rum, Brandy, Passion Fruit, Pineapple Juice, Fresh Lime" },
      { name: "Mai Tai", price: "€12.00", desc: "Captain Morgan Saged Rum, Captain Morgans White Rum, Cointreau, Orange Juice, Pineapple Juice, Fresh Lime, Orgeat Syrup" },
      { name: "Dirty Bloody Mary", price: "€12.00", desc: "Smirnoff Vodka, Lemon Juice, Worcestershire Sauce, Hot Sauce, Celery Salt, Tomato Juice" },
    ],
  },
];

export default function Drinks() {
  return (
    <section id="drinks" className="py-24 bg-loft-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-loft-green uppercase tracking-[0.2em] text-sm mb-3">
            Something to shake up your night
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-loft-cream mb-6">
            Cocktails
          </h2>
        </div>

        {/* Featured cocktails */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featured.map((item) => (
            <div
              key={item.name}
              className="bg-loft-dark-card border border-loft-green/15 rounded-2xl p-6 hover:border-loft-green/40 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-lg font-semibold text-loft-cream">
                  {item.name}
                </h3>
                <span className="text-loft-green font-semibold text-lg whitespace-nowrap ml-2">
                  {item.price}
                </span>
              </div>
              <p className="text-loft-cream-dim text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Happy Hour banner */}
        <div className="bg-loft-green/10 border border-loft-green/30 rounded-2xl p-8 text-center mb-16">
          <p className="text-loft-green uppercase tracking-[0.2em] text-xs mb-2">Happy Hour</p>
          <p className="font-display text-2xl sm:text-3xl font-bold text-loft-cream mb-2">
            2 cocktails for €15
          </p>
          <p className="text-loft-cream-dim text-sm">Selected cocktails only · 18:00 – 20:00</p>
        </div>

        {/* Full cocktail categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-loft-green border-b border-loft-green/20 pb-3 mb-8">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-loft-cream font-medium text-lg">{item.name}</p>
                      <p className="text-loft-cream-dim text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-loft-green font-semibold text-lg whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-loft-cream-dim text-sm italic">
            Sample menu &amp; prices · Cocktail photography is illustrative.
          </p>
        </div>
      </div>
    </section>
  );
}