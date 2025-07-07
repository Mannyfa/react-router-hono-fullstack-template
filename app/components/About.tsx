// app/components/About.tsx
import React from 'react';
import { ChefHat } from 'lucide-react';

export function About() {
  return (
    <div className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <ChefHat className="mx-auto h-16 w-16 text-primary" />
        <h2 className="mt-6 text-4xl font-extrabold text-text sm:text-5xl font-serif">
          About the Chef
        </h2>
        <div className="mt-10 max-w-4xl mx-auto text-xl text-gray-600 space-y-6">
           <p>
            With over 15 years of experience in Michelin-starred kitchens, Chef [Name] brings a passion for innovation and a commitment to quality in every dish.
          </p>
          <p>
            Our philosophy is simple: use the freshest, locally-sourced ingredients to create unforgettable culinary experiences. We specialize in modern European cuisine with a creative twist.
          </p>
        </div>
      </div>
    </div>
  );
}
