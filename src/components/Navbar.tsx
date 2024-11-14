import React from 'react';
import { Milk, Phone, MapPin, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-sky-500 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Milk size={24} />
          <span className="text-2xl font-bold text-red-600">COUNTY DAIRY</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#products" className="hover:text-red-600 transition-colors">Products</a>
          <a href="#location" className="hover:text-red-600 transition-colors">Location</a>
          <a href="#reviews" className="hover:text-red-600 transition-colors">Reviews</a>
          <a href="#location" className="hover:text-red-600 transition-colors">Contact</a>
        </div>
        <a href="tel:+917396153941" className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
      </div>
    </nav>
  );
}