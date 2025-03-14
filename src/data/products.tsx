
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'pokemon' | 'onepiece' | 'yugioh' | 'mysterybox';
  description: string;
  inStock: boolean;
  featured?: boolean;
  releaseDate?: string;
  rarity?: string;
};

export const products: Product[] = [
  // Pokemon Cards
  {
    id: "poke-1",
    name: "Charizard GX Rainbow Rare",
    price: 999,
    image: "/lovable-uploads/0727d902-e256-44de-8fe6-c27f4cae39f7.png",
    category: "pokemon",
    description: "One of the most sought-after Charizard cards featuring rainbow holographic foil and powerful GX attack. This card is a collector's dream with its vibrant colors and impressive artwork.",
    inStock: true,
    featured: true,
    rarity: "Rainbow Rare",
    releaseDate: "2019-05-03",
  },
  {
    id: "poke-2",
    name: "Pikachu V-Max",
    price: 599,
    image: "/lovable-uploads/61e0ed1a-6629-4e8d-b5ca-ca8257a60892.png",
    category: "pokemon",
    description: "Pikachu reaches its V-Max form in this powerful card, featuring dynamic artwork and electric-type attacks that can devastate opponents. Its high HP and powerful attacks make it a staple in competitive decks.",
    inStock: true,
    rarity: "Ultra Rare",
    releaseDate: "2020-07-15",
  },
  {
    id: "poke-3",
    name: "Mewtwo V",
    price: 699,
    image: "/lovable-uploads/c4e0c670-9fe0-4fbc-9f1f-528909f1d9f1.png",
    category: "pokemon",
    description: "A unique card featuring the legendary Psychic-type Pokémon Mewtwo. This V card has powerful attacks and abilities that make it a formidable addition to any collection.",
    inStock: true,
    rarity: "Special Art Rare",
    releaseDate: "2021-09-10",
  },
  {
    id: "poke-4",
    name: "Eevee Evolution Set",
    price: 499,
    image: "/lovable-uploads/1be8feec-3622-46ac-8e62-5aa63316f7bb.png",
    category: "pokemon",
    description: "Complete set of all Eevee evolutions in their various forms. This collection showcases each evolution with premium artwork and powerful game mechanics.",
    inStock: false,
    rarity: "Collection",
    releaseDate: "2021-06-18",
  },
  
  // One Piece Cards
  {
    id: "op-1",
    name: "Monkey D. Luffy Leader Card",
    price: 589,
    image: "/lovable-uploads/fad65729-c128-45e9-8014-ca57ce84d0b0.png",
    category: "onepiece",
    description: "The iconic Straw Hat captain in his Gear 5 form. This leader card grants special abilities to your entire deck and features premium foil artwork depicting Luffy's boundless determination.",
    inStock: true,
    featured: true,
    rarity: "Rare",
    releaseDate: "2022-01-20",
  },
  {
    id: "op-2",
    name: "Roronoa Zoro Rainbow Rare",
    price: 999,
    image: "/lovable-uploads/4edea2a8-328c-4c8b-b734-089ac73b2f39.png",
    category: "onepiece",
    description: "Zoro unleashes his full power with his three-sword style in this rainbow rare card. The card features special holographic effects and bonuses when paired with other Straw Hat crew members.",
    inStock: true,
    featured: true,
    rarity: "Rainbow Rare",
    releaseDate: "2022-03-15",
  },
  {
    id: "op-3",
    name: "Luffy Gear 5 Rainbow Rare",
    price: 1299,
    image: "/lovable-uploads/fd1a4fad-e739-461f-a502-6f45e896ceac.png",
    category: "onepiece",
    description: "The ultimate Luffy card showing his awakened Gear 5 form with incredible rainbow holographic pattern. This highly collectible card has extraordinary abilities and is a must-have for One Piece enthusiasts.",
    inStock: true,
    featured: true,
    rarity: "Rainbow Rare",
    releaseDate: "2022-05-10",
  },
  {
    id: "op-4",
    name: "Portgas D. Ace",
    price: 799,
    image: "/lovable-uploads/13c7e4db-00bd-46ac-af56-41032d5b9041.png",
    category: "onepiece",
    description: "A powerful Whitebeard Pirates member and Luffy's sworn brother. This rare Ace card features dynamic fire abilities and special Whitebeard Pirates synergy effects. Its vibrant artwork captures Ace's fiery personality.",
    inStock: true,
    rarity: "Special Rare",
    releaseDate: "2022-06-01",
  },
  
  // Yu-Gi-Oh Cards
  {
    id: "ygo-1",
    name: "Blue-Eyes Ultimate Dragon",
    price: 699,
    image: "/lovable-uploads/fcf4ff18-6b13-43a6-ba69-45cfed74908d.png",
    category: "yugioh",
    description: "The ultimate form of the iconic Blue-Eyes White Dragon, this fusion monster requires three Blue-Eyes White Dragons to summon. With its impressive 4500 ATK and 3800 DEF, it's a formidable card that can devastate opponents.",
    inStock: true,
    featured: true,
    rarity: "Ultra Rare",
    releaseDate: "2020-12-10",
  },
  {
    id: "ygo-2",
    name: "Dark Magician Alternative Art",
    price: 599,
    image: "/lovable-uploads/b6db9630-9926-40df-8ed6-cbbb866f2f2b.png",
    category: "yugioh",
    description: "Yugi's signature spellcaster in a limited edition alternative art style. This card features special artwork not found in regular booster packs and includes a commemorative display case.",
    inStock: true,
    rarity: "Secret Rare",
    releaseDate: "2021-02-05",
  },
  {
    id: "ygo-3",
    name: "Exodia the Forbidden One",
    price: 899,
    image: "/lovable-uploads/08dbdca3-8ebd-4541-8665-d905cc16bdc4.png",
    category: "yugioh",
    description: "The legendary instant-win condition in Yu-Gi-Oh. This central piece of Exodia with matching serial numbers is the key to completing the ultimate winning strategy. Collect all five pieces to secure an instant victory.",
    inStock: true,
    rarity: "Secret Rare",
    releaseDate: "2021-07-07",
  },
  {
    id: "ygo-4",
    name: "Egyptian God Cards Trio",
    price: 799,
    image: "/lovable-uploads/e382a24e-c0a8-4815-9038-58a9be1496a6.png",
    category: "yugioh",
    description: "The three Egyptian God Cards - Slifer the Sky Dragon, Obelisk the Tormentor, and The Winged Dragon of Ra - in their full-power versions. This set includes premium gold borders and special effect text.",
    inStock: true,
    rarity: "Divine Rare",
    releaseDate: "2021-01-15",
  },
  
  // Mystery Box
  {
    id: "mb-1",
    name: "Premium Mystery Box",
    price: 899,
    image: "/lovable-uploads/e707f698-e333-4def-a24f-02a6b8c0e486.png",
    category: "mysterybox",
    description: "A premium mystery box containing 5-7 random cards from various collections. Each box guarantees at least one rare or ultra-rare card and has a chance to contain exclusive holographic variants not available elsewhere.",
    inStock: true,
    featured: true,
    releaseDate: "2023-01-01",
  },
  {
    id: "mb-2",
    name: "Collector's Mystery Box",
    price: 1299,
    image: "/lovable-uploads/e707f698-e333-4def-a24f-02a6b8c0e486.png",
    category: "mysterybox",
    description: "A luxury mystery box designed for serious collectors. Each box contains 3-5 premium cards with a guaranteed rainbow rare or equivalent. Limited edition and numbered with certificate of authenticity.",
    inStock: true,
    releaseDate: "2023-03-15",
  }
];

export const getProductsByCategory = (category: 'pokemon' | 'onepiece' | 'yugioh' | 'mysterybox') => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
