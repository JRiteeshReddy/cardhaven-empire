
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
    name: "Shanks Red-Haired Legend",
    price: 499,
    image: "https://images.unsplash.com/photo-1569042493248-50c4c7106309?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "onepiece",
    description: "One of the Four Emperors comes to life in this legendary card. Featuring embossed artwork and real gold foil accents, this Shanks card has the power to change the tide of any battle with its Emperor's Haki ability.",
    inStock: false,
    rarity: "Mythic Rare",
    releaseDate: "2022-06-01",
  },
  
  // Yu-Gi-Oh Cards
  {
    id: "ygo-1",
    name: "Blue-Eyes White Dragon",
    price: 699,
    image: "https://images.unsplash.com/photo-1589677677517-5146686fc7f3?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "yugioh",
    description: "The iconic dragon from the original Yu-Gi-Oh series. This premium edition features holographic artwork and is a staple in any dragon-themed deck. Its high attack power and support cards make it a formidable card in competition.",
    inStock: true,
    featured: true,
    rarity: "Ultra Rare",
    releaseDate: "2020-12-10",
  },
  {
    id: "ygo-2",
    name: "Dark Magician Alternative Art",
    price: 599,
    image: "https://images.unsplash.com/photo-1579548122080-c35e8368cc55?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "yugioh",
    description: "Yugi's signature spellcaster in a limited edition alternative art style. This card features special artwork not found in regular booster packs and includes a commemorative display case.",
    inStock: true,
    rarity: "Secret Rare",
    releaseDate: "2021-02-05",
  },
  {
    id: "ygo-3",
    name: "Exodia the Forbidden One Complete Set",
    price: 899,
    image: "https://images.unsplash.com/photo-1594869926234-3d397a7a2e6c?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "yugioh",
    description: "The legendary instant-win condition in Yu-Gi-Oh. This complete set includes all five pieces of Exodia with matching serial numbers, presented in a collector's portfolio with certificate of authenticity.",
    inStock: false,
    rarity: "Complete Collection",
    releaseDate: "2021-07-07",
  },
  {
    id: "ygo-4",
    name: "Egyptian God Cards Trio",
    price: 799,
    image: "https://images.unsplash.com/photo-1595765040363-8e8b4ba8fbf9?q=80&w=1200&h=1200&auto=format&fit=crop",
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
