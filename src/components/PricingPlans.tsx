import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

const plans = [
  {
    name: 'Basic',
    price: '₹999/month',
    features: [
      'Basic business listing',
      '100 product listings',
      'Email support',
      'Basic analytics',
    ],
    recommended: false,
  },
  {
    name: 'Premium',
    price: '₹2,999/month',
    features: [
      'Featured business listing',
      'Unlimited product listings',
      'Priority support',
      'Advanced analytics',
      'Lead management tools',
      'Marketing insights',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom business solutions',
      'Dedicated account manager',
      'API access',
      'Advanced integrations',
      'Custom reporting',
      'Premium marketing tools',
    ],
    recommended: false,
  },
];

export default function PricingPlans() {
  const handleGetStarted = (planName: string) => {
    // Add your plan selection logic here
    console.log(`Selected plan: ${planName}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 ${
                plan.recommended
                  ? 'bg-orange-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300'
                  : 'bg-white shadow-md hover:shadow-xl transition-shadow'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={20} className="flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.recommended ? 'secondary' : 'primary'}
                className="w-full"
                onClick={() => handleGetStarted(plan.name)}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}