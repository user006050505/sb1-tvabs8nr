import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              India's Premier B2B Textile Marketplace
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Connect with verified textile manufacturers, wholesalers, and suppliers across India
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                Start Selling <ArrowRight size={16} className="ml-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-base"
              >
                Source Now
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80"
              alt="Textile Manufacturing"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}