// app/components/Gallery.tsx
import React from 'react';

// Placeholder data - you'll fetch this from your API
const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2187', alt: 'A beautiful salad', category: 'Dish' },
  { id: 2, url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2281', alt: 'A delicious pizza', category: 'Dish' },
  { id: 3, url: 'https://images.unsplash.com/photo-1504754524776-8f4f37790774?q=80&w=2340', alt: 'A breakfast spread', category: 'Event' },
  { id: 4, url: 'https://images.unsplash.com/photo-1484723051597-626a5d18b695?q=80&w=2187', alt: 'Healthy breakfast bowl', category: 'Dish' },
  { id: 5, url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2195', alt: 'Avocado toast', category: 'Dish' },
  { id: 6, url: 'https://images.unsplash.com/photo-1498654896293-37a11aa421d4?q=80&w=2344', alt: 'A dinner party setup', category: 'Event' },
];


export function Gallery() {
  return (
    <div className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-text sm:text-5xl text-center font-serif mb-16">Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-auto object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
