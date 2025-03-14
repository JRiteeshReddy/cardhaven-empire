
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'pokemon' | 'onepiece' | 'yugioh';
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
    price: 249.99,
    image: "https://images.unsplash.com/photo-1613771404784-3a6768658abf?q=80&w=1200&h=1200&auto=format&fit=crop",
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
    price: 89.99,
    image: "https://images.unsplash.com/photo-1638362307447-e779955d1877?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "pokemon",
    description: "Pikachu reaches its V-Max form in this powerful card, featuring dynamic artwork and electric-type attacks that can devastate opponents. Its high HP and powerful attacks make it a staple in competitive decks.",
    inStock: true,
    rarity: "Ultra Rare",
    releaseDate: "2020-07-15",
  },
  {
    id: "poke-3",
    name: "Mewtwo V-Union",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1627856014754-2246f5c7e279?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "pokemon",
    description: "A unique four-card puzzle featuring the legendary Psychic-type Pokémon Mewtwo. When combined, these cards create one massive card with multiple powerful attacks and abilities.",
    inStock: true,
    rarity: "Special Art Rare",
    releaseDate: "2021-09-10",
  },
  {
    id: "poke-4",
    name: "Eevee Evolution Set",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1636572503931-c71da3f7886e?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "pokemon",
    description: "Complete set of all Eevee evolutions in their V and V-Max forms. This collection showcases each evolution with premium artwork and powerful game mechanics.",
    inStock: false,
    rarity: "Collection",
    releaseDate: "2021-06-18",
  },
  
  // One Piece Cards
  {
    id: "op-1",
    name: "Monkey D. Luffy Leader Card",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1643208589889-0735ad7218f0?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "onepiece",
    description: "The iconic Straw Hat captain in his most powerful form. This leader card grants special abilities to your entire deck and features premium foil artwork depicting Luffy's boundless determination.",
    inStock: true,
    featured: true,
    rarity: "Secret Rare",
    releaseDate: "2022-01-20",
  },
  {
    id: "op-2",
    name: "Roronoa Zoro Triple Blade",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "onepiece",
    description: "Zoro unleashes his full power with his three-sword style in this dynamic action card. The card features special cutting effects and bonuses when paired with other Straw Hat crew members.",
    inStock: true,
    rarity: "Super Rare",
    releaseDate: "2022-03-15",
  },
  {
    id: "op-3",
    name: "Trafalgar Law Tactical Genius",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1628542288790-9deb01f11778?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "onepiece",
    description: "The Surgeon of Death displays his tactical brilliance with his Room ability. This card allows for unique placement strategies and comes with a special die-cut border showcasing Law's devil fruit powers.",
    inStock: true,
    rarity: "Ultra Rare",
    releaseDate: "2022-05-10",
  },
  {
    id: "op-4",
    name: "Shanks Red-Haired Legend",
    price: 199.99,
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
    price: 149.99,
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
    price: 129.99,
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
    price: 299.99,
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
    price: 259.99,
    image: "https://images.unsplash.com/photo-1595765040363-8e8b4ba8fbf9?q=80&w=1200&h=1200&auto=format&fit=crop",
    category: "yugioh",
    description: "The three Egyptian God Cards - Slifer the Sky Dragon, Obelisk the Tormentor, and The Winged Dragon of Ra - in their full-power versions. This set includes premium gold borders and special effect text.",
    inStock: true,
    rarity: "Divine Rare",
    releaseDate: "2021-01-15",
  },
];

export const getProductsByCategory = (category: 'pokemon' | 'onepiece' | 'yugioh') => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
