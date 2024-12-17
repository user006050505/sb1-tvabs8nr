import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Cotton Fabric',
    image: 'https://images.unsplash.com/photo-1596486889856-0e4821b0b072?auto=format&fit=crop&q=80',
    price: '₹150/meter',
    minOrder: '100 meters'
  },
  {
    id: '2',
    name: 'Silk Brocade',
    image: 'https://images.unsplash.com/photo-1603566345694-53c0ebe6ef4d?auto=format&fit=crop&q=80',
    price: '₹850/meter',
    minOrder: '50 meters'
  },
  {
    id: '3',
    name: 'Organic Linen',
    image: 'https://images.unsplash.com/photo-1579656450812-5b1da79e2474?auto=format&fit=crop&q=80',
    price: '₹450/meter',
    minOrder: '75 meters'
  },
  {
    id: '4',
    name: 'Handloom Cotton',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80',
    price: '₹250/meter',
    minOrder: '100 meters'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-orange-600 font-medium">{product.price}</p>
                <p className="text-sm text-gray-600">MOQ: {product.minOrder}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}