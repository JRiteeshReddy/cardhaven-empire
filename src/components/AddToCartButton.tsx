
import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  showText?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className,
  showText = true,
}) => {
  const { addItem } = useCart();

  return (
    <Button
      onClick={() => addItem(product)}
      disabled={!product.inStock}
      className={cn(
        "button-effect",
        !product.inStock && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {showText && (product.inStock ? "Add to Cart" : "Out of Stock")}
    </Button>
  );
};

export default AddToCartButton;
