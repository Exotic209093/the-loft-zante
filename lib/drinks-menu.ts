const cocktailCategories = [
  {
    name: "Fruity",
    items: [
      {
        name: "Beach Bum",
        price: "€7.00",
        desc: "Smirnoff, Captain Morgan Rum, Malibu, Pineapple, Cranberry Juice",
      },
      {
        name: "Zante Fling",
        price: "€7.00",
        desc: "Smirnoff Vodka, Strawberry Liquor, Fanta Lemon, Berries",
      },
      {
        name: "Sex on the Beach",
        price: "€7.00",
        desc: "Smirnoff Vodka, Peach Schnapps, Orange Juice, Grenadine",
      },
      {
        name: "Blue Lagoon",
        price: "€7.00",
        desc: "Smirnoff Vodka, 7UP, Blue Curaçao",
      },
      {
        name: "Woohoo",
        price: "€7.00",
        desc: "Smirnoff Vodka, Peach Schnapps, Cranberry Juice",
      },
      {
        name: "Tipsy Mermaid",
        price: "€7.00",
        desc: "Captain Morgan Rum, Kiwi, Malibu, Blue Curaçao, Berries, Pineapple Juice",
      },
    ],
  },
  {
    name: "Long Islands",
    items: [
      {
        name: "Long Island Iced Tea",
        price: "€10.00",
        desc: "Gordons Gin, Captain Morgan Rum, Smirnoff Vodka, Triple Sec, Casamigos Silver Tequila, Lemon Juice, Diet Coke",
      },
      {
        name: "Long Beach Iced Tea",
        price: "€10.00",
        desc: "Gordon Gin, Captain Morgan Rum, Smirnoff Vodka, Triple Sec, Casamigos Silver Tequila, Lemon Juice, Cranberry Juice",
      },
      {
        name: "Tokyo Tea",
        price: "€10.00",
        desc: "Gordons Gin, Melon Liquor, Captain Morgan Rum, Triple Sec, Smirnoff Vodka, 7UP",
      },
      {
        name: "Bartenders Tea",
        price: "€10.00",
        desc: "Captain Morgan Rum, Gordon Gin, Peach Schnapps, Blue Curaçao, Smirnoff Vodka, Red Bull",
      },
    ],
  },
  {
    name: "Creamy",
    items: [
      {
        name: "Pina Colada",
        price: "€10.00",
        desc: "Captain Morgan Rum, Malibu, Cream, Pineapple Juice",
      },
      {
        name: "Drunken Oreo",
        price: "€10.00",
        desc: "Vanilla Smirnoff Vodka, Baileys, Crushed Oreos & Cream",
      },
      {
        name: "Aftereight",
        price: "€10.00",
        desc: "Bailey’s Mint Liquor, Kahlua, Chocolate Milk & Cream",
      },
    ],
  },
  {
    name: "Irish Cocktails",
    items: [
      {
        name: "Dublin Cherry",
        price: "€10.00",
        desc: "Guinness, Amaretto, Cherry Liquor",
      },
      {
        name: "Guinness & Port",
        price: "€10.00",
        desc: "Pint of Guinness topped with Port",
      },
      {
        name: "Ginger Bastard",
        price: "€10.00",
        desc: "Jameson, Ginger Ale, Fresh Lime",
      },
      {
        name: "Sour James",
        price: "€12.00",
        desc: "Jameson, Angostura Bitters, Fresh Lemons, Lemon Juice, Sugar",
      },
      {
        name: "Gold Rush",
        price: "€12.00",
        desc: "Jameson, Honey, Fresh Lemon, Star Anise",
      },
      {
        name: "Old Fashioned",
        price: "€12.00",
        desc: "Jameson, Simple Syrup, Angostura Bitters, Orange Bitters",
      },
    ],
  },
  {
    name: "Premium",
    items: [
      {
        name: "Frozen Strawberry Daiquiri",
        price: "€10.00",
        desc: "Captain Morgan Rum, Triple Sec, Strawberry Puree, Strawberries, Lime",
      },
      {
        name: "Frozen Mango Daiquiri",
        price: "€10.00",
        desc: "Captain Morgan White Rum, Fresh Mango, Mango Puree, Lime",
      },
      {
        name: "Frozen Skittle Daiquiri",
        price: "€12.00",
        desc: "Captain Morgan White Rum, Skittles, Fresh Strawberries, Lime",
      },
    ],
  },
  {
    name: "Classic Cocktails",
    items: [
      {
        name: "Mojito",
        price: "€10.00",
        desc: "Captain Morgan Rum, Fresh Mint, Sugar, Fresh Limes, Soda",
      },
      {
        name: "Strawberry Mojito",
        price: "€11.00",
        desc: "Captain Morgan Rum, Fresh Strawberries, Fresh Mint, Sugar, Fresh Limes, Soda",
      },
      {
        name: "Coconut & Mango Mojito",
        price: "€11.00",
        desc: "Captain Morgan Rum, Malibu, Mango Puree, Fresh Mint, Limes, Sugar, Soda",
      },
      {
        name: "Pornstar Martini",
        price: "€10.00",
        desc: "Vanilla Smirnoff, Passoa, Passion Fruit Juice, side of Prosecco",
      },
      {
        name: "Pornstar Martin Tree",
        price: "€60.00",
        desc: "4 Mini Pornstar Martinis, a large bottle of Prosecco",
      },
      {
        name: "Frozen Pornstar Martini",
        price: "€12.00",
        desc: "Vanilla Smirnoff, Passoa, Passion Fruit Puree, Fresh Lime",
      },
      {
        name: "Espresso Martini",
        price: "€10.00",
        desc: "Vanilla Smirnoff Vodka, Kahlua, Sugar, Espresso",
      },
      {
        name: "Caramel Cappuccino",
        price: "€12.00",
        desc: "Caramel Vodka, Kahlua, Baileys Cream, Espresso",
      },
      {
        name: "Lemon Sherbet",
        price: "€9.00",
        desc: "Casamigos Silver Tequila, Triple Sec, Sugar, Fresh Lemon Juice, Soda",
      },
      {
        name: "Passion Fruit Gin Smash",
        price: "€10.00",
        desc: "Gordons Gin, Passoa, Passion Fruit, Sugar, Fresh Lime",
      },
      {
        name: "Raspberry Royal Crush",
        price: "€10.00",
        desc: "Smirnoff Vodka, Triple Sec, Raspberry Syrup, Sugar, Lime, Lemon Juice",
      },
      {
        name: "Paloma",
        price: "€10.00",
        desc: "Don Julio, Pink Soda, Fresh Lime",
      },
      {
        name: "Aperol Spritz",
        price: "€9.00",
        desc: "Aperol, Prosecco, Soda, Fresh Wedge of Orange",
      },
      {
        name: "Hugo Spritz",
        price: "€9.00",
        desc: "St Germain, Elderflower, Mint, Prosecco, Soda",
      },
      {
        name: "Strawberry & Basil Spritz",
        price: "€10.00",
        desc: "Aperol, Prosecco, Soda, Fresh Strawberries, Fresh Basil",
      },
      {
        name: "Negroni",
        price: "€10.00",
        desc: "Gordons Gin, Campari, Martini Rosso, Wedge of Fresh Orange",
      },
      {
        name: "Moscow Mule",
        price: "€12.00",
        desc: "Smirnoff Vodka, Fresh Limes, Ginger Beer",
      },
      {
        name: "Sly Goose",
        price: "€14.00",
        desc: "Grey Goose Vodka, Chambord, Peach Juice, Soda, Berries",
      },
      {
        name: "Margarita",
        price: "€10.00",
        desc: "Casamigos Silver Tequila, Triple Sec, Fresh Limes & Fresh Lemon Juice, Simple Syrup, Kosher Salt",
      },
      {
        name: "Amaretto Sour",
        price: "€10.00",
        desc: "Disaronno, Lime, Simple Syrup, Bitters",
      },
      {
        name: "Caipirinha",
        price: "€10.00",
        desc: "Cachaça 51, Fresh Limes, White Sugar",
      },
      {
        name: "Spicy Mango Margarita",
        price: "€12.00",
        desc: "Casamigos Silver Tequila, Fresh Limes, Jalapeños, Simple Syrup, Fresh Mango, Kosher Salt",
      },
      {
        name: "Caipiroska",
        price: "€10.00",
        desc: "Smirnoff Vodka, Fresh Limes, Sugar",
      },
      {
        name: "Flaming Zombie",
        price: "€12.00",
        desc: "Captain Morgan Aged Rum, Captain Morgan White Rum, Brandy, Passion Fruit, Pineapple Juice, Fresh Lime",
      },
      {
        name: "Mai Tai",
        price: "€12.00",
        desc: "Captain Morgan Aged Rum, Captain Morgan White Rum, Cointreau, Orange Juice, Pineapple Juice, Fresh Lime, Orgeat Syrup",
      },
      {
        name: "Dirty Bloody Mary",
        price: "€12.00",
        desc: "Smirnoff Vodka, Lemon Juice, Worcestershire Sauce, Hot Sauce, Celery Salt, Tomato Juice",
      },
    ],
  },
];

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
      { name: "Captain Morgan Dark", price: "€6.00" },
      { name: "Captain Morgan Spiced", price: "€7.00" },
      { name: "Captain Morgan White", price: "€6.00" },
      { name: "Captain Morgan Tiki", price: "€7.00" },
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
  {
    name: "Raspberry Mojito",
    price: "€8.00",
    desc: "Fresh Raspberries, Raspberry Puree, Fresh Lime, Fresh Mint, Sugar, Soda Water",
  },
  {
    name: "Mango Lime Coconut Mojito",
    price: "€8.00",
    desc: "Fresh Mango, Mango Puree, Fresh Lime, Coconut Puree, Fanta Lemon",
  },
  {
    name: "Alcohol Free Spritz",
    price: "€8.00",
    desc: "Aperol 0%, Soda, Prosecco 0%",
  },
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
  {
    name: "Red Bull Vodka",
    price: "€8.00",
    desc: "Red Bull Energy Drink, Vodka & Orange Garnish",
  },
];

const mocktailSpecials = [
  {
    name: "Red Bull Strawberry Twist",
    price: "€8.00",
    desc: "Red Bull Apricot Edition mixed with Lime Juice, Ginger & Cane Syrup",
  },
];

const shotSpecials = [
  {
    name: "Jagerbomb",
    price: "€5.00",
    desc: "Jagermeister & Red Bull Energy Drink",
  },
];

export const menuSections = [
  {
    name: "Cocktails",
    subtitle: "Freshly mixed, with the brands you know.",
    groups: [...cocktailCategories].sort(
      (a, b) =>
        Number(b.name === "Classic Cocktails") -
        Number(a.name === "Classic Cocktails"),
    ),
  },
  {
    name: "Spirits",
    subtitle: "Your favourite names from behind the bar.",
    groups: spiritCategories,
  },
  {
    name: "Beer & Cider",
    subtitle: "On tap and by the bottle.",
    groups: [
      {
        name: "Draught",
        items: draughtBeers.map((item) => ({
          name: item.name,
          price: item.pint,
          serving: "Pint",
          alternate: { label: "Half pint", price: item.halfPint },
        })),
      },
      { name: "Bottled beers", items: bottledBeers },
      { name: "Ciders", items: ciders },
      { name: "Alcopops", items: alcopops },
    ],
  },
  {
    name: "Wine & Bubbles",
    subtitle: "A glass for the occasion.",
    groups: [{ name: "Wine & Bubbles", items: wineAndBubbles }],
  },
  {
    name: "Shots & More",
    subtitle: "Shots, bombs and long drinks.",
    groups: [
      { name: "Shots", items: shots },
      { name: "Bombs", items: bombs },
      { name: "Long drinks", items: longDrinks },
      { name: "Specials", items: [...mocktailSpecials, ...shotSpecials] },
    ],
  },
  {
    name: "Softs & Mocktails",
    subtitle: "Fresh flavours, easy evenings.",
    groups: [
      { name: "Mocktails", items: mocktails },
      { name: "Soft drinks & juices", items: softDrinks },
      { name: "Energy drinks", items: energyDrinks },
    ],
  },
];
