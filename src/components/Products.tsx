import React from 'react';
import { Milk, Cookie, Sandwich } from 'lucide-react';

const products = [
  {
    name: 'Fresh Milk',
    price: '₹90.00/L',
    description: 'Pure and fresh cow milk, straight from our farm',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80'
  },
  {
    name: 'Curd',
    price: '₹100/kg',
    description: 'Creamy and thick natural yogurt',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80'
  },
  {
    name: 'Butter',
    price: '₹500/kg',
    description: 'Hand-churned pure butter',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Ghee',
    price: '₹800/kg',
    description: 'Clarified butter made through traditional method',
    image: 'https://img.freepik.com/free-photo/high-angle-delicious-food-children-jar_23-2149512853.jpg?t=st=1730817372~exp=1730820972~hmac=a6eaf5d036df4c615bc96ea6def4184900846209bdb876147e42a9d412682af9&w=360'
  },
  {
    name: 'Kova',
    price: '₹100/500g',
    description: 'Rich and dense milk solids',
    image: 'https://img.freepik.com/free-photo/still-life-with-delicious-marzipan_23-2149717521.jpg?t=st=1730817687~exp=1730821287~hmac=2abb26515b20c6a4b663e8f4db856303e626c6d9cb0ba460927eccf9da9411f6&w=360'
  },
  {
    name: 'Paneer',
    price: '₹400/kg',
    description: 'Fresh cottage cheese made daily',
    image: 'https://img.freepik.com/free-photo/pngcubes-tofu-bowl-with-leaves-isolated-white-background_185193-163134.jpg?t=st=1730816727~exp=1730820327~hmac=8d90d6b3b31e2ed2b269b44b4082939b6739ff34d7c185836132cec6a9c17c0f&w=1060'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-900">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold text-lg">{product.price}</span>
                  <a href="tel:+917396153941">
        <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-colors">
          Order Now
        </button>
        </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}