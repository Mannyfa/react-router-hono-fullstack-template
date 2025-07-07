// app/components/Menu.tsx
import React from 'react';

// Define a type for menu items for reusability and type-safety
export type MenuItemType = {
  id: number;
  name: string;
  description: string;
  tags: string;
  price: string;
  image_url: string;
};

interface MenuProps {
  items: MenuItemType[];
}

export function Menu({ items }: MenuProps) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500 py-12">Menu coming soon...</p>;
  }

  return (
    <div className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-text sm:text-5xl text-center font-serif mb-16">Our Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
              <img src={item.image_url} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-text font-serif">{item.name}</h3>
                <p className="text-gray-600 mt-4 flex-grow">{item.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-semibold text-primary">{item.price}</span>
                  <div className="flex space-x-2">
                    {item.tags.split(',').map(tag => (
                      <span key={tag} className="bg-secondary/20 text-secondary text-sm font-semibold px-3 py-1 rounded-full">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
