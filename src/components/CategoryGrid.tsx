import React from 'react';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

export default function CategoryGrid() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <span className="text-2xl md:text-3xl mb-2 block">{category.icon}</span>
              <h3 className="font-medium text-sm md:text-base text-gray-800">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}