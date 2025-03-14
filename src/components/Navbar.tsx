
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Join & Contact", path: "/join-contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-3 backdrop-blur-md bg-white/80 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold transition-all hover:opacity-80"
        >
          <span className="text-primary">Cards</span>
          <span className="font-bold">ForYou</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all hover:text-primary fancy-link",
                location.pathname === link.path && "text-primary after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "block w-6 h-0.5 bg-current transition-transform duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )} 
          />
          <span 
            className={cn(
              "block w-6 h-0.5 bg-current transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "block w-6 h-0.5 bg-current transition-transform duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )} 
          />
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xl font-medium py-2 transition-all hover:text-primary",
                location.pathname === link.path && "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <button
          onClick={openCart}
          className="relative p-2 button-effect text-primary rounded-full hover:bg-primary/5"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-semibold text-white bg-primary rounded-full animate-scale-in">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
