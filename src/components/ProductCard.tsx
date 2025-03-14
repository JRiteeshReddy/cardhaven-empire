
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      className="product-card group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-inner h-full flex flex-col rounded-2xl overflow-hidden bg-white shadow-card transition-all duration-500">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              imageLoaded ? "img-loaded" : "img-loading",
              isHovered && "scale-105"
            )}
            onLoad={handleImageLoad}
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <span className="text-white font-semibold text-sm tracking-wide uppercase bg-black/80 px-4 py-2 rounded-full">
                Sold Out
              </span>
            </div>
          )}

          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full">
              {product.rarity}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-5">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            {product.category}
          </span>
          <h3 className="text-lg font-medium mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          
          <div className="mt-auto flex space-x-2">
            <Button 
              className="w-full bg-primary text-white hover:bg-primary/90 button-effect"
              asChild
            >
              <Link to={`/product/${product.id}`}>View Card</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
