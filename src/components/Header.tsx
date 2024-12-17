import React, { useState } from 'react';
import { Search, ShoppingCart, User, Bell, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center gap-2">
            🧵 BharatFabrics
          </Link>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fabrics, manufacturers..."
                className="w-full px-4 py-1.5 rounded-lg text-gray-800 focus:outline-none"
              />
              <Search className="absolute right-3 top-2 text-gray-500" size={16} />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-3">
            <Link to="/suppliers" className="hover:text-orange-200 px-2 text-sm">Suppliers</Link>
            <Link to="/cart" className="flex items-center gap-1 hover:text-orange-200 px-2 text-sm">
              <ShoppingCart size={16} />
              <span>Cart</span>
            </Link>
            <Link to="/notifications" className="flex items-center gap-1 hover:text-orange-200 px-2 text-sm">
              <Bell size={16} />
              <span>Alerts</span>
            </Link>
            <Button
              as={Link}
              to="/seller/login"
              variant="secondary"
              size="sm"
              className="ml-2 text-sm"
            >
              <User size={14} />
              <span>Sign In</span>
            </Button>
          </nav>

          <button 
            className="md:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-orange-500">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search fabrics, manufacturers..."
                  className="w-full px-4 py-1.5 rounded-lg text-gray-800 focus:outline-none text-sm"
                />
                <Search className="absolute right-3 top-2 text-gray-500" size={16} />
              </div>
              <Link to="/suppliers" className="hover:text-orange-200 py-1.5 text-sm">Suppliers</Link>
              <Link to="/cart" className="flex items-center gap-1 hover:text-orange-200 py-1.5 text-sm">
                <ShoppingCart size={16} />
                <span>Cart</span>
              </Link>
              <Link to="/notifications" className="flex items-center gap-1 hover:text-orange-200 py-1.5 text-sm">
                <Bell size={16} />
                <span>Alerts</span>
              </Link>
              <Button
                as={Link}
                to="/seller/login"
                variant="secondary"
                size="sm"
                className="w-full justify-center text-sm"
              >
                <User size={14} />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}