import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { CartDrawer } from './CartDrawer';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-200" />
              <h1 className="text-2xl font-bold">PlantasMX</h1>
            </div>

            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar plantas exóticas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-green-200 transition-colors">Inicio</a>
              <a href="#" className="hover:text-green-200 transition-colors">Catálogo</a>
              <a href="#" className="hover:text-green-200 transition-colors">Cuidados</a>
              <a href="#" className="hover:text-green-200 transition-colors">Contacto</a>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-green-600 rounded-full transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-green-600 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-green-500">
              <form onSubmit={handleSearch} className="mt-4 mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar plantas exóticas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="py-2 hover:text-green-200 transition-colors">Inicio</a>
                <a href="#" className="py-2 hover:text-green-200 transition-colors">Catálogo</a>
                <a href="#" className="py-2 hover:text-green-200 transition-colors">Cuidados</a>
                <a href="#" className="py-2 hover:text-green-200 transition-colors">Contacto</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};