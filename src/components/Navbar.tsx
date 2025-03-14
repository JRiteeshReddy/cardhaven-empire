
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, openCart } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              CardKing
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`transition-colors hover:text-primary ${
                  isActive("/shop") ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                Shop
              </Link>
              
              <div className="group relative">
                <button className="flex items-center text-gray-700 hover:text-primary">
                  Categories <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/shop?category=pokemon"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Pokémon
                    </Link>
                    <Link
                      to="/shop?category=onepiece"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      One Piece
                    </Link>
                    <Link
                      to="/shop?category=yugioh"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Yu-Gi-Oh!
                    </Link>
                    <Link
                      to="/shop?category=mysterybox"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Mystery Box
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link
                to="/sign-in"
                className={`transition-colors hover:text-primary ${
                  isActive("/sign-in") ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                Sign In
              </Link>
              
              <button
                onClick={openCart}
                className="relative p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={openCart}
                className="relative p-2 mr-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${
                isActive("/")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`block px-3 py-2 rounded-md ${
                isActive("/shop")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Shop
            </Link>
            <div>
              <div className="px-3 py-2 font-medium text-gray-700">
                Categories
              </div>
              <div className="pl-6 space-y-1">
                <Link
                  to="/shop?category=pokemon"
                  className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Pokémon
                </Link>
                <Link
                  to="/shop?category=onepiece"
                  className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                >
                  One Piece
                </Link>
                <Link
                  to="/shop?category=yugioh"
                  className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Yu-Gi-Oh!
                </Link>
                <Link
                  to="/shop?category=mysterybox"
                  className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Mystery Box
                </Link>
              </div>
            </div>
            <Link
              to="/sign-in"
              className={`block px-3 py-2 rounded-md ${
                isActive("/sign-in")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      
      <CartDrawer />
    </>
  );
};

export default Navbar;
