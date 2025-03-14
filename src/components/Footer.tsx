
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="text-xl font-semibold">
            <span className="text-white">Cards</span>
            <span className="font-bold text-secondary">ForYou</span>
          </Link>
          <p className="text-white/80 text-sm max-w-xs">
            Your premier destination for high-quality trading cards. 
            We offer the latest and rarest cards for collectors and players alike.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white/80 hover:text-white text-sm transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-white/80 hover:text-white text-sm transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/join-contact" className="text-white/80 hover:text-white text-sm transition-colors">
                Join & Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Card Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/shop?category=pokemon" className="text-white/80 hover:text-white text-sm transition-colors">
                Pokémon
              </Link>
            </li>
            <li>
              <Link to="/shop?category=onepiece" className="text-white/80 hover:text-white text-sm transition-colors">
                One Piece
              </Link>
            </li>
            <li>
              <Link to="/shop?category=yugioh" className="text-white/80 hover:text-white text-sm transition-colors">
                Yu-Gi-Oh!
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <address className="not-italic text-white/80 space-y-2 text-sm">
            <p>123 Card Street</p>
            <p>Card City, CC 12345</p>
            <p className="pt-2">
              <a href="mailto:info@cardsforyou.com" className="hover:text-white transition-colors">
                info@cardsforyou.com
              </a>
            </p>
            <p>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                (123) 456-7890
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} CardsForYou. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
