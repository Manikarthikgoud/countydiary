import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-900">Customer Reviews</h2>
        
        {/* Elfsight Google Reviews Widget */}
        <div className="mb-12">
          <div className="elfsight-app-cb391560-6835-4453-8c15-0002bee957ab" data-elfsight-app-lazy></div>
        </div>

        <div className="text-center mt-12 space-y-4">
          <a 
            href="https://maps.app.goo.gl/VHFDtBX3G65bMBZg7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition-colors"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink size={16} />
          </a>
          <div>
            <a 
              href="https://maps.app.goo.gl/VHFDtBX3G65bMBZg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700"
            >
              <span>Leave us a review</span>
              <Star size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}