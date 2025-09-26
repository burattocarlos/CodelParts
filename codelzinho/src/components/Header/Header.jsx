import React, { useState } from 'react';
import Navigation from './Navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = "/imagens/codelsite.png";

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} className="w-20 cursor-pointer" alt="Codel Parts" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="py-4 border-t border-gray-600">
            <Navigation mobile={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;