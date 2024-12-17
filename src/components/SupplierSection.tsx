import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const suppliers = [
  {
    id: '1',
    name: 'Textile Masters India',
    location: 'Surat, Gujarat',
    rating: 4.8,
    verified: true,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Heritage Fabrics',
    location: 'Bhilwara, Rajasthan',
    rating: 4.6,
    verified: true,
    image: 'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Modern Textiles Ltd',
    location: 'Tirupur, Tamil Nadu',
    rating: 4.7,
    verified: true,
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80'
  }
];

export default function SupplierSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Verified Suppliers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48">
                <img
                  src={supplier.image}
                  alt={supplier.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{supplier.name}</h3>
                  {supplier.verified && (
                    <CheckCircle size={20} className="text-green-500" />
                  )}
                </div>
                <p className="text-gray-600 mb-2">{supplier.location}</p>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="ml-1">{supplier.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}