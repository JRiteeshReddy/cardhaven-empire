
import React from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const CartDrawer = () => {
  const {
    state,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300",
          state.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
          state.isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Your Cart</span>
            {totalItems > 0 && (
              <span className="ml-2 text-sm bg-primary text-white px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingCart className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any cards to your cart yet.
            </p>
            <Button className="button-effect" onClick={closeCart}>
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {state.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-6 border-b border-gray-100 last:border-0"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium mb-1 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">
                      ${item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <button
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-2 min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="text-gray-400 hover:text-gray-600 text-xs mt-2"
                      onClick={() => removeItem(item.product.id)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <Button className="w-full mb-3 button-effect" asChild>
                <Link to="/checkout" onClick={closeCart}>
                  Checkout
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full text-gray-600 hover:bg-gray-100"
                onClick={() => {
                  clearCart();
                  closeCart();
                }}
              >
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
