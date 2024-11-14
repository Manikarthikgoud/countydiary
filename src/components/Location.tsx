import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-900">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">County Dairy,<br />Uppal, Hyderabad, Telangana 500039</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Hours</h3>
                <p className="text-gray-600">Mon-Sat: 6:00 AM - 8:00 PM<br />Sunday: 7:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Contact</h3>
                <p className="text-gray-600">Phone: +91-7396153941 ,+91-7386243993<br />Email: info@countydairy.com</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.4628119072818!2d78.5717643407664!3d17.397514386705886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f1759d0dd71%3A0x24051665e4e27deb!2sCounty%20Dairy!5e1!3m2!1sen!2sin!4v1730186617857!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}