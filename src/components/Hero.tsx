import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-b from-sky-400 to-sky-200">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/assorted-dairy-milk-products-vector-set_1308-132270.jpg?t=st=1731585571~exp=1731589171~hmac=97d09a122d85158797c0231a6be67f9955c5d155ed22fbc6b5e9e0b239167fbe&w=1380')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto pt-20 px-6">
        <h1 className="text-6xl font-bold text-red-600 mb-4">COUNTY DAIRY</h1>
        <p className="text-3xl text-sky-900 mb-8">RICH & GOOD</p>
        <p className="text-xl text-gray-800 max-w-2xl">
          Fresh dairy products delivered straight from our farm to your table. 
          Experience the richness of pure, natural dairy products made with care and tradition.
        </p>
        <a href="tel:+917396153941">
        <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
          Order Now
        </button>
        </a>
      </div>
    </div>
  );
}