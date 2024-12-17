import React from 'react';
import { TrendingUp, Users, Globe, BarChart } from 'lucide-react';
import { Button } from './Button';

const features = [
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Reach millions of buyers and expand your business across India',
    action: 'Learn More',
  },
  {
    icon: Users,
    title: 'Verified Buyers',
    description: 'Connect with genuine buyers and build lasting business relationships',
    action: 'View Network',
  },
  {
    icon: Globe,
    title: 'Pan India Presence',
    description: 'Access markets across all states and territories in India',
    action: 'Explore Markets',
  },
  {
    icon: BarChart,
    title: 'Business Intelligence',
    description: 'Get insights and analytics to make informed business decisions',
    action: 'View Analytics',
  },
];

export default function MarketingSection() {
  const handleAction = (action: string) => {
    // Add your action handling logic here
    console.log(`Action clicked: ${action}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose BharatFabrics?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <feature.icon
                size={40}
                className="text-orange-600 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleAction(feature.action)}
                className="w-full"
              >
                {feature.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}