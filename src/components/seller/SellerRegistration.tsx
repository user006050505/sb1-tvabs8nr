import React from 'react';
import SellerRegistrationForm from './SellerRegistrationForm';

export default function SellerRegistration() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Join BharatFabricsHub as a Seller
          </h1>
          <p className="mt-2 text-gray-600">
            Connect with buyers across India and grow your textile business
          </p>
        </div>
        
        <SellerRegistrationForm />
      </div>
    </div>
  );
}