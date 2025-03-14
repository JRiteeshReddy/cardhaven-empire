
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { products, getFeaturedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const featuredProducts = getFeaturedProducts();
  const slideTimerRef = useRef<number | null>(null);
  const totalSlides = products.filter(p => p.category === "pokemon").length;

  useEffect(() => {
    const startSlideTimer = () => {
      slideTimerRef.current = window.setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    };

    startSlideTimer();

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const pokemonCards = products.filter(p => p.category === "pokemon");

  return (
    <div className="min-h-screen flex flex-col">
      <section className="h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-5"></div>
          <div className="max-w-md mx-auto text-center md:text-left w-full slide-up delay-1">
            <span className="inline-block mb-3 text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              Premium Trading Cards
            </span>
            <h1 className="hero-text mb-6">
              <span className="block">Welcome to</span>
              <span className="text-primary font-bold">Cards</span>
              <span className="font-bold">ForYou</span>
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Discover our exclusive collection of rare and premium trading cards. 
              From Pokémon to One Piece, we have the cards you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="button-effect" asChild>
                <Link to="/shop" target="_blank">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {pokemonCards.map((card, index) => (
              <div
                key={card.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 flex items-center justify-center",
                  currentSlide === index ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="max-w-[70%] max-h-[80%] relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-contain bg-white shadow-md rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white rounded-lg">
                    <div className="max-w-lg slide-up">
                      <h3 className="text-3xl font-bold mb-2">{card.name}</h3>
                      <p className="text-white/80 mb-4">{card.rarity}</p>
                      <p className="text-2xl font-bold mb-4">Rs {card.price.toLocaleString()}</p>
                      <Button 
                        className="bg-white text-primary hover:bg-white/90 button-effect"
                        asChild
                      >
                        <Link to={`/product/${card.id}`}>View Card</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 right-8 flex items-center space-x-3 z-10">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-black/20 backdrop-blur-sm text-black hover:bg-black/30 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-black/20 backdrop-blur-sm text-black hover:bg-black/30 transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentSlide === index
                    ? "w-6 bg-black"
                    : "bg-black/50 hover:bg-black/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Cards</h2>
            <p className="text-gray-600">
              Check out our most popular and rare cards from various collections. 
              These cards are in high demand and limited in quantity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="slide-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="button-effect" asChild>
              <Link to="/shop">View All Cards</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of trading card collections, featuring popular
              franchises and rare editions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pokémon",
                description: "Explore our vast collection of Pokémon cards, from common to ultra rare.",
                image: "https://images.unsplash.com/photo-1627856004133-2f3af5cc80fd?q=80&w=1600&h=900&auto=format&fit=crop",
                link: "/shop?category=pokemon",
              },
              {
                title: "One Piece",
                description: "Join the adventure with our premium selection of One Piece trading cards.",
                image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&h=900&auto=format&fit=crop",
                link: "/shop?category=onepiece",
              },
              {
                title: "Yu-Gi-Oh!",
                description: "Discover powerful Yu-Gi-Oh! cards to strengthen your deck and collection.",
                image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=1600&h=900&auto=format&fit=crop",
                link: "/shop?category=yugioh",
              },
            ].map((collection, index) => (
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Link
                  to={collection.link}
                  className="block group overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {collection.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {collection.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Sign up for our membership to receive exclusive offers, early access to new
            releases, and join a community of passionate card collectors.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 button-effect"
            asChild
          >
            <Link to="/join-contact">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
