
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryTab from "@/components/CategoryTab";
import { cn } from "@/lib/utils";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryParam
  );
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: "pokemon", name: "Pokémon" },
    { id: "onepiece", name: "One Piece" },
    { id: "yugioh", name: "Yu-Gi-Oh!" },
  ];

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading data
    const timer = setTimeout(() => {
      if (activeCategory) {
        setDisplayedProducts(
          getProductsByCategory(activeCategory as "pokemon" | "onepiece" | "yugioh")
        );
      } else {
        setDisplayedProducts(products);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleSelectCategory = (category: string | null) => {
    setActiveCategory(category);
    
    // Update URL query parameter
    if (category) {
      navigate(`/shop?category=${category}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Shop Hero */}
      <section className="bg-white py-12">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Trading Card Shop</h1>
          <p className="text-gray-600 text-lg mb-8">
            Browse our extensive collection of premium trading cards from your favorite series.
          </p>
          <CategoryTab
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4">
          {isLoading ? (
            // Skeleton loading state
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
                >
                  <div className="aspect-square bg-gray-200" />
                  <div className="p-5">
                    <div className="h-3 bg-gray-200 rounded mb-3 w-1/3" />
                    <div className="h-5 bg-gray-200 rounded mb-4 w-3/4" />
                    <div className="h-8 bg-gray-200 rounded mb-5 w-1/2" />
                    <div className="h-10 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={cn(
                    "slide-up",
                    `delay-${Math.min(index, 5)}`
                  )}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">
                We couldn't find any products in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
