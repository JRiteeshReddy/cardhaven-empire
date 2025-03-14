
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import { cn } from "@/lib/utils";

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    if (!product) {
      // Handle case where product is not found
      navigate("/shop", { replace: true });
    }
  }, [product, navigate]);

  if (!product) {
    return null; // This will be redirected in the useEffect
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-gray-700">Shop</Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-gray-700">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>

        {/* Product Display */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square md:aspect-auto overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className={cn(
                  "w-full h-full object-contain transition-all duration-1000",
                  imageLoaded ? "img-loaded" : "img-loading"
                )}
                onLoad={handleImageLoad}
              />
              
              {!product.inStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                  <span className="text-white font-semibold text-lg tracking-wide uppercase bg-black/80 px-6 py-3 rounded-full">
                    Sold Out
                  </span>
                </div>
              )}
              
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full">
                  {product.rarity || product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 flex flex-col">
              <div className="slide-up delay-1">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-500 mb-4 text-sm">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)} • 
                  {product.releaseDate && ` Released: ${new Date(product.releaseDate).toLocaleDateString()}`}
                </p>
                <p className="text-3xl font-bold mb-6">Rs {product.price}</p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                    Availability
                  </h3>
                  <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AddToCartButton product={product} className="w-full sm:w-auto" />
                  <Button 
                    variant="outline" 
                    className="border-2" 
                    asChild
                  >
                    <Link to="/shop">
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back to Shop
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
