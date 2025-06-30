// app/components/About.tsx
import React from 'react';
import { ChefHat } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <ChefHat className="mx-auto h-12 w-12 text-amber-500" />
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About the Chef
        </h2>
        <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-600">
           <p>
            Welcome! This is a placeholder for the chef's bio. Here you can write about your passion for cooking, your culinary philosophy, years of experience, and what makes your services unique.
          </p>
          <p className="mt-4">
            Specialties include farm-to-table concepts, modern European cuisine, and bespoke menu creation.
          </p>
        </div>
         {/* You can add a photo and a testimonial slider here later */}
      </div>
    </div>
  );
}
