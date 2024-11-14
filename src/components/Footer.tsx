import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">County Dairy</h3>
            <p className="text-sky-200">Fresh dairy products straight from our farm to your table since 1970.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-sky-200 hover:text-white">Products</a></li>
              <li><a href="#location" className="text-sky-200 hover:text-white">Location</a></li>
              <li><a href="#reviews" className="text-sky-200 hover:text-white">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sky-200">
              <li>+91-7396153941</li>
              <li>info@countydairy.com</li>
              <li>County Dairy</li>
              <li>Uppal, Hyderabad, Telangana 500039</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-200 hover:text-white"><Facebook /></a>
              <a href="#" className="text-sky-200 hover:text-white"><Instagram /></a>
              <a href="#" className="text-sky-200 hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-200">
        <p>&copy; {new Date().getFullYear()} County Dairy. All rights reserved. <span className="mx-2">|</span> Designed and Developed by <a href='https://github.com/Manikarthikgoud' className="text-red-500 hover:text-red-700">Manikarthik Goud Muthagari</a></p>         </div>  
      </div>
    </footer>
  );
}