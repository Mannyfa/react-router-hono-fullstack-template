// app/components/Hero.tsx
import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 h-[60vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2187&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Exquisite Culinary Experiences
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
          From intimate dinners to grand events, discover the art of fine dining, tailored just for you.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/booking"
            className="inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition duration-300"
          >
            Book a Service
          </a>
          <a
            href="/menu"
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </div>
  );
}
