// app/components/Hero.tsx
import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-background text-text py-32 px-4 sm:px-6 lg:px-8 h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-serif">
          The Art of Plating
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-200">
          Experience culinary excellence with our bespoke services, crafted with passion and precision.
        </p>
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="/booking"
            className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition duration-300 transform hover:scale-105"
          >
            Book a Service
          </a>
          <a
            href="/menu"
            className="inline-block bg-transparent border-2 border-secondary text-secondary font-bold py-4 px-10 rounded-full hover:bg-secondary hover:text-white transition duration-300 transform hover:scale-105"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </div>
  );
}
